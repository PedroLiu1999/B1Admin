import React from "react";
import { Box } from "@mui/material";
import { Locale } from "@churchapps/apphelper";

export const Footer: React.FC = () => (
  <div id="footer">
    <Box sx={{ textAlign: "center" }}>
      <img src="/images/logo.png" alt="logo" />
      {process.env.REACT_APP_STAGE !== "selfhost" && (
        <p>{Locale.label("components.footer.phone")}: 918-994-2638 &nbsp; | &nbsp; support@b1.church</p>
      )}
      <p>2020 © Live Church Solutions. {Locale.label("components.footer.rights")}</p>
    </Box>
  </div>
);
