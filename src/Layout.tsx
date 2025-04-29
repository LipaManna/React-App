import AppWrapper from './components/shared/appWrapper/AppWrapper'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <AppWrapper/>
      <Outlet/>
    </>
  )
}

export default Layout
