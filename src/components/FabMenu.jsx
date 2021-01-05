import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import SchoolIcon from "@material-ui/icons/School";
import ListIcon from "@material-ui/icons/List";
import ArtTrackIcon from "@material-ui/icons/ArtTrack";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Link from "@material-ui/core/Link";
import ListItemIcon from "@material-ui/core/ListItemIcon";

function FabMenu({ anchorEl, Boolean, handleClose }) {
  return (
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      style={{
        top: "-64px",
      }}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <Link href="#home" className="fabMenuLink">
          Home
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <SchoolIcon />
        </ListItemIcon>
        <Link href="#skills" className="fabMenuLink">
          Skills
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <ListIcon />
        </ListItemIcon>
        <Link href="#vita" className="fabMenuLink">
          Vita
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <ArtTrackIcon />
        </ListItemIcon>
        <Link href="#showcase" className="fabMenuLink">
          Showcase
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <PermContactCalendarIcon />
        </ListItemIcon>
        <Link href="#contact" className="fabMenuLink">
          Contact
        </Link>
      </MenuItem>
    </Menu>
  );
}

export default FabMenu;
