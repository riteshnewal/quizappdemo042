import React, { Component } from "react";
import PropTypes from "prop-types";

//Material imports
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

class QuestionItem extends Component {
  handleChange = event => {
    this.props.handleAnswerSelect(event.target.value);
  };

  render() {
    const { classes, quizDataItem, showAnswer } = this.props;

    return (
      <div className={classes.container}>
        <div className={classes.header}>
          <Typography variant="overline">{quizDataItem.category}</Typography>
        </div>
        <div className={classes.bodyArea}>
          <Typography
            variant="subtitle1"
            dangerouslySetInnerHTML={{ __html: quizDataItem.question }}
          />
          {showAnswer && (
            <Typography variant="subtitle1">
              Answer is : {quizDataItem.correct_answer}
            </Typography>
          )}
          <div className={classes.answerArea}>
            <FormControl component="fieldset" className={classes.answerArea}>
              <RadioGroup
                aria-label="Answer"
                name="Answer"
                onChange={this.handleChange}
                value={this.props.value}
                className={classes.root}
              >
                <FormControlLabel
                  value="True"
                  control={<Radio color="primary" />}
                  label="True"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="False"
                  control={<Radio color="primary" />}
                  label="False"
                  labelPlacement="end"
                />
              </RadioGroup>
            </FormControl>
          </div>
        </div>
      </div>
    );
  }
}

const styles = theme => ({
  container: {
    display: "flex",
    flexDirection: "column"
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: 10,
    backgroundColor: theme.palette.primary.light
  },
  bodyArea: {
    display: "flex",
    height: 200,
    flexDirection: "column",
    position: "relative",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20
  },
  answerArea: {
    width: "95%",
    bottom: 10,
    position: "absolute"
  },
  root: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    flexWrap: "nowrap"
  }
});

export default withStyles(styles)(QuestionItem);

QuestionItem.propTypes = {
  classes: PropTypes.object.isRequired,
  quizDataItem: PropTypes.object.isRequired,
  handleAnswerSelect: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  showAnswer: PropTypes.bool.isRequired
};
