import React from 'react'
import DashboardHeader from './DashboardHeader'
import CurrentDateRevenue from './currentDateRevenue/CurrentDateRevenue'

const DashboardContent = () => {
  return (
    <div className='dashboard_content_wrap'>
      <DashboardHeader/>
      <h4>Dashboard</h4>
      <CurrentDateRevenue/>
    </div>
  )
}

export default DashboardContent
