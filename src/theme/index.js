import PropTypes from "prop-types";
import { CssBaseline } from "@mui/material";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";
import breakpoints from "./breakpoints";
import componentsOverride from "./overrides";

export default function ThemeProvider({ children }) {
  const themeOptions = { breakpoints };

  const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme);
  
  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node,
};
