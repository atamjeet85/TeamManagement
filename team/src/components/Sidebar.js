import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  IconButton,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside
      style={{
        width: isOpen ? "250px" : "60px",
        transition: "width 0.3s ease",
        height: "100vh",
        backgroundColor: "#f4f4f4",
        boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
        position: "fixed",
        zIndex: 1000,
      }}
    >
      <IconButton
        onClick={toggleSidebar}
        style={{
          position: "absolute",
          top: "10px",
          right: isOpen ? "-20px" : "-15px",
          backgroundColor: "#1976d2",
          color: "#fff",
          zIndex: 1001,
        }}
      >
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
      <div
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {isOpen && (
          <Typography variant="h6" style={{ fontWeight: "bold" }}>
            Team Management
          </Typography>
        )}
        <Divider />
        <List>
          <ListItem button component={Link} to="/dashboard">
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            {isOpen && <ListItemText primary="Dashboard" />}
          </ListItem>
          <ListItem button component={Link} to="/teams">
            <ListItemIcon>
              <GroupIcon />
            </ListItemIcon>
            {isOpen && <ListItemText primary="Teams" />}
          </ListItem>
        </List>
      </div>
    </aside>
  );
};

export default Sidebar;

// import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import GroupIcon from '@mui/icons-material/Group';
// import { Link } from 'react-router-dom';
// import { Typography } from '@mui/material';

// const Sidebar = () => {
//   return (
//     <div className="w-64 h-screen bg-gray-100 p-4">

//       <Typography variant="h6" className="mb-6">
//         Team Management
//       </Typography>
//       <Divider className="mb-4" />
//       <List>
//         <ListItem button component={Link} to="/dashboard">
//           <ListItemIcon>
//             <DashboardIcon />
//           </ListItemIcon>
//           <ListItemText primary="Dashboard" />
//         </ListItem>
//         <ListItem button component={Link} to="/teams">
//           <ListItemIcon>
//             <GroupIcon />
//           </ListItemIcon>
//           <ListItemText primary="Teams" />
//         </ListItem>
//       </List>
//     </div>
//   );
// };

// export default Sidebar;

// import { List, ListItem, ListItemText } from '@mui/material';
// import { Link } from 'react-router-dom';

// const Sidebar = () => (
//   <div className="w-64 bg-gray-100 h-screen p-4">
//     <List>
//       <ListItem button component={Link} to="/dashboard">
//         <ListItemText primary="Dashboard" />
//       </ListItem>
//       <ListItem button component={Link} to="/teams">
//         <ListItemText primary="Teams" />
//       </ListItem>
//     </List>
//   </div>
// );

// export default Sidebar;
