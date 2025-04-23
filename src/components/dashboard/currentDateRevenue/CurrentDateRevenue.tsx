import CurrentDateRevenueCard, {
  ICurrentDateRevenueCardProps,
} from "./CurrentDateRevenueCard";
import { useEffect, useState } from "react";
import * as RIcons from "react-icons/io5";
import "./currentDateRevenue.scss";

const CurrentDateRevenue = () => {
  const [staticRevenueData, setStaticRevenueData] = useState<
    ICurrentDateRevenueCardProps[]
  >([]);
  const getRevenueData = async () => {
    try{
      const res = await fetch("src/models/mockRevenueData.json");
      const data = await res.json();
      setStaticRevenueData(data.staticRevenueData);
    }
    catch (error) {
      console.error("Failed to fetch:", error);
    }
  }
  useEffect(() => {
    getRevenueData();
    return () => {
      setStaticRevenueData([]);
    }
  },[])

  return (
    <ul className="current_date_revenue_card_row">
      {staticRevenueData.map((dataElement) => {
        const IconComponent = RIcons[dataElement.img as keyof typeof RIcons];
        return (
          <CurrentDateRevenueCard
            {...dataElement }
            IconComponent={IconComponent}
            key={dataElement.id}
          />
        );
      })}
    </ul>
  );
};

export default CurrentDateRevenue;
