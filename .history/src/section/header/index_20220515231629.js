import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { useTheme } from "@mui/material/styles";
import "./header.css";

function Header() {
  const theme = useTheme();
  const [isActive, setActive] = useState(false);
  const handleClick = () => {
    setActive(!isActive);
  };
  useEffect(() => {
    if (isActive) document.body.classList.add("header-opened");
    else document.body.classList.remove("header-opened");
  }, [isActive]);

  return (
    <Box
      component="header"
      id="header"
      className={isActive ? "active" : ""}
      sx={{
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        zIndex: 900,
        color: "white",
        backgroundColor: isActive ? "#000000" : "unset",
        "& nav": {
          transition: ".5s",
        },
        "&:not(.active)": {
          height: "110px",
          [theme.breakpoints.down("xl")]: {
            height: "110px",
          },
          [theme.breakpoints.down("lg")]: {
            height: "100px",
          },
          [theme.breakpoints.down("md")]: {
            height: "90px",
          },
          [theme.breakpoints.down("sm")]: {
            height: "80px",
          },
        },
        "&:not(.active) nav": {
          // transform: "translateY(calc(-100% - 110px))",
          display: "none",
        },
      }}
    >
      <Grid
        container
        id="header-top"
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          paddingX: "28px",
          height: "110px",
          zIndex: 910,
          position: "relative",
          [theme.breakpoints.down("xl")]: {
            height: "110px",
          },
          [theme.breakpoints.down("lg")]: {
            height: "100px",
          },
          [theme.breakpoints.down("md")]: {
            height: "90px",
          },
          [theme.breakpoints.down("sm")]: {
            height: "80px",
          },
        }}
      >
        <Grid item>
          <img style = {{maxWidth:50}} src="/images/logo.png" alt="Moneyboys" />
        </Grid>
        <Grid item>
          <div className="menu-icon" onClick={handleClick}>
            <input className="menu-icon__cheeckbox" type="checkbox" />
            <div>
              <span></span>
              <span></span>
            </div>
          </div>
        </Grid>
      </Grid>
      <Box
        component="nav"
        sx={{
          overflowY: "auto",
          backgroundColor: "#000000",
          height: "calc(100vh - 110px)",
          [theme.breakpoints.down("lg")]: {
            height: "calc(100vh - 100px)",
          },
          [theme.breakpoints.down("md")]: {
            height: "calc(100vh - 90px)",
          },
          [theme.breakpoints.down("sm")]: {
            height: "calc(100vh - 80px)",
          },
        }}
      >
        <Box
          component="ul"
          sx={{
            padding: 0,
            margin: 0,
            "& li": { listStyleType: "none" },
            "& a": {
              fontFamily: "PlusJakartaSans-Bold",
              fontSize: "60px",
              textDecoration: "none",
              paddingX: "110px",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              width: "100%",
              height: "calc(20vh - 22px)",
              minHeight: "80px",
            },
            "& a:not(:hover)": {
              transition: ".3s ease-out",
            },
            [theme.breakpoints.down("xl")]: {
              "& a": {
                fontSize: "50px",
                paddingX: "90px",
              },
            },
            [theme.breakpoints.down("lg")]: {
              "& a": {
                fontSize: "40px",
                paddingX: "75px",
                height: "calc(20vh - 20px)",
              },
            },
            [theme.breakpoints.down("md")]: {
              "& a": {
                fontSize: "30px",
                paddingX: "50px",
                height: "calc(20vh - 18px)",
              },
            },
            [theme.breakpoints.down("sm")]: {
              "& a": {
                fontSize: "24px",
                paddingX: "30px",
                maxHeight: "100px",
                height: "calc(20vh - 16px)",
              },
            },
          }}
        >
          <Box component="li">
            <Link
              href="#moneyplex"
              className="animate__animated animate__fadeInLeftBig"
              onClick={() => setActive(false)}
              sx={{
                backgroundRepeat: "no-repeat",
                backgroundPosition: "98% bottom",
                backgroundImage: "none",
                backgroundSize: "auto 80.87%",
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
              className="animate__animated animate__fadeInLeftBig animate__delay-2s"
              onClick={() => setActive(false)}
              sx={{
                backgroundRepeat: "no-repeat",
                backgroundPosition: "92% bottom",
                backgroundImage: "none",
                backgroundSize: "auto 100%",
                "&:hover": {
                  color: "#060608",
                  backgroundColor: "#7effa7",
                  backgroundImage: "url(/images/header/moneyboy-coin.webp)",
                },
              }}
            >
              MoneyBoy Coin
            </Link>
          </Box>
          <Box component="li">
            <Link
              href="#collections"
              className="animate__animated animate__fadeInLeftBig animate__delay-3s"
              onClick={() => setActive(false)}
              sx={{
                backgroundRepeat: "no-repeat",
                backgroundPosition: "94% bottom",
                backgroundImage: "none",
                backgroundSize: "auto 86.64%",
                "&:hover": {
                  color: "#ffffff",
                  backgroundColor: "#111822",
                  backgroundImage: "url(/images/header/collections.webp)",
                },
                [theme.breakpoints.down("sm")]: {
                  backgroundSize: "auto 77%",
                },
              }}
            >
              NFT Collections
            </Link>
          </Box>
          <Box component="li">
            <Link
              href="#store"
              className="animate__animated animate__fadeInLeftBig animate__delay-4s"
              onClick={() => setActive(false)}
              sx={{
                backgroundRepeat: "no-repeat",
                backgroundPosition: "96% bottom",
                backgroundImage: "none",
                backgroundSize: "auto 80.51%",
                "&:hover": {
                  color: "#060608",
                  backgroundColor: "#ffd6e2",
                  backgroundImage: "url(/images/header/store.webp)",
                },
              }}
            >
              Store
            </Link>
          </Box>
          <Box component="li">
            <Link
              href="#staking"
              className="animate__animated animate__fadeInLeftBig animate__delay-5s"
              onClick={() => setActive(false)}
              sx={{
                backgroundRepeat: "no-repeat",
                backgroundPosition: "92% bottom",
                backgroundImage: "none",
                backgroundSize: "auto 90.61%",
                "&:hover": {
                  color: "#ffffff",
                  backgroundColor: "#0a216b",
                  backgroundImage: "url(/images/header/staking.webp)",
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
