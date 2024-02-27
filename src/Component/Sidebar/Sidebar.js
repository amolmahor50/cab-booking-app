import {NavLink} from 'react-router-dom';
import './Sidebar.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import LegendToggleIcon from '@mui/icons-material/LegendToggle';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import CommuteIcon from '@mui/icons-material/Commute';

function Sidebar() {
  return (
    <div  className="containt-side-section">
        <div className="groop">
          <div className="overlap">
            <DashboardIcon/>
            <NavLink to='/dashboard' className='link'>Dashboard</NavLink>
          </div>
          <div className="overlap">
            <GroupIcon/>
            <NavLink to='/users' className='link'>Users Management</NavLink>
          </div>
          <div className="overlap">
            <LegendToggleIcon/>
            <NavLink to='/drivers' className='link'>Driver Management</NavLink>
          </div>
          <div className="overlap">
            <LocalTaxiIcon/>
            <NavLink to='/cabs' className='link'>Cab Management</NavLink>
          </div>
          <div className="overlap">
            <SupportAgentIcon/>
            <NavLink to='/customers' className='link'>Customer Management</NavLink>
          </div>
          <div className="overlap">
            <CommuteIcon/>
            <NavLink to='/trips' className='link'>Trips</NavLink>
          </div>
        </div>
    </div>
  )
}

export default Sidebar