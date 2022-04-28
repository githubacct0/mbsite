import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

function Footer() {
  return (
    <Box
      component="footer"
      id="footer"
      sx={{ background: "#060608", color: "#ffffff" }}
    >
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid item>
          <Box>
            <img src="/images/money.webp" alt="Moneyboys" />
          </Box>
        </Grid>
        <Grid item>
          <Grid container>
            <Grid item>
              <Box>
                <Typography>NAVIGATE</Typography>
              </Box>
              <Box>
                <Link href="#moneyplex">MoneyPlex</Link>
              </Box>
              <Box>
                <Link href="#moneyboy-coin">$MBC</Link>
              </Box>
              <Box>
                <Link href="#collections">NFT Collections</Link>
              </Box>
              <Box>
                <Link href="#store">Store</Link>
              </Box>
              <Box>
                <Link href="#staking">Staking</Link>
              </Box>
            </Grid>
            <Grid item>
              <Box>
                <Typography>LINKS</Typography>
              </Box>
              <Box>
                <Link href="#">Discord</Link>
              </Box>
              <Box>
                <Link href="#">Twitter</Link>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
