import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";

function Letter({ letter, sx, image, setBackground }) {
  const [isActive, setActive] = useState(false);
  const letterURL = `/images/moneyboys-letter/${letter}.svg`;
  const darkLetterURL = `/images/moneyboys-letter/${letter}-dark.svg`;

  useEffect(() => {
    if (isActive) {
      setBackground(`url(${image})`);
    } else {
      setBackground("none");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive]);

  return (
    <Grid
      item
      sx={{
        maskSize: "100% auto",
        maskRepeat: "no-repeat",
        backgroundColor: "#ffffff",
        backgroundSize: "auto 100%",
        backgroundPosition: "center bottom",
        backgroundRepeat: "no-repeat",
        cursor: "pointer",
        "& img": { width: "100%", visibility: "hidden" },
        "&:hover": {
          transition: "50ms ease-out",
          backgroundImage: `url(${image})`,
          maskImage: isActive ? `url(${letterURL})` : `url(${darkLetterURL})`,
        },
        "&:not(:hover)": {
          maskImage: `url(${letterURL})`,
        },
        ...sx,
      }}
      onMouseDown={() => setActive(true)}
      onTouchStart={() => setActive(true)}
      onTouchEnd={() => setActive(false)}
      onClick={() => setActive(false)}
      onMouseOut={() => setActive(false)}
    >
      <img src={`/images/moneyboys-letter/${letter}.svg`} alt={letter} />
    </Grid>
  );
}
function Top({ moneyboys }) {
  const theme = useTheme();
  const [background, setBackground] = useState("none");
  return (
    <Box
      component="section"
      id="top"
      sx={{
        background: "#060608",
        color: "#ffffff",
        backgroundImage: background,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container fixed>
        <Grid
          container
          sx={{
            height: "100vh",
            alignItems: "center",
          }}
        >
          <Grid
            item
            xs={12}
            sx={{
              position: "relative",
              "&::before": {
                content: '"SOLANA"',
                position: "absolute",
                top: "-50px",
                left: "0px",
                zIndex: 100,
                fontFamily: "PlusJakartaSans-Bold",
              },
              [theme.breakpoints.down("xl")]: {
                "&::before": {
                  fontSize: "26px",
                },
              },
              [theme.breakpoints.up("xl")]: {
                "&::before": {
                  fontSize: "30px",
                },
              },
            }}
          >
            <Grid
              container
              sx={{
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Letter
                letter="M"
                image={moneyboys[0]}
                setBackground={setBackground}
                sx={{
                  width: "11.87%",
                }}
                key="letter1"
              />
              <Letter
                letter="O"
                image={moneyboys[1]}
                setBackground={setBackground}
                sx={{
                  width: "12.04%",
                  marginLeft: "1.78%",
                }}
              />
              <Letter
                letter="N"
                image={moneyboys[2]}
                setBackground={setBackground}
                sx={{
                  width: "9.32%",
                  marginLeft: "1.78%",
                }}
              />
              <Letter
                letter="E"
                image={moneyboys[3]}
                setBackground={setBackground}
                sx={{
                  width: "7.63%",
                  marginLeft: "2.03%",
                }}
              />
              <Letter
                letter="Y"
                image={moneyboys[4]}
                setBackground={setBackground}
                sx={{
                  width: "9.92%",
                  marginLeft: "0.59%",
                }}
              />
              <Letter
                letter="B"
                image={moneyboys[5]}
                setBackground={setBackground}
                sx={{
                  width: "8.99%",
                  marginLeft: "1.27%",
                }}
              />
              <Letter
                letter="O"
                image={moneyboys[6]}
                setBackground={setBackground}
                sx={{
                  width: "12.04%",
                  marginLeft: "1.27%",
                }}
              />
              <Letter
                letter="Y"
                image={moneyboys[7]}
                setBackground={setBackground}
                sx={{
                  width: "9.92%",
                  marginLeft: "0.5%",
                }}
              />
              <Letter
                letter="S"
                image={moneyboys[8]}
                setBackground={setBackground}
                sx={{
                  width: "8.73%",
                  marginLeft: "0.25%",
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>{" "}
    </Box>
  );
}

export default Top;
