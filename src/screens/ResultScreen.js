import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

//Material imports
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Paper, Button } from "@material-ui/core";
import ResultQuetionItem from "../components/ResultQuetionItem";

class ResultScreen extends Component {
  componentWillMount = () => {
    const {
      quizData: { results }
    } = this.props;
    if (results === undefined || results.length === 0) {
      this.props.history.push("/");
    }
  };

  calculateScore = () => {
    const {
      quizData: { results }
    } = this.props;
    let score = 0;
    results.map(items => {
      if (items.correct_answer === items.userAnswer) {
        score++;
      }
      return score;
    });
    return score;
  };

  renderQuestions = () => {
    const {
      quizData: { results }
    } = this.props;
    return results.map((items, index) => {
      return <ResultQuetionItem key={index} questionItem={items} />;
    });
  };

  handleRestart = () => {
    this.props.history.push("/");
  };

  render() {
    const {
      classes,
      quizData: { results }
    } = this.props;
    return (
      <div>
        {results !== undefined && (
          <div className={classes.rootContainer}>
            <Paper className={classes.root}>
              <div className={classes.resultContainer}>
                <Typography variant="h5" className={classes.headerText}>
                  You scored
                </Typography>
                <Typography variant="h6">{this.calculateScore()}/10</Typography>
              </div>
              <div className={classes.questionListArea}>
                {this.renderQuestions()}
              </div>
              <div className={classes.restartButton}>
                <Button
                  size="small"
                  onClick={this.handleRestart}
                  color="primary"
                  variant="contained"
                >
                  Restart Quiz
                </Button>
              </div>
            </Paper>
          </div>
        )}
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

  root: {
    maxWidth: 500,
    height: "70%",
    boxShadow: "0px 0px 7px 0px rgba(0,0,0,0.2)",
    minHeight: 600
  },
  resultContainer: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  headerText: {
    display: "flex",
    alignItems: "flex-start",
    padding: 10
  },
  questionListArea: {
    position: "relative",
    flexDirection: "column",
    overflowY: "auto",
    height: "75%"
  },
  restartButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 15
  }
});

const mapStateToProps = ({ quizData }) => {
  return { quizData };
};

export default connect(
  mapStateToProps,
  {}
)(withStyles(styles)(ResultScreen));

ResultScreen.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  quizData: PropTypes.object.isRequired
};
