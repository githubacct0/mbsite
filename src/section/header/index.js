import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

function Header() {
  return (
    <Box
      component="header"
      id="header"
      sx={{ position: "fixed", top: 0, right: 0, left: 0, color: "white" }}
    >
      <Grid
        container
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          padding: "28px",
        }}
      >
        <Grid item>
          <img src="/images/logo.webp" alt="Moneyboys" />
        </Grid>
        <Grid item sx={{ width: "28px" }}>
          <Box
            sx={{ backgroundColor: "#ffffff", height: "2px", marginY: "5px" }}
          />
          <Box
            sx={{ backgroundColor: "#ffffff", height: "2px", marginY: "5px" }}
          />
        </Grid>
      </Grid>
      <Box component="nav">
        <Box component="ul">
          <Box component="li">
            <Link href="#moneyplex">moneyplex</Link>
          </Box>
          <Box component="li">
            <Link href="#moneyboy-coin">MoneyBoy Coin</Link>
          </Box>
          <Box component="li">
            <Link href="#collections">NFT Collections</Link>
          </Box>
          <Box component="li">
            <Link href="#store">Store</Link>
          </Box>
          <Box component="li">
            <Link href="#staking">Staking</Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
