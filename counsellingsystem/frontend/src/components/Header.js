import React, { useState } from 'react'
import {AppBar, Tabs, Tab, Toolbar, Typography} from '@mui/material'
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import {NavLink} from 'react-router-dom'
const Header = () => {
  const [value, setValue] = useState()
  return (
    <div>
        <AppBar sx={{backgroundColor: '#873600'}} position='sticky'>
            <Toolbar>
           <AssuredWorkloadIcon/>
            <Typography>Counselling and Visitor Management System</Typography>
            <Tabs textColor='inherit' indicatorColor='primary' sx={{ml:"auto"}} value={value} onChange={(e,val)=>setValue(val)}>
              <Tab LinkComponent={NavLink} to='/signup' label='Sign Up'/>
              <Tab LinkComponent={NavLink} to='/signin' label='Sign In'/>
              <Tab LinkComponent={NavLink} to='/counsellor' label='Counsellor'/>
              <Tab LinkComponent={NavLink} to='/visitor' label='Visitor'/>
              <Tab LinkComponent={NavLink} to='/appointment' label='Appointment'/>
              <Tab LinkComponent={NavLink} to='/contactus' label='Contact Us'/>
            </Tabs>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Header