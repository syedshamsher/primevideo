import React from "react";
import { AppBar, Avatar, ClickAwayListener, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import LanguageIcon from '@material-ui/icons/Language';
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

const useStyles = makeStyles((theme) => ({
  appBar: {
      maxHeight: '72px',
      backgroundColor: '#1A242F',
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      position: 'fixed',
      top: 0,
      bottom: '20%'
  },
  toolbar: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
  },
  homeIcon: {
    color: "white",
  },
  avatar: {
    margin: "10px",
  },
  subnav_links: {
    color: "white",
    margin: "15px",
  },
}));

export function LandingNav() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <div className={styles.navlink_wrapper_left}>
            <NavLink to="/">
              <img
                className={styles.logo}
                src="https://amazonuk.gcs-web.com/system/files-encrypted/nasdaq_kms/inline-images/Prime_Video_Logo.png"
                alt="prime_logo"
              />
            </NavLink>
          </div>
          <div className={styles.navlink_wrapper_right}>
            <ClickAwayListener onClickAway={handleClickAway}>
              <div className={classes.root}>
                <div className={styles.dropdown_wrapper} onClick={handleClick}>
                  <LanguageIcon className={classes.avatar} />
                  <div>EN</div>
                  {open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                </div>
                {open ? (
                  <div className={styles.dropdown}>
                    <div className={styles.subnav_left_wrapper}>
                      <div className={classes.subnav_links}>
                        English
                      </div>
                      <div className={classes.subnav_links}>
                        Français
                      </div>
                      <div className={classes.subnav_links}>
                        Italiano
                      </div>
                      <div className={classes.subnav_links}>
                        తెలుగు
                      </div>
                      <div className={classes.subnav_links}>
                        日本語
                      </div>
                    </div>
                    <div className={styles.subnav_right_wrapper}>
                      <div className={classes.subnav_links}>
                        العربية   
                      </div>
                      <div className={classes.subnav_links}>
                        Deutsch
                      </div>
                      <div className={classes.subnav_links}>
                        Netherlands
                      </div>
                      <div className={classes.subnav_links}>
                        Wiking Filipino
                      </div>
                      <div className={classes.subnav_links}>
                        Espanol
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            </ClickAwayListener>
            <NavLink
                className={classes.subnav_links}
                to="/login"
                exact>
                Sign In
            </NavLink>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar>
        
      </Toolbar>
    </div>
  );
}
