import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import DescriptionIcon from '@material-ui/icons/Description';
import CodeIcon from '@material-ui/icons/Code';
import HomeIcon from '@material-ui/icons/Home';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import './LeftDrawer.css'

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  menuButton: {
    color: 'white'
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },  
}));

export default function LeftDrawer(props) {
  const classes = useStyles();
  const {handleDrawerOpen} = props;
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    handleDrawerOpen()
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className={classes.toolbarIcon}>
        <IconButton>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />      
      <List>   
        <a href='/'>
        <ListItem button key={"home"}>
          <ListItemIcon><HomeIcon/></ListItemIcon>
          <ListItemText primary={"Home"} />
        </ListItem>  
        </a>          
        <a href='/projects'>
        <ListItem button key={"projects"}>
          <ListItemIcon><CodeIcon/></ListItemIcon>
          <ListItemText primary={"Projects"} />
        </ListItem>  
        </a>  
        <a href='https://s3.amazonaws.com/com.abcmer.media/resume/SiemerAdam_Resume.pdf'>       
        <ListItem button key={"resume"}>
          <ListItemIcon><DescriptionIcon/></ListItemIcon>
          <ListItemText primary={"Resume"} />
        </ListItem>   
        </a>  
      </List>
      </div>
  );

  return (
    <div>
      <React.Fragment key='left'> 
          <Button onClick={toggleDrawer('left', true)}>
            <MenuIcon className={classes.menuButton}/>         
          </Button>
          <Drawer anchor='left' open={state['left']} onClose={toggleDrawer('left', false)}>
            {list('left')}
          </Drawer>
        </React.Fragment>
    </div>
  );
}
