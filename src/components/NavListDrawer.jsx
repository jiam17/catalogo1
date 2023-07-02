/* eslint-disable react/prop-types */
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

export default function NavListDrawer({navLinks}) {
  return (
    <Box sx={{ width: 250}}>
      <nav>
        <List>
          {
            navLinks.map(item => (
            <ListItem disablePadding key={item.title}>
                <ListItemButton component={Link} to={item.path}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText>{item.title}</ListItemText>
                </ListItemButton>
            </ListItem>
            ))
          }
        </List>
      </nav>
    </Box>
  );
}
              //icons
              { /* <nav>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <InboxIcon />
                      </ListItemIcon>
                      <ListItemText primary="inbox" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <DraftsIcon />
                      </ListItemIcon>
                      <ListItemText primary="draft" />
                    </ListItem>
                  </List>
                </nav>
                <Divider /> */}