'use client';

import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LeftDrawer from './LeftDrawer';

export default function TopNav() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen((prev) => !prev);
  };

  const appBarStyle = {
    backgroundColor: '#0B233F',
    paddingLeft: '0px',
    marginLeft: '0px',
    ...(drawerOpen && {
      width: 'calc(100% - 180px)',
      marginLeft: '180px',
      transition: 'width 225ms cubic-bezier(0.4, 0, 0.6, 1), margin 225ms cubic-bezier(0.4, 0, 0.6, 1)',
    }),
  };

  return (
    <AppBar position="fixed" sx={appBarStyle}>
      <Toolbar>
        <LeftDrawer handleDrawerOpen={handleDrawerOpen} />
        <Typography variant="h6" noWrap sx={{ flexGrow: 1, display: 'block' }}>
          Adam Siemer
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
