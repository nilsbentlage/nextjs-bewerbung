import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SchoolIcon from "@mui/icons-material/School";
import ListIcon from "@mui/icons-material/List";
import ArtTrackIcon from "@mui/icons-material/ArtTrack";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "@mui/material/Link";
import ListItemIcon from "@mui/material/ListItemIcon";

function FabMenu({ anchorEl, Boolean, handleClose }) {
  return (
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      style={{
        top: "-96px",
      }}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      <Link href="#home" className="fabMenuLink">
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          Home
        </MenuItem>
      </Link>
      <Link href="#skills" className="fabMenuLink">
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <SchoolIcon />
          </ListItemIcon>
          Skills
        </MenuItem>
      </Link>
      <Link href="#vita" className="fabMenuLink">
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          Vita
        </MenuItem>
      </Link>
      <Link href="#showcase" className="fabMenuLink">
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <ArtTrackIcon />
          </ListItemIcon>
          Showcase
        </MenuItem>
      </Link>
      <Link href="#contact" className="fabMenuLink">
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PermContactCalendarIcon />
          </ListItemIcon>
          Contact
        </MenuItem>
      </Link>
    </Menu>
  );
}

export default FabMenu;
