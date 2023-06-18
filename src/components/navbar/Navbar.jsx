import "./navbar.scss";
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

const Navbar = () => {
    return (
        <div>
            <div className="navbar">
                <div className="wrapper">
                    <div className="search">
                        <input type="text" placeholder="Search..." />
                        <SearchIcon className="icon"/>
                    </div>
                    <div className="items">
                        <div className="item">
                            <LanguageIcon className="icon"/>
                            English

                        </div>
                        <div className="item"><DarkModeIcon className="icon"/></div>
                        <div className="item"><FullscreenExitIcon className="icon"/></div>
                        <div className="item"><NotificationsIcon className="icon"/></div>
                        <div className="item"><ChatIcon className="icon"/></div>
                        <div className="item"><FormatListBulletedIcon className="icon"/></div>
                        <div className="item">
                            <img src="https://thenewsfetcher.com/wp-content/uploads/2020/12/Itachi-Uchiha-1-1024x653-1.jpg.webp" 
                                alt=""
                                className="avatar" />
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;