// import * as React from 'react';
// import MuiAppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import MenuIcon from '@mui/icons-material/Menu';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import { styled } from '@mui/material/styles';
// import AccountCircle from '@mui/icons-material/AccountCircle';

// const Header = ({handleDrawerOpen, open, drawerWidth}) => {

//     const AppBar = styled(MuiAppBar, {
//         shouldForwardProp: (prop) => prop !== 'open',
//     })(({ theme, open, drawerwidth }) => ({
//         transition: theme.transitions.create(['margin', 'width'], {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.leavingScreen,
//         }),
//         ...(open && {
//             width: `calc(100% - ${drawerwidth}px)`,
//             marginLeft: `${drawerwidth}px`,
//             transition: theme.transitions.create(['margin', 'width'], {
//             easing: theme.transitions.easing.easeOut,
//             duration: theme.transitions.duration.enteringScreen,
//             }),
//         }),
//     }));

//     return (
//         <AppBar position="fixed" open={open} drawerwidth={drawerWidth}>
//             <Toolbar>
//             <IconButton
//                 color="inherit"
//                 aria-label="open drawer"
//                 onClick={handleDrawerOpen}
//                 edge="start"
//                 sx={{ mr: 2, ...(open && { display: 'none' }) }}
//             >
//                 <MenuIcon />
//             </IconButton>
//             <Typography variant="h6" noWrap component="div">
//                 MUI Template
//             </Typography>
//             </Toolbar>
//         </AppBar>
//     )
// }

// export default Header;

import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';

export default function ButtonAppBar({handleDrawerOpen, open, drawerWidth}) {
    const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
    })(({ theme, open, drawerwidth }) => ({
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            width: `calc(100% - ${drawerwidth}px)`,
            marginLeft: `${drawerwidth}px`,
            transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
            }),
        }),
    }));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" open={open} drawerwidth={drawerWidth}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MUI Template
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}