import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import Collapse from '@mui/material/Collapse';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

import Typography from '@mui/material/Typography';

function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = React.useState({
      width: undefined,
      height: undefined,
    });
    React.useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      // Add event listener
      window.addEventListener("resize", handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}

const SideMenu = ({drawerWidth, DrawerHeader, theme, open, handleDrawerClose, handleDrawerOpen}) => {
    const [inbox, setInbox] = React.useState(false);
    const size = useWindowSize();

    const handleClick = () => {
        setInbox(!inbox);
    };

    React.useLayoutEffect(() => {
        if(size.width <= 750) {
            handleDrawerClose()
        }

        if(size.width > 750) {
            handleDrawerOpen()
        }
    }, [size])

    const drawer = (
        <>
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
                {['Dashboard', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon className='custom-icon'>
                                {index % 2 === 0 ? <InboxIcon fontSize="small" color="primary"/> : <MailIcon fontSize="small"/>}
                            </ListItemIcon>
                            <Typography gutterBottom variant="subtitle2" component="div" className='center-text'>
                                {text}
                            </Typography>
                        </ListItemButton>
                        
                    </ListItem>
                ))}
                <ListItemButton onClick={handleClick}>
                    <ListItemIcon className='custom-icon'>
                        <InboxIcon fontSize="small" color="primary"/>
                    </ListItemIcon>
                    <Typography gutterBottom variant="subtitle2" component="div" className='center-text'>
                        Inbox
                    </Typography>
                    {inbox ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={inbox} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon className='custom-icon'>
                            <StarBorder fontSize="small" color="primary"/>
                        </ListItemIcon>
                        <Typography gutterBottom variant="subtitle2" component="div" className='center-text'>
                            Starred
                        </Typography>
                    </ListItemButton>
                    </List>
                </Collapse>
            </List>
            <Divider />
            <List>
                <ListItemButton>
                    <ListItemIcon>
                        <SendIcon />
                    </ListItemIcon>
                    <ListItemText primary="Sent mail" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Drafts" />
                </ListItemButton>
                <ListItemButton onClick={handleClick}>
                    <ListItemIcon className='custom-icon'>
                        <InboxIcon fontSize="small" color="primary"/>
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                    {inbox ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={inbox} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Starred" />
                    </ListItemButton>
                    </List>
                </Collapse>
            </List>
        </>
    )

    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="persistent"
            anchor="left"
            open={open}
        >
            {drawer}
        </Drawer>
    )
}

export default SideMenu;