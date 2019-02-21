import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

//Material imports
import { withStyles } from "@material-ui/core/styles";
import { Paper, Button } from "@material-ui/core";
import MobileStepper from "@material-ui/core/MobileStepper";
import QuestionItem from "../components/QuestionItem";
import LoadingScreen from "./LoadingScreen";
import { fetchQuizData } from "../actions/QuizDataActions";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

class QuizScreens extends Component {
  state = {
    loading: true,
    activeStep: 0,
    disableNextButton: true
  };

  showAnswer = false;
  componentDidMount = () => {
    this.props.fetchQuizData(
      () => {
        // Show Quiz
        this.setState({ loading: false });
      },
      () => {
        // Show Error Message
      }
    );
  };

  handleNext = () => {
    const {
      quizData: { results }
    } = this.props;

    if (this.state.activeStep === results.length - 1) {
      this.props.history.push({
        pathname: "/result"
      });
    } else {
      this.setState(prevState => ({
        activeStep: prevState.activeStep + 1,
        disableNextButton: true
      }));
    }
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1
    }));
  };

  handleAnswerSelect = value => {
    const {
      quizData: { results }
    } = this.props;
    results[this.state.activeStep].userAnswer = value;
    this.setState({ disableNextButton: false });
  };

  handleStepChange = activeStep => {
    this.setState({ activeStep });
  };

  render() {
    const {
      classes,
      quizData: { results }
    } = this.props;
    const { activeStep, loading } = this.state;
    if (results !== undefined) {
    }

    // Sent Value - So on every next question not either True Or False will be selected
    return (
      <div className={classes.rootContainer}>
        {!loading && results !== undefined && (
          <Paper className={classes.root}>
            <AutoPlaySwipeableViews
              axis={"x"}
              index={activeStep}
              onChangeIndex={this.handleStepChange}
              autoplay={false}
            >
              {results.map((step, index) => (
                <QuestionItem
                  key={index}
                  quizDataItem={step}
                  handleAnswerSelect={this.handleAnswerSelect}
                  value={
                    step.userAnswer !== undefined ? step.userAnswer : "Blank"
                  }
                  showAnswer={this.showAnswer}
                />
              ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
              steps={results.length}
              position="static"
              activeStep={activeStep}
              className={classes.mobileStepper}
              nextButton={
                <Button
                  size="small"
                  onClick={this.handleNext}
                  disabled={this.state.disableNextButton}
                  color="primary"
                  variant="contained"
                >
                  Next
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={this.handleBack}
                  disabled={true}
                  color="primary"
                  variant="contained"
                >
                  Back
                </Button>
              }
            />
          </Paper>
        )}
        {loading && <LoadingScreen />}
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
    width: "50%",
    boxShadow: "0px 0px 7px 0px rgba(0,0,0,0.2)"
  },
  root: {
    maxWidth: 400,
    flexGrow: 1,
    margin: 20
  }
});

const mapStateToProps = ({ quizData }) => {
  return { quizData };
};

export default connect(
  mapStateToProps,
  {
    fetchQuizData
  }
)(withStyles(styles)(QuizScreens));

QuizScreens.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  fetchQuizData: PropTypes.func.isRequired,
  quizData: PropTypes.object.isRequired
};
