import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Header from "./section/header";
import Top from "./section/top";
import MoneyPlex from "./section/moneyplex";
import MoneyboyCoin from "./section/moneyboy-coin";
import Collections from "./section/collections";
import Store from "./section/store";
import Staking from "./section/staking";
import Footer from "./section/footer";

function App() {
  console.log("App loaded");
  return (
    <>
      <CssBaseline />
      <Header />
      <Box component="main">
        <Top />
        <MoneyPlex />
        <MoneyboyCoin />
        {/* <Collections />
        <Store />
        <Staking /> */}
      </Box>
      <Footer />
    </>
  );
}

export default App;
