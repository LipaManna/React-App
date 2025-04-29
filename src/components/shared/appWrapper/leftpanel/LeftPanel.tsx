
import { Link} from 'react-aria-components'
import { BsFillCreditCard2FrontFill } from 'react-icons/bs'
import { FaUserAlt } from 'react-icons/fa'
import { FaChartSimple } from 'react-icons/fa6'
import { GoHomeFill } from 'react-icons/go'
import './leftPanel.scss'
import { useLocation } from 'react-router-dom'


const LeftPanel = () => {
  const location = useLocation();
  return (
    <div className='left_panel_wrap'>
      <h1>Vista Panel.</h1>

      <ul className="navigation_menu">
            <li className={`${location.pathname === 'dashboard' ? 'active_item' : ''}`}><Link href='/dashboard'><span><GoHomeFill /></span> Dashboard</Link></li>
            <li className={`${location.pathname === 'tables' ? 'active_item' : ''}`}><Link href='/tables'><span><FaChartSimple /></span> Tables</Link></li>
            <li className={`${location.pathname === 'billing' ? 'active_item' : ''}`}><Link href='/billing'><span><BsFillCreditCard2FrontFill /></span> Billing</Link></li>
      </ul>

      <ul className="panel_bottom">
        <li className={`${location.pathname === 'profile' ? 'active_item' : ''}`}><Link href='/profile'><span><FaUserAlt /></span>Profile</Link></li>
      </ul>
    </div>
  )
}

export default LeftPanel
