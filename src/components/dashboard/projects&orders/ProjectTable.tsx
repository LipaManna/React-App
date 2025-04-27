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

interface IProjectTableDataProps {
  id: number;
  companyName: string;
  companyLogo: string;
  members: { fullname: string; avatar: string }[];
  budget: string;
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

  return (
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
        {projectTableData.map((CellData) => {
          const membersData = CellData.members;
          const visibleMembers = membersData.slice(0, 4);
          const extraCount = membersData.length - 4;
          return (
            <Row>
              <Cell>
                <span className="company">
                  <img src={CellData.companyLogo} alt={CellData.companyName} />
                  <span>{CellData.companyName}</span>
                </span>
              </Cell>
              <Cell>
                <span>
                  {visibleMembers.map((member: any) => {
                    return (
                      <img
                        src={member.avatar}
                        alt={member.fullName}
                        className="avatar"
                      />
                    );
                  })}
                </span>
                {extraCount > 0 && <span className="extraCount">+{extraCount}</span>}
              </Cell>
              <Cell className="budget">{CellData.budget}</Cell>
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
  );
};

export default ProjectTable;
