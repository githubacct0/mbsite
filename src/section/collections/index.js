import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Title, Subtitle, HeadChip } from "components";

function Collections() {
  return (
    <Box
      component="section"
      id="collections"
      sx={{
        height: "100vh",
        background: "#060608",
        color: "#ffffff",
        padding: "220px 0 215px",
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <HeadChip
          label="NFT COLLECTIONS"
          variant="outlined"
          sx={{ borderColor: "#44d3ff", color: "#44d3ff" }}
        />
        <Title
          sx={{
            marginTop: "32px",
            backgroundImage: "linear-gradient(104deg, #00d0ff 2%, #c933ff 99%)",
            fontStretch: "normal",
            fontStyle: "normal",
            lineHeight: 1.13,
            letterSpacing: "0.39px",
            webkitBackgroundClip: "text",
            backgroundClip: "text",
            webkitTextFillColor: "transparent",
            textFillColor: "transparent",
          }}
        >
          Three Collections,
          <br />
          One Family
        </Title>
        <IconButton sx={{ marginTop: "60px" }}>
          <img src="/images/arrow-down.svg" alt="Scroll down" />
        </IconButton>
      </Box>
      <Box
        sx={{
          marginTop: "100px",
          backgroundImage: "url('/images/moneyboys.webp')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto 100%",
        }}
      ></Box>
    </Box>
  );
}

export default Collections;
