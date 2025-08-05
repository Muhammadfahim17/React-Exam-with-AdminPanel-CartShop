import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router'
import image1 from '../../../shared/images/Group 1116606595 (2).svg'
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LanguageIcon from '@mui/icons-material/Language';
import '../../index.css'
import MobileDrawer from '../../../widgets/MobileDrawer/mobiledrawer';

const Layout = () => {

    const {t, i18n} = useTranslation();
    function TranslateClick(lang) {
        i18n.changeLanguage(lang);
    }
        
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    let [theme,setTheme] = useState(() => {
      let savedTheme = localStorage.getItem('theme')
      return savedTheme ? savedTheme : 'light'
    })

    useEffect(() => {
      document.body.classList.add(theme);
    }, []);

    useEffect(() => {
      document.body.classList.remove('light', 'dark');
      document.body.classList.add(theme);
      localStorage.setItem('theme', theme);
    }, [theme])


    
  let toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };


  return (
    <div>

        <header>


      <div className='hidden sm:block'>
      <div className='bg-[#1C2536] text-white w-[100%] h-[80px] p-[20px] flex items-center justify-between'>
      <img src={image1} alt="" />
      <div className='flex items-center gap-[20px]'>
        <div className='border-[#253044] border text-white w-[800px] py-[8px] rounded-md flex items-center gap-[15px] px-[15px]'>
        <SearchTwoToneIcon/>
        <input className='w-[100%] font-[500] text-[17px] border-none outline-none' type="text" placeholder='Search...' />
        </div>
        <div className='w-[28px] h-[28px]'>
          <NotificationsNoneIcon style={{ fontSize: "30px" }} />
          <span className="bg-[#1E5EFF] text-white font-bold rounded-full w-5 h-5 flex items-center justify-center text-sm absolute top-4 right-88">5</span>
          </div>
        <div className='flex items-center gap-[8px] w-[185px]'>
          <AccountCircleIcon/>
          <span>SuperAdmin</span>
        </div>
        <div>
          <Brightness4Icon className='cursor-pointer' onClick={toggleTheme} />
        </div>
        <div className=' '>
        <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <LanguageIcon/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            'aria-labelledby': 'basic-button',
          },
        }}
      >
        <MenuItem onClick={()=>TranslateClick('en')}>English</MenuItem>
        <MenuItem onClick={()=>TranslateClick('ru')}>Russian</MenuItem>
        <MenuItem onClick={()=>TranslateClick('de')}>Germany</MenuItem>
      </Menu>
        </div>
      </div>
      </div>
      </div>


        <div className='sm:hidden bg-[#1C2536] text-white'>
            <div className='w-[100%]  p-[15px] flex items-center justify-between'>
            <MobileDrawer/>

            <div className='flex  items-center justify-around'>
            <div className='border-[#253044] w-[45%] border text-white  py-[8px] rounded-md flex items-center  px-[15px]'>
        <SearchTwoToneIcon/>
        <input className=' font-[500] text-[17px] border-none outline-none' type="text" placeholder='Search...' />
        </div>
        <div className=' h-[28px]'>
          <NotificationsNoneIcon style={{ fontSize: "25px" }} />
          {/* <span className="bg-[#1E5EFF] text-white font-bold rounded-full w-5 h-5 flex items-center justify-center text-sm absolute top-4 right-88">5</span> */}
          </div>
        <div className='flex  items-center gap-[8px] '>
          <AccountCircleIcon/>
          {/* <span>SuperAdmin</span> */}
        </div>
        <div className=''>
          <Brightness4Icon className='cursor-pointer' onClick={toggleTheme} />
        </div>
            </div>

            </div>
        </div>


        </header>
        <main>
            <Outlet context={{ theme, setTheme }} />
        </main>
        <footer></footer>

    </div>
  )
}

export default Layout