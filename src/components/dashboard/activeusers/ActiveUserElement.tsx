import { IconType } from "react-icons";
import ProgressBarComponent from "./ProgressBarComponent";

export interface IActiveUserElementProps {
  id: number;
  img: any;
  subHeading: string;
  maxValue: number;
  value: number;
  className: string;
  IconComponent?: IconType;
}

const ActiveUserElement: React.FC<IActiveUserElementProps> = ({
  id,
  subHeading,
  value,
  maxValue,
  className,
  IconComponent,
}) => {
  const resValue = ((maxValue - value) / maxValue) * 100;

  return (
    <li key={id} className={className}>
      <div className="active_user_card_top">
        <span className="active_user_icon">
          {IconComponent ? <IconComponent size={12} /> : null}
        </span>
        <span className="sub_heading">{subHeading}</span>
      </div>
      <div className="active_user_card_progress">
        <p className="progress_value">{value.toLocaleString()}</p>
        <ProgressBarComponent value={resValue} maxValue={100} />
      </div>
    </li>
  );
};

export default ActiveUserElement;
