import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import LeftDrawer from '../LeftDrawer/LeftDrawer'
import clsx from 'clsx';

import './TopNav.css'

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#0B233F',
    paddingLeft: '0px',
    marginLeft: '0px'
  },
  appBarShift: {
    width: `calc(100% - 180px)`,    
    marginLeft: `180px`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),    
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto'
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function TopNav(props) {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false)

  const handleDrawerOpen = () => {
    setDrawerOpen(!drawerOpen)
  }  

  return (
    <div className={classes.root}>
      <AppBar position="static" className={clsx(classes.appBar, drawerOpen && classes.appBarShift)}>
        <Toolbar>
          <LeftDrawer handleDrawerOpen={handleDrawerOpen}/>            
          <Typography className={classes.title} variant="h6" noWrap>
            Adam Siemer
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
