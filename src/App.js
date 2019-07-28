import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import axios from "axios";
import TaskItem from "./TaskItem.js";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

const useStyles = theme => ({
  fab: {
    right: 20,
    bottom: 20,
    position: 'fixed',
    //when the position is fixed, then you can use right (20px from the right of the screen) and bottom 

  }
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: []
    };

    axios.get("http://api.ambrosia.red/tasks").then(res => {
      this.setState({
        tasks: res.data
      });
    });

    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleAddTask = this.handleAddTask.bind(this);
  }

  //function that handles the update given a task passed in 
  //task is a map 
  handleUpdate(task) {
    let updatedTasks = this.state.tasks;

    for (var i = 0; i < updatedTasks.length; i++) {
      if (updatedTasks[i].id === task.id) { //res.data = task = the entire task 
        updatedTasks[i] = task;
        break;
      }
    }

    this.setState({
      tasks: updatedTasks //tasks is now the new list of updated tasks 
    });
  }

  handleAddTask() {
    axios.post("http://api.ambrosia.red/tasks", {
      due_date: "2019-07-14 01:29:03"
    }).then(res => {
      let updatedTasks = this.state.tasks;
      updatedTasks.push(res.data);

      this.setState({
        tasks: updatedTasks
      });
    })
  }


  render() {
    let taskElements = [];

    for (var i = 0; i < this.state.tasks.length; i++) {
      taskElements.push(
        <TaskItem
          key={this.state.tasks[i].id}
          task={this.state.tasks[i]} //retrieves entire task with id, name, due_date, starred, notes
          onUpdate={this.handleUpdate} />
      );
    }

    const { classes } = this.props;

    //render the list called taskElements
    return (
      <div className="App">
        {taskElements}
        <Fab 
            color="primary" 
            aria-label="add" 
            className={classes.fab}
            onClick={this.handleAddTask}
            >
          <AddIcon />
        </Fab>
      </div>
    );
  }
}

export default withStyles(useStyles)(App); 
