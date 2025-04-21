import { ReactNode } from "react";

interface ICurrentDateRevenueCardProps {
  cardHeading: string;
  value: number;
  increamentOrDecreament?: number;
  img: string | ReactNode;
  key: number;
}

const CurrentDateRevenueCard: React.FC<ICurrentDateRevenueCardProps> = ({
  cardHeading,
  value,
  img,
  key
}) => {
  return (
    <div className="current_date_revenue_card_wrap" key={key}>
      <div className="current_date_revenue_card_left">
        <p className="card_heading">{cardHeading}</p>
        <p>{value}</p>
      </div>
      <span className="current_date_revenue_card_right">{img}</span>
    </div>
  );
};

export default CurrentDateRevenueCard;
