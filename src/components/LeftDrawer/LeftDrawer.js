import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
<<<<<<< HEAD
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
=======
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
>>>>>>> origin/master
import DescriptionIcon from '@material-ui/icons/Description';
import CodeIcon from '@material-ui/icons/Code';
import HomeIcon from '@material-ui/icons/Home';

import './LeftDrawer.css'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  menuButton: {
    color: 'white'
  }
});

export default function LeftDrawer() {
  const classes = useStyles();
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
        <a href='https://drive.google.com/file/d/0B-R24Rv9imxkd3dnc3BYV1ZjeW8/view'>       
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
