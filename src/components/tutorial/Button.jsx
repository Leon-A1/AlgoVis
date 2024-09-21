import { Button as MuiButton } from "@mui/material";

const Button = ({ label, handleClick, icon, style }) => (
  <MuiButton
    endIcon={icon}
    sx={{
      mr: 1.5,
      px: 1.5,
      fontSize: 11,
      bgcolor: "#000",
      alignItems: "flex-start",
      ...style,
      "&:hover": { bgcolor: "#010101", filter: "brightness(120%)" },
    }}
    variant="contained"
    onClick={handleClick}
    children={label}
  />
);

export default Button;
