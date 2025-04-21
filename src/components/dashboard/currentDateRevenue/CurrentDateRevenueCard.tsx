import { ReactNode } from "react";

export interface ICurrentDateRevenueCardProps {
  cardHeading: string;
  value: string;
  increamentOrDecreament?: number;
  img: string | ReactNode;
  key: number;
  className?:string;
}

const CurrentDateRevenueCard: React.FC<ICurrentDateRevenueCardProps> = ({
  cardHeading,
  value,
  img,
  key,
  className
}) => {
  return (
    <li key={key} className={className}>
      <div className="current_date_revenue_card_left">
        <p className="card_heading">{cardHeading}</p>
        <p className="revenue_value">{value}</p>
      </div>
      <span className="current_date_revenue_card_right">{img}</span>
    </li>
  );
};

export default CurrentDateRevenueCard;
