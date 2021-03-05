import React, { useState, useEffect } from "react";
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
// Components
import GridItem from '../components/GridItem';
import GridFeature from '../components/GridFeature';
import Filter from '../components/Filter';
// Utils
import ProjectsAPI from '../utils/API/projectsAPI';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  center: {
    textAlign: 'center'
  },
  spacing: {
    paddingTop: '100px',
    paddingBottom: '100px'
  },
  paddingBottom60: { 
    paddingBottom: '60px' 
  },
  paddingTop30: { 
    paddingTop: '30px' 
  },
  white: {
    color: 'white'
  }
}));

const Projects = () => {
  const classes = useStyles();

  const [filterState, setFilterState] = useState({ type: "all" })

  return (
    <div id="projectsContainer" className={`${classes.root} ${classes.spacing}`}>

      <Typography className={`${classes.center} ${classes.paddingBottom60} ${classes.white}`} variant="h4">
        PROJECTS
      </Typography>
      <Container maxWidth="md">
        <Filter filterState={filterState} setFilterState={setFilterState} />
        <Grid className={classes.paddingTop30} container spacing={0}>
         <Grid item xs={12} sm={12}>
         <GridFeature />
          </Grid>
          {
            ProjectsAPI.map((result, index) => {
              if (result.category.indexOf(filterState.type) != -1 || filterState.type === "all")
                return (
                  <Grid item xs={12} sm={6} md={4}>
                    <GridItem item={result} />
                  </Grid>
                )
            })
          }
        </Grid>
      </Container>
    </ div>
  );
};

export default Projects;