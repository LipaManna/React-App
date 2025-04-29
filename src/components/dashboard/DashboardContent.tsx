
import CurrentDateRevenue from './currentDateRevenue/CurrentDateRevenue'
import ArticlesWrapper from './articles/ArticlesWrapper'
import ChartWrapper from './charts/ChartWrapper'
import ProjectsAndOrdersWrap from './projects&orders/ProjectsAndOrdersWrap'

const DashboardContent = () => {
  return (
    <div className='dashboard_content_wrap'>
      <h4>Dashboard</h4>
      <CurrentDateRevenue/>
      <ArticlesWrapper/>
      <ChartWrapper/>
      <ProjectsAndOrdersWrap/>
    </div>
  )
}

export default DashboardContent
