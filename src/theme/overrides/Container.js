export default function Container(theme) {
  return {
    MuiContainer: {
      styleOverrides: {
        root: {
          [theme.breakpoints.up("xl")]: {
            maxWidth: theme.breakpoints.values.xl
          }
        },
      },
    },
  };
}
