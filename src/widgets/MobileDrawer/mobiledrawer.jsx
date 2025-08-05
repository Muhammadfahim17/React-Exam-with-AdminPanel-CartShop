// components/MobileDrawer.jsx
import React, { useState } from 'react';
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InventoryIcon from '@mui/icons-material/Inventory';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import TranslateIcon from '@mui/icons-material/Translate';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';

const MobileDrawer = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

      const {t, i18n} = useTranslation();
      function TranslateClick(lang) {
          i18n.changeLanguage(lang);
      }

  const drawerList = (
    <Box
      sx={{
        width: 250,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      {/* Main Navigation */}
      <Box>
        <List>
          <ListItem disablePadding>
            <Link to={'/dashboard'}>
            <ListItemButton>
              <ListItemIcon><DashboardIcon /></ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
            </Link>
          </ListItem>

          <ListItem disablePadding>
            <Link to={'/orders'}>
            <ListItemButton>
              <ListItemIcon><ShoppingCartIcon /></ListItemIcon>
              <ListItemText primary="Orders" />
            </ListItemButton>
            </Link>
          </ListItem>

          <ListItem disablePadding>
            <Link to={'/products'}>
            <ListItemButton>
              <ListItemIcon><InventoryIcon /></ListItemIcon>
              <ListItemText primary="Products" />
            </ListItemButton>
            </Link>
          </ListItem>

          <ListItem disablePadding>
            <Link to={'/other'}>
            <ListItemButton>
              <ListItemIcon><MoreHorizIcon /></ListItemIcon>
              <ListItemText primary="Other" />
            </ListItemButton>
            </Link>
          </ListItem>
        </List>
      </Box>

      <Divider />

      {/* Language Switch */}
      <Box>
        <Typography sx={{ pl: 2, pt: 2, fontWeight: 'bold' }}>Languages</Typography>
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={()=>TranslateClick('en')}>
              <ListItemIcon ><TranslateIcon /></ListItemIcon>
              <ListItemText primary="English" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={()=>TranslateClick('ru')}>
              <ListItemIcon><TranslateIcon /></ListItemIcon>
              <ListItemText primary="Russian" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={()=>TranslateClick('de')}>
              <ListItemIcon ><TranslateIcon /></ListItemIcon>
              <ListItemText  primary="German" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );

  return (
    <>
      {/* Menu button (only on small screens) */}
      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
      </Box>

      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        {drawerList}
      </Drawer>
    </>
  );
};

export default React.memo(MobileDrawer);
