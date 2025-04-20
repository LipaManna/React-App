
import { Link} from 'react-aria-components'
import { BsFillCreditCard2FrontFill } from 'react-icons/bs'
import { FaUserAlt } from 'react-icons/fa'
import { FaChartSimple } from 'react-icons/fa6'
import { GoHomeFill } from 'react-icons/go'

const LeftPanel = () => {
  return (
    <div className='left_panel_wrap'>
      <h1>Vista Panel.</h1>

      <ul className="navigation_menu">
            <li className='active_item'><Link><span><GoHomeFill /></span> Dashboard</Link></li>
            <li><Link><span><FaChartSimple /></span> Tables</Link></li>
            <li><Link><span><BsFillCreditCard2FrontFill /></span> Billing</Link></li>
      </ul>

      <ul className="panel_bottom">
        <li><Link><span><FaUserAlt /></span>Profile</Link></li>
      </ul>
    </div>
  )
}

export default LeftPanel
