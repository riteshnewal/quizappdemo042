import { createMuiTheme } from "@material-ui/core/styles";
import background from "../assets/background.jpg";

/**
 * The Theme class overrides the default theme from Material UI
 *
 * The variable velow represents all of our overrides.
 *
 * A full list of variables that can be overriden can be found here and in ./MaterialDefaults.json
 * https://material-ui-next.com/customization/themes/#the-other-variables
 *  contrastText
 */
let defaultTheme = {
  palette: {
    primary: {
      light: "#87CEFA",
      main: "#4169E1",
      dark: "#483D8B",
      contrastText: "white"
    }
  },
  background: {
    image: background
  },
  typography: {
    fontFamily: '"Nunito Sans", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none",
        borderRadius: 30
      }
    },
    MuiIconButton: {
      root: {
        borderRadius: 0
      }
    }
  }
};

export const createTheme = theme => {
  if (theme === {} || theme === undefined) {
    return createMuiTheme(defaultTheme);
  }
  return createMuiTheme(theme);
};
