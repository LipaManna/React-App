import CurrentDateRevenueCard, {
  ICurrentDateRevenueCardProps,
} from "./CurrentDateRevenueCard";
import { useEffect, useState } from "react";
import * as RIcons from "react-icons/io5";
import './currentDateRevenue.scss';

const CurrentDateRevenue = () => {
  const [staticRevenueData, setStaticRevenueData] = useState<
    ICurrentDateRevenueCardProps[]
  >([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("/mockRevenueData.json")
    .then((res) => res.json())
    .then((data) => {
      setStaticRevenueData(data.staticRevenueData);
    setLoading(false);
  })
  .catch(err => {
    console.error("Failed to fetch:", err);
    setLoading(false);
  });
  }, []);
  return (
    <ul className="current_date_revenue_card_row">
      {staticRevenueData.map((dataElement) => {
        const IconComponent = RIcons[dataElement.img as keyof typeof RIcons];
        return (
          <CurrentDateRevenueCard
            cardHeading={dataElement.cardHeading}
            value={dataElement.value.toLocaleString()}
            img={IconComponent ? <IconComponent size={22} /> : null}
            key={dataElement.key}
            className={dataElement.className}
          />
        );
      })}
    </ul>
  );
};

export default CurrentDateRevenue;
