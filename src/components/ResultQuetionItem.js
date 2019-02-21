import React, { Component } from "react";
import PropTypes from "prop-types";

//Material imports
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import Done from "@material-ui/icons/Done";
import Close from "@material-ui/icons/Close";

class ResultQuetionItem extends Component {
  renderIcon = () => {
    const { classes, questionItem } = this.props;
    if (questionItem.correct_answer === questionItem.userAnswer) {
      return <Done className={classes.icon} />;
    } else {
      return <Close className={classes.icon} />;
    }
  };
  render() {
    const { classes, questionItem } = this.props;

    return (
      <div className={classes.questionContainer}>
        <Icon className={classes.iconContainer}>{this.renderIcon()}</Icon>
        <Typography
          variant="body1"
          dangerouslySetInnerHTML={{ __html: questionItem.question }}
        />
      </div>
    );
  }
}

const styles = theme => ({
  questionContainer: {
    display: "flex",
    flexDirection: "row",
    padding: 10
  },
  iconContainer: {
    paddingRight: 10
  },
  icon: {
    fontSize: 24
  }
});

export default withStyles(styles)(ResultQuetionItem);

ResultQuetionItem.propTypes = {
  classes: PropTypes.object.isRequired,
  questionItem: PropTypes.object.isRequired
};
