import { ProgressBar, Label } from "react-aria-components";
interface IProgressBar {
  value: any;
  label?: string;
  maxValue: number;
}
import '../../../styles/progressBar.scss'
const ProgressBarComponent: React.FC<IProgressBar> = ({ value, label, maxValue }) => {
  // return <progress value={value} max={maxValue} />
  return (
    <ProgressBar value={value}>
      {({ percentage, valueText }) => (
          <div className="bar">
            <div className="fill" style={{ width: percentage}} />
          </div>
      )}
    </ProgressBar>
  );
};

export default ProgressBarComponent;
