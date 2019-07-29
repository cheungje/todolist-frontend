import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import axios from "axios";
import TaskItem from "./TaskItem.js";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import CssBaseline from '@material-ui/core/CssBaseline';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import FavoriteIcon from '@material-ui/icons/Favorite';



const drawerWidth = 240;

const useStyles = theme => ({
  root: {
    display: 'flex',
    paddingTop: 40
  },
  fab: {
    right: 20,
    bottom: 20,
    position: 'fixed',
    //when the position is fixed, then you can use right (20px from the right of the screen) and bottom 
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
    width: "auto"
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      drawerOpen: false
    };

    axios.get("http://api.ambrosia.red/tasks").then(res => {
      this.setState({
        tasks: res.data
      });
    });

    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleAddTask = this.handleAddTask.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this);
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

  toggleDrawer(isOpen) {
    this.setState({
      drawerOpen: isOpen
    });
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
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classes.appBar + " " + (this.state.drawerOpen ? classes.appBarShift : "")}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => this.toggleDrawer(true)}
              edge="start"
              className={classes.menuButton + " " + (this.state.drawerOpen ? classes.hide : "")}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Ambrosia
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          open={this.state.drawerOpen}
          variant="persistent"
          anchor="left"
          onClose={() => this.toggleDrawer(false)}
          onOpen={() => this.toggleDrawer(true)}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={() => this.toggleDrawer(false)}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            {['Inbox', 'Today', 'Upcoming', 'Trash'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <FavoriteIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          {/* <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List> */}
        </Drawer>
        <Fab 
            color="primary" 
            aria-label="add" 
            className={classes.fab}
            onClick={this.handleAddTask}
            >
          <AddIcon />
        </Fab>
        <div 
          className={classes.content + " " + (this.state.drawerOpen ? classes.contentShift : "")}
        >
          {taskElements}
        </div>
      </div>
    );
  }
}

export default withStyles(useStyles)(App); 
