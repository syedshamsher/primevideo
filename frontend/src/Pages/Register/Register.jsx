import { Box } from "@material-ui/core";
import React from "react";
import LoginRegister from "../../Layout/LoginRegister/LoginRegister";
import styles from "./Register.module.css";

export const Register = () => {
  return (
    <LoginRegister>
      <div className={styles.form_wrapper}>
        <h2 className={styles.form_heading}>Sign-In</h2>
        <Box>
          <div className={styles.input_wrapper}>
            <label className={styles.label}>Your name</label>
            <input type="text" className={styles.input} placeholder />
          </div>
          <div className={styles.input_wrapper}>
            <label className={styles.label}>Email</label>
            <input type="text" className={styles.input} placeholder />
          </div>
          <div className={styles.input_wrapper}>
            <label className={styles.label}>Password</label>
            <input
              type="password"
              placeholder="At least 6 characters"
              className={styles.input}
            />
            <label className={styles.pass_bottom_label}>
              Passwords must be at least 6 characters.
            </label>
          </div>
          <div className={styles.input_wrapper}>
            <label className={styles.label}>Re-enter password</label>
            <input type="password" className={styles.input} />
          </div>
          <div>
            <button className={styles.btn_primary}>
              Create your Amazon account
            </button>
          </div>
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
            Already have a account?
            <span>
              <a href="/login">Sign-In </a>
            </span>
          </div>
        </Box>
      </div>
    </LoginRegister>
  );
};
