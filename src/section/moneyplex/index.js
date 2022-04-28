import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { styled, useTheme } from "@mui/material/styles";
import { Subtitle, HeadChip, ArrowLinkButton } from "components";

function MoneyPlex() {
  const theme = useTheme();

  const CustomChip = styled(Chip)({
    backgroundColor: "#5ef4ff",
    color: "#095670",
    fontFamily: "PlusJakartaSans-Medium",
    fontSize: "14px",
    height: "35px",
    margin: "0 10px 10px 0",
    "& .MuiChip-label": {
      padding: "0 15px 0 17px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
      height: "32px",
      margin: "0 6px 10px 0",
      "& .MuiChip-label": {
        padding: "0 10px 0 10px",
      },
    },
  });

  return (
    <Box
      component="section"
      id="moneyplex"
      sx={{
        background: "#5249de",
        backgroundImage: "url('/images/moneyplex-2.webp')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right bottom",
        backgroundSize: "60% auto",
        padding: "160px 0",
        [theme.breakpoints.up("xl")]: { backgroundSize: "65% auto", backgroundPosition: "108% 100%" },
        [theme.breakpoints.up("lg")]: { backgroundSize: "75% auto", backgroundPosition: "115% 100%" },
        [theme.breakpoints.down("md")]: { padding: "120px 0 150px" },
        [theme.breakpoints.down("sm")]: { backgroundSize: "110% auto", backgroundPosition: "-160% 100%", padding: "50px 0 250px" },
      }}
    >
      <Container fixed>
        <HeadChip
          label="PRODUCT"
          variant="outlined"
          sx={{ color: "#ffffff" }}
        />
        <Subtitle
          sx={{
            color: "#ffffff",
          }}
        >
          moneyplex
        </Subtitle>
        <Typography
          sx={{
            fontFamily: "PlusJakartaSans-Regular",
            fontSize: "20px",
            color: "rgba(255, 255, 255, 0.8)",
          }}
        >
          Easily track and manage all your assets on the{" "}
          <Box
            component="span"
            sx={{ [theme.breakpoints.up("sm")]: { display: "block" } }}
          ></Box>
          Solana Blockchain.
        </Typography>
        <Box sx={{ marginTop: "35px" }}>
          <CustomChip label="Multi-Asset Price History" />
          <CustomChip label="Customized Dashboard" />
          <br />
          <CustomChip label="Buy and Sell NFTs" />
          <CustomChip label="Accept Crypto Payments" />
          <br />
          <CustomChip label="DAO Metrics" />
          <CustomChip label="Price Notifications" />
        </Box>
        <ArrowLinkButton
          href="#"
          endIcon={<ArrowForwardIcon />}
          mainColor="#ffffff"
          sx={{ marginTop: "28px" }}
        >
          Go to moneyplex
        </ArrowLinkButton>
      </Container>
    </Box>
  );
}

export default MoneyPlex;
