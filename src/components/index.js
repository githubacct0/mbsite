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
  [theme.breakpoints.down("sm")]: { fontSize: "40px" }
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

export const ArrowLinkButton = styled(Button)({
  fontFamily: "PlusJakartaSans-SemiBold",
  fontSize: "16px",
  padding: 0,
  textTransform: "none",
  transition: "300ms",
  "&:hover": { opacity: 0.8 },
  "& .MuiTouchRipple-root": {
    display: "none",
  },
});
