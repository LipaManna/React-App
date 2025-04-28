import { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  Column,
  TableBody,
  Row,
  Cell,
} from "react-aria-components";
import '../../../styles/table.scss'
import ProgressBarComponent from "../activeusers/ProgressBarComponent";
import AvatarStack, { IMember } from "../../shared/avatar/AvatarStack";
import { currencyCodes } from "../../../models/enums/currencyCodes";

interface IProjectTableDataProps {
  id: number;
  companyName: string;
  companyLogo: string;
  members:IMember[];
  budget: string;
  currencyCode: string;
  completionTargetValue: number;
  completionCurrentValue: number;
}

const ProjectTable = () => {
  const [projectTableData, setProjectTableData] = useState<
    IProjectTableDataProps[]
  >([]);
  const getProjectTableData = async () => {
    try{
      const res = await fetch("src/models/mockProjectData.json");
    const data = await res.json();
    setProjectTableData(data);
    }
    catch(err){
      console.log(err)
    }
  };
  useEffect(() => {
    getProjectTableData();
    return setProjectTableData([]);
  }, []);

  const sortTableData = (columnName: keyof IProjectTableDataProps) => {
    return projectTableData.sort((a, b) => Number(a[columnName]) - Number(b[columnName]));
  }

  return (
    <div className="project_overall_table_wrap">
    <Table aria-label="projects table" className="project_table">
      <TableHeader>
        <Column isRowHeader style={{ width: "250px" }}>
          Companies
        </Column>
        <Column style={{ width: "200px" }}>Members</Column>
        <Column style={{ width: "100px" }}>Budget</Column>
        <Column style={{ width: "150px" }}>Completion</Column>
      </TableHeader>
      <TableBody>
        {sortTableData('budget').map((CellData) => {
          return (
            <Row>
              <Cell>
                <span className="company">
                  <img src={CellData.companyLogo} alt={CellData.companyName} />
                  <span>{CellData.companyName}</span>
                </span>
              </Cell>
              <Cell>
                <AvatarStack members={CellData.members}/>
              </Cell>
              <Cell className="budget">{currencyCodes[CellData.currencyCode as keyof typeof currencyCodes]}{CellData.budget}</Cell>
              <Cell>
                <span>
                  {Math.round(
                    (CellData.completionCurrentValue * 100) /
                      CellData.completionTargetValue
                  ) + "%"}
                </span>
                <ProgressBarComponent
                  value={Math.round(
                    (CellData.completionCurrentValue * 100) /
                      CellData.completionTargetValue
                  )}
                  maxValue={CellData.completionTargetValue}
                />
              </Cell>
            </Row>
          );
        })}
      </TableBody>
    </Table>
    </div>
  );
};

export default ProjectTable;
