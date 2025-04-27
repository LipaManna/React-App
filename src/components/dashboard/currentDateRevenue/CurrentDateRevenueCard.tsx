
import { IconType } from "react-icons";

export interface ICurrentDateRevenueCardProps {
  cardHeading: string;
  value: string;
  increamentOrDecreament?: number;
  id: number;
  className?:string;
  img: string;
  IconComponent?: IconType;
}

const CurrentDateRevenueCard: React.FC<ICurrentDateRevenueCardProps> = ({
  cardHeading,
  value,
  id,
  className,
  IconComponent
}) => {
  return (
    <li key={id} className={className}>
      <div className="current_date_revenue_card_left">
        <p className="card_heading">{cardHeading}</p>
        <p className="revenue_value">{value.toLocaleString()}</p>
      </div>
      <span className="current_date_revenue_card_right">
        {IconComponent ? <IconComponent size={22} /> : null}
      </span>
    </li>
  );
};

export default CurrentDateRevenueCard;
