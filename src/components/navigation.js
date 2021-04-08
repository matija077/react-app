import React from 'react';
import {
    Link
  } from "react-router-dom";

//material-ui
import {    
  AppBar,
  Tabs,
  Tab,
          } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
         
const useStyles = makeStyles({
  root: {
    background: '#fff',
    color: 'rgb(218, 2, 67)'
  
  },
  
});

const Navigation = () => {
  const classes = useStyles();
     return (
        <AppBar
        classes={{
          root: classes.root, 
        }}
        >
            <Tabs
            
            >
              <Tab label='Home' component={Link} to='/home'  />
              <Tab label='Articles' component={Link} to='/articles'  />
              <Tab label='Tutorials' component={Link} to='/tutorials' />
              <Tab label='About' component={Link} to='/about' />
            </Tabs>
          
        </AppBar>
     )
}

export default Navigation

//https://material-ui.com/api/tabs/
//https://paulgrajewski.medium.com/react-material-ui-drawer-with-routes-8e27c91b6119
//https://material-ui.com/customization/components/#overriding-styles-with-classes 