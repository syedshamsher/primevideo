import { Box, Typography } from "@material-ui/core";
import React from "react";
import LoginRegister from "../../Layout/LoginRegister/LoginRegister";
import styles from "./Login.module.css";

export const Login = () => {
  return (
    <LoginRegister>
      <div className={styles.form_wrapper}>
        <h2 className={styles.form_heading}>Sign-In</h2>
        <Box>
          <Typography className={styles.input_wrapper}>
            <label className={styles.label}>Email or mobile phone number</label>
            <input type="text" className={styles.input} placeholder />
          </Typography>
          <Typography>
            <div className={styles.pass_label}>
              <label className={styles.label}>Password</label>
              <a href="#">Forgot Password?</a>
            </div>
            <input type="text" className={styles.input} placeholder />
          </Typography>
          <Typography>
            <button className={styles.btn_primary}>Sign-In</button>
          </Typography>
          <div className={styles.form_term_policy}>
            By continuing, you agree to Amazon's{` `}
            <span>
              <a href="#">Conditions of Use</a>
            </span>
            {` `}and{` `}
            <span>
              <a href="#">Privacy Notice</a>
            </span>
            .
          </div>
          <div className={styles.form_footer}>
            <div className={styles.footer_heading}>New to Amazon?</div>
            <button
              className={styles.btn_secondary}
              onClick={() => window.location.assign("/register")}>
              Create your Amazon Account
            </button>
          </div>
        </Box>
      </div>
    </LoginRegister>
  );
};
