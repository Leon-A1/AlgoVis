import React from "react";
import { batch, useDispatch, useSelector } from "react-redux";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import HamburgerIcon from "@mui/icons-material/Menu";
import { uiChanged } from "../../store/ui";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isMobile, sideMenu } = useSelector(({ ui }) => ui);

  function handleClick() {
    batch(() => {
      dispatch(
        uiChanged({
          prop: "sideMenu",
          att: "open",
          val: !sideMenu.open,
        })
      );
      dispatch(
        uiChanged({
          prop: "sideMenu",
          att: "width",
          val: !sideMenu.open ? 250 : 60,
        })
      );
    });
  }
  return (
    <Box display="flex" justifyContent="center">
      <div
        onClick={() => navigate("/")}
        style={{
          mr: sideMenu.open && 0.5,
          width: sideMenu.open ? "100%" : 0,
          opacity: sideMenu.open ? 1 : 0,
          visibility: sideMenu.open ? "initial" : "hidden",
          transition: "all 0.3s",
          paddingBottom: sideMenu.open ? 6 : 0,
        }}>
        <Typography
          variant="h5"
          color="white"
          sx={{ zIndex: -10, fontSize: 34, cursor: "pointer" }}>
            <ins style={{ fontWeight: 200, fontSize: 22 }}>AlgoViz</ins>
        </Typography>
      </div>
     {isMobile && <Tooltip title="Click to close / open the menu.">
        <IconButton onClick={handleClick} sx={{ p: 0, ml: sideMenu.open ? 2 : 0 }}>
          <HamburgerIcon sx={{ color: "white", fontSize: !isMobile ? 50 : 40 }} />
        </IconButton>
      </Tooltip>}
    </Box>
  );
};

export default Logo;
