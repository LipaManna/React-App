import ActiveUserElementWrap from "../activeusers/ActiveUserElementWrap";
import AreaChart from "./AreaChart";
import Barchart from "./BarChart";
import "./charts.scss";

const sampleData = [
  { date: "2024-01", apples: 30, bananas: 20 },
  { date: "2024-02", apples: 50, bananas: 35 },
  { date: "2024-03", apples: 40, bananas: 30 },
  { date: "2024-04", apples: 60, bananas: 40 },
  { date: "2024-05", apples: 70, bananas: 50 },
];
const areaKeys = { apples: "#4FD1C5", bananas: "#7a7f83" };

const ChartWrapper = () => {
  return (
    <div className="component_wrapper">
      <div className="common_component_wrap bar_chart_wrap">
      <Barchart />
      <ActiveUserElementWrap/>
      </div>
      <div className="common_component_wrap" style={{width: "70%"}}>
        <AreaChart
          width="100%"
          height={420}
          data={sampleData}
          areaKeys={areaKeys}
        />
      </div>
    </div>
  );
};

export default ChartWrapper;
