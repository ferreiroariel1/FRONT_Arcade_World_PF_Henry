import React, { useState, useEffect } from "react";
import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";
import { Stack } from "@mui/material";

const FloatingBtn = () => {
  useEffect(() => {
    const handleScroll = () => {
      window.scrollY
    };
    window.addEventListener("scroll", handleScroll);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Stack display="flex" alignItems="end">
      <Fab
        onClick={scrollToTop}
        color="primary"
        sx={{ marginRight: "35px", marginBottom: "35px", position: "absolute"}}
      >
        <NavigationIcon />
      </Fab>
    </Stack>
  );
};

export default FloatingBtn;
