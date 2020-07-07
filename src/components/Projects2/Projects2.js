import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: '2rem',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '2px',
      paddingRight: '2px'
    }, 
    [theme.breakpoints.down('lg')]: {
      paddingLeft: '20%',
      paddingRight: '20%'
    },   
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Projects2() {
  const classes = useStyles();
  const projects = [
    {
      name: "Phish Stats",
      description: "Python project for generating Phish Stats",
      github: "https://github.com/abcmer/phish-stats",
      imgSrc: require("../../static/project-thumbnails/phish-stats.png"),
      imgAlt: "phish stats line graph"
    },
    {
      name: "All Work, No Play",
      description: "All work and no play makes Adam a dull boy",
      github: "https://github.com/abcmer/allwork-noplay",
      link: "https://www.allwork-noplay.abcmer.com/?name=Adam&gender=boy",
      imgSrc: require("../../static/project-thumbnails/allwork-noplay.png"),
      imgAlt: "all work, no play app"
    },    
    {
      name: "Snake",
      description: "Simple snake clone",
      github: "https://github.com/abcmer/snake",
      link: "https://snake.abcmer.com/",
      imgSrc: require("../../static/project-thumbnails/snake.png"),
      imgAlt: "snake game"
    },
    {
      name: "Fortunes",
      description: "All the fortune cookies you desire, without getting full",
      github: "https://github.com/abcmer/fortunes",
      link: "https://www.fortunes.abcmer.com/",
      imgSrc: require("../../static/project-thumbnails/fortunes.png"),
      imgAlt: "fortunes app"
    },    
  ];  

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {projects.map(p => {
          return(
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                {p.name}
              </Paper>
            </Grid>
          )
        })}
      </Grid>
    </div>
  );
}
