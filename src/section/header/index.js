import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

function Header() {
  return (
    <Box
      component="header"
      id="header"
      sx={{
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        color: "white",
        zIndex: 900,
        display: "none",
      }}
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
        <Grid
          item
          sx={{ width: "28px", padding: "10px 0 20px", cursor: "pointer" }}
        >
          <Box
            sx={{
              backgroundColor: "#ffffff",
              height: "2px",
              marginBottom: "8px",
            }}
          />
          <Box sx={{ backgroundColor: "#ffffff", height: "2px" }} />
        </Grid>
      </Grid>
      <Box
        component="nav"
        sx={{ maxHeight: "calc(100vh - 100px)", overflowY: "auto" }}
      >
        <Box
          component="ul"
          sx={{
            fontFamily: "PlusJakartaSans-Bold",
            fontSize: "60px",
            padding: 0,
            margin: 0,
            "& li": { listStyleType: "none" },
            "& a": {
              textDecoration: "none",
              lineHeight: "277px",
              display: "block",
              paddingX: "110px",
              backgroundColor: "#000000",
              color: "#ffffff",
              transition: "300ms ease-out",
            },
          }}
        >
          <Box component="li">
            <Link
              href="#moneyplex"
              sx={{
                backgroundRepeat: "no-repeat",
                backgroundPosition: "calc(100% - 9px) bottom",
                backgroundImage: "none",
                "&:hover": {
                  color: "#ffffff",
                  backgroundColor: "#5249de",
                  backgroundImage: "url(/images/header/moneyplex.webp)",
                },
              }}
            >
              moneyplex
            </Link>
          </Box>
          <Box component="li">
            <Link
              href="#moneyboy-coin"
              sx={{
                backgroundRepeat: "no-repeat",
                backgroundPosition: "calc(100% - 9px) bottom",
                backgroundImage: "none",
                "&:hover": {
                  color: "#ffffff",
                  backgroundColor: "#5249de",
                  backgroundImage: "url(/images/header/moneyplex.webp)",
                },
              }}
            >
              MoneyBoy Coin
            </Link>
          </Box>
          <Box component="li">
            <Link
              href="#collections"
              sx={{
                backgroundRepeat: "no-repeat",
                backgroundPosition: "calc(100% - 9px) bottom",
                backgroundImage: "none",
                "&:hover": {
                  color: "#ffffff",
                  backgroundColor: "#5249de",
                  backgroundImage: "url(/images/header/moneyplex.webp)",
                },
              }}
            >
              NFT Collections
            </Link>
          </Box>
          <Box component="li">
            <Link
              href="#store"
              sx={{
                backgroundRepeat: "no-repeat",
                backgroundPosition: "calc(100% - 9px) bottom",
                backgroundImage: "none",
                "&:hover": {
                  color: "#ffffff",
                  backgroundColor: "#5249de",
                  backgroundImage: "url(/images/header/moneyplex.webp)",
                },
              }}
            >
              Store
            </Link>
          </Box>
          <Box component="li">
            <Link
              href="#staking"
              sx={{
                backgroundRepeat: "no-repeat",
                backgroundPosition: "calc(100% - 9px) bottom",
                backgroundImage: "none",
                "&:hover": {
                  color: "#ffffff",
                  backgroundColor: "#5249de",
                  backgroundImage: "url(/images/header/moneyplex.webp)",
                },
              }}
            >
              Staking
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
