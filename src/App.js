import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import axios from "axios";
import TaskItem from "./TaskItem.js";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';
import CssBaseline from '@material-ui/core/CssBaseline';
import InboxIcon from '@material-ui/icons/Inbox';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import DateRange from '@material-ui/icons/DateRange';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Schedule from '@material-ui/icons/Schedule';
import Done from '@material-ui/icons/Done';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import InsertDriveFile from '@material-ui/icons/InsertDriveFile';
import FolderSpecial from '@material-ui/icons/FolderSpecial';



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
    padding: 75,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: "auto"
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: drawerWidth,
  },
  root: {
    verticalAlign: "bottom"
  },
  title: {
    flexGrow: 1,
  },
  menu: {
    width: 350
  }
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      drawerOpen: true  ,
      anchorEl: null,
      selectedIndex: true
    };

    //http://api.ambrosia.red/tasks
    //http://api.ambrosia.red/tasks
    axios.get("http://localhost:18080/tasks").then(res => {
      this.setState({
        tasks: res.data
      });
    });

    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleAddTask = this.handleAddTask.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleMenu = this.handleMenu.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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

  handleDelete(task) {
    let updatedTasks = this.state.tasks;
    for (var i = 0; i < updatedTasks.length; i++) {
      if (updatedTasks[i].id === task.id) {
        updatedTasks.splice(i);
        break;
      }
    }
    this.setState({
      tasks: updatedTasks
    });
  }

  //post creates 
  //http://api.ambrosia.red/tasks
  //http://localhost:18080/tasks
  handleAddTask() {
    axios.post("http://localhost:18080/tasks", {
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

  handleClose() {
    this.setState({
      anchorEl: null //menu is not anchored to anything 
    });
  }

  handleMenu(event) {
    // console.log(event);
    // console.log(event.currentTarget);
    this.setState ({
      anchorEl: event.currentTarget //event.currentTarget is the menu 
    });
  }

  handleListItemClick(event, index) {
    this.setState({
      selectedIndex: index
    });
  }


  render() {
    let taskElements = [];

    for (var i = 0; i < this.state.tasks.length; i++) {
      taskElements.push(
        <TaskItem
          key={this.state.tasks[i].id}
          task={this.state.tasks[i]} //retrieves entire task with id, name, due_date, starred, notes
          onUpdate={this.handleUpdate} 
          onDelete={this.handleDelete} 
          />
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
            <Typography variant="h6" className={classes.title} noWrap >
              Ambrosia
            </Typography>

            <div >
              <IconButton
                color="inherit"
                onClick={this.handleMenu}
              >
                <AddIcon />
              </IconButton>
              <Menu                
                id="menu-appbar"
                anchorEl={this.state.anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={this.state.anchorEl !== null} //if the anchorEl is not null then the menu should be opened 
                onClose={this.handleClose}
                
              >
              <List>
                <ListItem 
                  className={classes.menu}
                  button
                  selected={this.state.selectedIndex === 0}
                  onClick={(event) => this.handleListItemClick(event, 0)}
                  >
                  <ListItemIcon><InsertDriveFile /></ListItemIcon>
                    <ListItemText 
                    primary="New Project" secondary="Create a project and work towards completion one to-do at a time." />
                </ListItem>
                <ListItem
                  className={classes.menu}
                  button
                  selected={this.state.selectedIndex === 1}
                  onClick={(event) => this.handleListItemClick(event, 1)}
                  >
                  <ListItemIcon><FolderSpecial /></ListItemIcon>
                    <ListItemText primary="New Area" secondary="Group your projects based on your committments, such as Classes or Family." />
                </ListItem>
              </List>
              </Menu>
            </div>

          </Toolbar>
        </AppBar>

        <Drawer
          className={classes.drawer}
          open={this.state.drawerOpen}
          variant="persistent"
          anchor="left"
          onClose={() => this.toggleDrawer(false)}
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
            <ListItem 
              button={true}
              key="Inbox"
            >
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItem>
            <ListItem 
              button={true}
              key="Today"
              >
              <ListItemIcon><Schedule /></ListItemIcon>
              <ListItemText primary="Today" />
            </ListItem>
            <ListItem 
              button={true}
              key="Upcoming"
              >
              <ListItemIcon><DateRange /></ListItemIcon>
              <ListItemText primary="Upcoming" />
            </ListItem>
            <ListItem 
              button={true}
              key="Logbook"
              >
              <ListItemIcon><Done /></ListItemIcon>
              <ListItemText primary="Logbook" />
            </ListItem> 
            <ListItem 
              button={true}
              key="Waste"
              >
              <ListItemIcon><DeleteOutline /></ListItemIcon>
              <ListItemText primary="Waste" />
            </ListItem>
          </List>
          <Divider />
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
