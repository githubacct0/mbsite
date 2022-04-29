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
        padding: "160px 0",
        position: "relative",
        overflowX: "hidden",
        [theme.breakpoints.down("md")]: { padding: "120px 0 150px" },
        [theme.breakpoints.down("sm")]: {
          padding: "80px 0 200px",
        },
      }}
    >
      <Container fixed className="animate__animated animate__fadeInUp">
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
      <Box
        className="animate__animated animate__fadeInUp"
        sx={{
          position: "absolute",
          bottom: 0,
          right: 0,
          "& img": { width: "100%" },
          [theme.breakpoints.up("sm")]: {
            width: "65%",
          },
          [theme.breakpoints.up("md")]: {
            width: "65%",
          },
          [theme.breakpoints.up("lg")]: {
            width: "70%",
          },
          [theme.breakpoints.up("xl")]: {
            width: "65%",
          },
          [theme.breakpoints.down("md")]: {
            transform: "translateX(100px)",
          },
        }}
      >
        <img src="/images/moneyplex-2.webp" alt="MoneyPlex" />
      </Box>
    </Box>
  );
}

export default MoneyPlex;
