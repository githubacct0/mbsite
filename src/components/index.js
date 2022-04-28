import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";

export const Title = styled(Typography)(({ theme }) => ({
  fontFamily: "PlusJakartaSans-Bold",
  fontSize: "80px",
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
  fontFamily: "PlusJakartaSans-Bold",
  fontSize: "55px",
  [theme.breakpoints.down("lg")]: { fontSize: "50px" },
  [theme.breakpoints.down("sm")]: { fontSize: "40px" },
}));

export const HeadChip = styled(Chip)({
  fontFamily: "PlusJakartaSans-Bold",
  fontSize: "12px",
  borderRadius: "6px",
  padding: "3px 8px",
  height: "fit-content",
  "& .MuiChip-label": {
    padding: 0,
    lineHeight: "15px",
  },
});

export const ArrowLinkButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "mainColor",
})(({ mainColor }) => ({
  fontFamily: "PlusJakartaSans-SemiBold",
  fontSize: "16px",
  color: mainColor,
  padding: 0,
  textTransform: "none",
  position: "relative",
  "&:hover::before": {
    transform: "scaleX(1)",
  },
  "&::before": {
    content: '""',
    position: "absolute",
    display: "block",
    width: "100%",
    height: "2px",
    bottom: 0,
    left: 0,
    backgroundColor: mainColor,
    transform: "scaleX(0)",
    transformOrigin: "top left",
    transition: "transform 0.3s ease",
  },
  "& .MuiTouchRipple-root": {
    display: "none",
  },
}));
