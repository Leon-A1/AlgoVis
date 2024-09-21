import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

const getPalette = (mode) => ({
  ...(mode === "light"
    ? {
        primary: {
          main: "#1F3B2C",
          light: "#2A4E3A",
          lighter: "#356147",
          dark: "#0D1A13",
        },
        secondary: {
          main: "#4CAF50",
          light: "#6FBF73",
          lighter: "#A5D6A7",
          dark: "#2E7D32",
          dark2: "#1B5E20",
          darker: "#0A3D0A",
        },
        text: {
          primary: "#4CAF50",
          secondary: "#81C784",
        },
        divider: "#A5D6A7",
        background: {
          default: "#E8F5E9",
          paper: "#1F3B2C",
        },
        custom: {
          nodeColor: "#FFFFFF",
        },
      }
    : {
        primary: {
          main: "#1F3B2C",
          light: "#2A4E3A",
          lighter: "#356147",
          dark: "#0D1A13",
        },
        secondary: {
          main: "#4CAF50",
          light: "#6FBF73",
          lighter: "#A5D6A7",
          dark: "#2E7D32",
          dark2: "#1B5E20",
          darker: "#0A3D0A",
        },
        text: {
          primary: "#4CAF50",
          secondary: "#81C784",
        },
        divider: "#A5D6A7",
        background: {
          default: "#E8F5E9",
          paper: "#1F3B2C",
        },
      }),
});

export default function getTheme(mode) {
  const isLightMode = mode === "light";

  return createTheme({
    palette: getPalette(mode),
    shadows: [
      "none",
      `0px 0px 10px -3px  ${mode === "light" ? "#A5D6A7" : "transparent"}`,
    ],
    typography: {
      fontFamily: "Sora",
      fontWeightLight: 200,
      fontWeightMedium: 300,
      fontWeightRegular: 400,
      fontWeightBold: 500,
    },
    custom: {
      main: {
        background: isLightMode ? "#F1F8E9" : "#0A1F13",
      },
      node: {
        color: isLightMode ? "#FFFFFF" : "#81C784",
        mazeWallColor: "#2E7D32",
      },
      topBar: {
        background: isLightMode ? "#FFFFFF" : "#2A4E3A",
        textColor: !isLightMode ? "#81C784" : "#0A3D0A",
      },
    },
  });
}
