import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

function Footer() {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      id="footer"
      sx={{
        background: "#060608",
        color: "#ffffff",
        padding: "70px 0 120px",
        "& p": {
          opacity: 0.3,
          fontFamily: "PlusJakartaSans-Bold",
          fontSize: "16px",
          paddingY: "0.5em",
        },
        "& .footer-links a": {
          textDecoration: "none",
          fontFamily: "PlusJakartaSans-Medium",
          fontSize: "18px",
          color: "#ffffff",
          textTransform: "none",
          position: "relative",
          marginTop: "0.8em",
          display: "inline-block",
          "&:hover::before": {
            transform: "scaleX(1)",
          },
          "&::before": {
            content: '""',
            position: "absolute",
            display: "block",
            width: "100%",
            height: "1px",
            bottom: 0,
            left: 0,
            backgroundColor: "#fff",
            transform: "scaleX(0)",
            transformOrigin: "top left",
            transition: "transform 0.3s ease",
          },
        },
        "& .footer-line1": {
          paddingRight: "150px",
        },
        "& .footer-line2": {
          paddingRight: "100px",
        },
        [theme.breakpoints.down("md")]: {
          "& .footer-line1": {
            paddingRight: "80px",
          },
          "& .footer-line2": {
            paddingRight: "40px",
          },
        },
        [theme.breakpoints.down("sm")]: {
          padding: "70px 0 80px",
          "& .footer-logo": { paddingLeft: "10px" },
          "& .footer-line1": {
            paddingRight: "30px",
            marginBottom: "30px",
          },
          "& .footer-line2": {
            paddingRight: "20px",
          },
        },
      }}
    >
      <Container fixed>
        <Grid container sx={{ justifyContent: "space-between" }}>
          <Grid item className="footer-logo">
            <Box sx={{ marginRight: "50px", marginBottom: "30px" }}>
              <Link href="#">
                <img style = {{maxWidth:50, margin:5,borderRadius: 10,}} src="/images/logo.png" alt="Moneyboys" />
              </Link>
            </Box>
          </Grid>
          <Grid item className="footer-links">
            <Grid container>
              <Grid item className="footer-line footer-line1">
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
              <Grid item className="footer-line footer-line2">
                <Box>
                  <Typography>LINKS</Typography>
                </Box>
                <Box>
                  <Link href="https://discord.gg/ESeZtt3CAK" target="_blank">Discord</Link>
                </Box>
                <Box>
                  <Link href="https://twitter.com/SolanaMoneyBoys" target="_blank">Twitter</Link>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
