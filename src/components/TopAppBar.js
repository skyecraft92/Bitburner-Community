import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/icons/Menu'

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const TopAppBar = () => {
  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <IconButton style={styles.menuButton} color="inherit" aria-label="Menu">
          <Menu />
        </IconButton>
        <Typography variant="title" color="inherit">
          Bitburner Community
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default TopAppBar
