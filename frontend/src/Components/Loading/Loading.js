import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Loading() {
  return (
    <div
      style={{
        display: "flex",
        margin: "0 auto",
        width: "200px",
        height: "80vh",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <CircularProgress
        disableShrink
        style={{
          position: "absolute",
          left: "50%",
          margin: "auto",
          color: "white",
        }}
      />
    </div>
  );
}
