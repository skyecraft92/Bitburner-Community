import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const TopAppBar = () => {
  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <Typography variant="title" color="inherit">
          Bitburner Community
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default TopAppBar
