import React, { Component } from "react";
import PropTypes from "prop-types";

//Material imports
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Paper, Button } from "@material-ui/core";

class WelcomeScreen extends Component {
  handleContiune = () => {
    this.props.history.push("/quiz");
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.rootContainer}>
        <Paper className={classes.messageArea} elevation={1}>
          <div className={classes.topArea}>
            <Typography variant="h5" className={classes.headerText}>
              Welcome to the Trivia Challenge!
            </Typography>
            <Typography variant="h6">
              You will be presented with 10 True or False questions.
            </Typography>
            <Typography variant="subtitle2">Can you Score 100%?</Typography>
          </div>
          <div className={classes.bottomArea}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              size="medium"
              onClick={this.handleContiune}
            >
              BEGIN
            </Button>
          </div>
        </Paper>
      </div>
    );
  }
}

const styles = theme => ({
  rootContainer: {
    backgroundImage: `url(${theme.background.image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "fixed"
  },
  messageArea: {
    position: "relative",
    height: "50%",
    width: "auto",
    boxShadow: "0px 0px 7px 0px rgba(0,0,0,0.2)",
    margin: 10
  },
  topArea: {
    height: "75%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    padding: 20
  },
  bottomArea: {
    width: "100%",
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    bottom: 20
  },
  headerText: {
    display: "flex",
    alignItems: "flex-start"
  },
  button: {
    padding: 10,
    paddingRight: 50,
    paddingLeft: 50
  }
});

export default withStyles(styles)(WelcomeScreen);

WelcomeScreen.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};
