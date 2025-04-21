
import DashboardContent from './DashboardContent';
import LeftPanel from './LeftPanel'
import './dashboard.scss';

const Dashboard = () => {
  return (
    <div className='common_dashboard_wrap'>
      <LeftPanel/>
      <DashboardContent/>
    </div>
  )
}

export default Dashboard
