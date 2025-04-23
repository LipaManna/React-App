import React from 'react'
import DashboardHeader from './DashboardHeader'
import CurrentDateRevenue from './currentDateRevenue/CurrentDateRevenue'
import ArticlesWrapper from './articles/ArticlesWrapper'
import ChartWrapper from './charts/ChartWrapper'

const DashboardContent = () => {
  return (
    <div className='dashboard_content_wrap'>
      <DashboardHeader/>
      <h4>Dashboard</h4>
      <CurrentDateRevenue/>
      <ArticlesWrapper/>
      <ChartWrapper/>
    </div>
  )
}

export default DashboardContent
