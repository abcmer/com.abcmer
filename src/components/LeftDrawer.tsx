'use client';

import React from 'react';
import Link from 'next/link';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import DescriptionIcon from '@mui/icons-material/Description';
import CodeIcon from '@mui/icons-material/Code';
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

interface LeftDrawerProps {
  handleDrawerOpen: () => void;
}

export default function LeftDrawer({ handleDrawerOpen }: LeftDrawerProps) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (isOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    handleDrawerOpen();
    setOpen(isOpen);
  };

  const drawerContent = (
    <div
      style={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: '0 8px', minHeight: 64 }}>
        <IconButton>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        <Link href="/">
          <ListItem key="home">
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
        <Link href="/projects">
          <ListItem key="projects">
            <ListItemIcon><CodeIcon /></ListItemIcon>
            <ListItemText primary="Projects" />
          </ListItem>
        </Link>
        <a href="https://s3.amazonaws.com/com.abcmer.media/resume/SiemerAdam_Resume.pdf">
          <ListItem key="resume">
            <ListItemIcon><DescriptionIcon /></ListItemIcon>
            <ListItemText primary="Resume" />
          </ListItem>
        </a>
      </List>
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon style={{ color: 'white' }} />
      </Button>
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        {drawerContent}
      </Drawer>
    </div>
  );
}
