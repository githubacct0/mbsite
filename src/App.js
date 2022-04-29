import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import ThemeProvider from "theme";
import Header from "./section/header";
import Top from "./section/top";
import MoneyPlex from "./section/moneyplex";
import MoneyboyCoin from "./section/moneyboy-coin";
import Collections from "./section/collections";
import Store from "./section/store";
import Staking from "./section/staking";
import Footer from "./section/footer";

function App() {
  const moneyboys = Array(9)
    .fill(0)
    .map(
      (_e) =>
        `/images/moneyboys-nft/moneyboys${Math.floor(Math.random() * 29)}.webp`
    );
  return (
    <ThemeProvider>
      <CssBaseline />
      <Header />
      <Box component="main">
        <Top moneyboys={moneyboys} />
        <MoneyPlex />
        <MoneyboyCoin />
        {/* <Collections />
        <Store />
        <Staking /> */}
      </Box>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
