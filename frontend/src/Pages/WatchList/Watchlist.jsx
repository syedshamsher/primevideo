import React from "react";
import { Container, Box } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import styles from "./Watchlist.module.css";

export function Watchlist() {
  return (
    <Box>
      <Container className={styles.watchlist_container}>
        <div className={styles.watchlist_link_container}>
          <NavLink className={styles.watchlist_link} to="/watchlist">
            Watchlist
          </NavLink>
        </div>
        <div className={styles.img_container}>
          <img
            src="https://m.media-amazon.com/images/G/01/digital/video/empty_list_watchlist_new.png"
            alt="add watchlist"
          />
          <h3 className={styles.container_subheading}>
            Your Watchlist Currently Empty
          </h3>
          <div className={styles.container_footer}>
            Add &nbsp;
            <a className={styles.remove_link_space} href="/">
              TV shows
            </a>
            &nbsp; and &nbsp;{" "}
            <a className={styles.remove_link_space} href="/">
              Movies
            </a>
            &nbsp;
            <span>
              that you want to watch later by clicking Add to Watchlist.
            </span>
          </div>
        </div>
      </Container>
    </Box>
  );
}
