import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import clsx from 'clsx';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import EventIcon from '@material-ui/icons/Event';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from '@date-io/moment';
import moment from 'moment';
import DeleteOutline from '@material-ui/icons/DeleteOutline';


const useStyles = theme => ({
  card: {
    maxWidth: 580,
    margin: "24px auto",
    borderRadius: 3
  },
  cardContent: {  
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      fontFamily: "Helvetica Neue, sans-serif",
      paddingBottom: 0
  },
  taskName : {
    fontSize: 15
  },
  expand: {
    transform: 'rotate(0)', //rotate 0 deg 
    // marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  collapseContent: {
    paddingTop: 0
  },
  dateTime: {
    marginRight: 9,
    width: 200,
    textAlign: "right",
    fontSize: 13
  },
  deleteIcon: {
    marginLeft: "auto"
  }
});


class TaskItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
      notesValue: props.task.notes,
      nameValue: props.task.name,
      datePickerOpen: false,
      dateValue: moment(props.task.due_date)
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleDateToggle = this.handleDateToggle.bind(this);
    this.handleExpandClick = this.handleExpandClick.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleNotesUpdate = this.handleNotesUpdate.bind(this);
    this.handleNameUpdate = this.handleNameUpdate.bind(this);
    this.handleFavoriteClick = this.handleFavoriteClick.bind(this);
    this.handleDateAccept = this.handleDateAccept.bind(this);
    this.handleDeleteTask = this.handleDeleteTask.bind(this);

  }

  handleExpandClick() {
    this.setState ({
      expanded: !this.state.expanded
    })
  }

  //put updates 
  handleChange() {
    //axios.put(url, map of request body)
    axios.put("http://localhost:18080/tasks/" + this.props.task.id, {
      completed: !this.props.task.completed //actual request body like {completed: true}
    }).then(res => {
      this.props.onUpdate(res.data); //res.data is "task," a map
    });
  }

  //want to update the tasks to set trashed=true
  handleDeleteTask() {
    axios.put("http://localhost:18080/tasks/" + this.props.task.id, {
      trashed: true
    }).then(res => {
      this.props.onUpdate(res.data);
    });
  }

  handleBlur(e) {
    axios.put("http://localhost:18080/tasks/" + this.props.task.id, {
      notes: this.state.notesValue, //get from reference called this.textInput
      name: this.state.nameValue
    }).then(res => {
      this.props.onUpdate(res.data);
    });
  }

  handleDateToggle(close) {
    if (close) {
      axios.put("http://localhost:18080/tasks/" + this.props.task.id, {
        //2019-07-14 01:29:03
        due_date: this.state.dateValue.format("YYYY-MM-DD")
      }).then(res => {
        this.props.onUpdate(res.data);
      })
    }

    this.setState({
      datePickerOpen: !this.state.datePickerOpen,
    });
  }




  handleDateAccept(date) {
    this.setState({
      dateValue: date
    });
  }

  //e is the event, e.target is textfield 
  handleNotesUpdate(e) {
    this.setState({
      notesValue: e.target.value
    });
  }

  handleNameUpdate(e) {
    this.setState({
      nameValue: e.target.value
    });
  }

  handleFavoriteClick() {
    axios.put("http://localhost:18080/tasks/" + this.props.task.id, {
      starred: !this.props.task.starred 
    }).then(res => {
      this.props.onUpdate(res.data); //res.data is "task," a map
    });

  }

  render() {
    const { classes } = this.props;

    let icon;

    if (this.props.task.starred) {
      icon = <FavoriteIcon />;
    } else {
      icon = <FavoriteBorderIcon />;
    }

    return (
      
      <Card className={classes.card}>
        <CardContent 
          className={classes.cardContent}
        >
            <Checkbox className={classes.checkBox}
                      checked={this.props.task.completed}
                      onChange={this.handleChange} 
            />
            <TextField
              fullWidth={true}
              placeholder="New Task"
              className={classes.textField}
              value={this.state.nameValue}
              onChange={this.handleNameUpdate}
              onBlur={this.handleBlur}
              InputProps={{disableUnderline: true}}
            />
            <Typography className={classes.dateTime}>
              {/* {moment(this.props.task.due_date).format('ddd MMMM Do')} */}
              {moment(this.state.dateValue).fromNow()}
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
        <IconButton onClick={this.handleFavoriteClick}>
            {icon}
          </IconButton>
          <IconButton onClick={() => this.handleDateToggle(false)}>
            <EventIcon />
          </IconButton>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <DateTimePicker
              variant="inline"
              value={this.state.dateValue}
              InputProps={{disableUnderline: true, className: classes.dateTime}}
              open={this.state.datePickerOpen}
              onClose={() => this.handleDateToggle(true)}
              onChange={this.handleDateAccept}
            />
          </MuiPickersUtilsProvider>
          <IconButton
            className={classes.deleteIcon}
            onClick={this.handleDeleteTask}
            >
              <DeleteOutline />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
              })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent className={classes.collapseContent}>
            <TextField
              autoFocus={true}
              fullWidth={true}
              placeholder="Notes"
              rows={2}
              multiline={true}
              className={classes.textField}
              margin="normal"
              value={this.state.notesValue}
              onChange={this.handleNotesUpdate}
              onBlur={this.handleBlur}
              InputProps={{disableUnderline: true}}
            />
          </CardContent>
        </Collapse>
    </Card>
    );
  }
}

TaskItem.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(useStyles)(TaskItem); 