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
        </MenuItem>{" "}
      </Link>
      <Link href="#showcase" className="fabMenuLink">
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <ArtTrackIcon />
          </ListItemIcon>
          Showcase
        </MenuItem>{" "}
      </Link>
      <Link href="#contact" className="fabMenuLink">
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PermContactCalendarIcon />
          </ListItemIcon>
          Contact
        </MenuItem>{" "}
      </Link>
    </Menu>
  );
}

export default FabMenu;
