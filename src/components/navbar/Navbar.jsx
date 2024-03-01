import "./navbar.css";
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SettingsIcon from '@mui/icons-material/Settings';
const Navbar = () =>{
return (
    <div className="navbar">
<span className="logo">
Priyankagram
</span>
<div className="icons">
    <div className="icon">
        <div className="iconImg">
        <NotificationsIcon/>
        </div>
        <div className="counter">2</div>
        </div>
      
         <div className="icon">
        <div className="iconImg">
        <MailOutlineIcon/>
        </div>
        <div className="counter">2</div>
        </div>
        <div className="icon">
        <div className="iconImg">
        <SettingsIcon/>
        </div>
        <div className="counter">2</div>
    </div>
</div>
    </div>
)
}
export default Navbar;