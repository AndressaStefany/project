import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import CSSGrid from "./CSSGrid";
import MediasView from "./MediasView";
import IngressoView from "./IngressoView";
import CorrelacaoView from "./CorrelacaoView";
import ContatoView from "./ContatoView";
import QuemSomosView from "./QuemSomosView";
import AjudaView from "./AjudaView";

import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import DraftsIcon from '@material-ui/icons/Drafts'
import StarIcon from '@material-ui/icons/Star'
import SendIcon from '@material-ui/icons/Send'
import MailIcon from '@material-ui/icons/Mail'
import DeleteIcon from '@material-ui/icons/Delete'
import ReportIcon from '@material-ui/icons/Report'

import { HashRouter as Router, Route, Link } from 'react-router-dom'

const drawerWidth = 240;

const styles = theme => ({
    link : {
        textDecoration:'none'
    },
    root: {
        flexGrow: 1,
    },
    appFrame: {
        height: '100%',
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        width: '100%',
    },
    appBar: {
        position: 'absolute',
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    'appBarShift-left': {
        marginLeft: drawerWidth,
    },
    'appBarShift-right': {
        marginRight: drawerWidth,
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
    },
    hide: {
        display: 'none',
    },
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    'content-left': {
        marginLeft: -drawerWidth,
    },
    'content-right': {
        marginRight: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    'contentShift-left': {
        marginLeft: 0,
    },
    'contentShift-right': {
        marginRight: 0,
    },
});

class PersistentDrawer extends React.Component {
    state = {
        open: false,
        anchor: 'left',
    };

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes, theme } = this.props;
        const { anchor, open } = this.state;

        const drawer = (
            <Drawer
                variant="persistent"
                anchor={anchor}
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={this.handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <Link style={styles(theme).link}  to="/">
                        <ListItem
                            onClick={this.handleDrawerClose}
                            button
                        >
                            <ListItemIcon>
                                <SendIcon />
                            </ListItemIcon>
                            <ListItemText primary="Matérias" />
                        </ListItem>
                    </Link>
                    <Link style={styles(theme).link}  to="/medias">
                        <ListItem
                            onClick={this.handleDrawerClose}
                            button
                        >
                            <ListItemIcon>
                                <SendIcon />
                            </ListItemIcon>
                            <ListItemText primary="Médias" />
                        </ListItem>
                    </Link>
                    <Link style={styles(theme).link}  to="/ingresso">
                        <ListItem
                            onClick={this.handleDrawerClose}
                            button
                        >
                            <ListItemIcon>
                                <SendIcon />
                            </ListItemIcon>
                            <ListItemText primary="Ingresso Vs Evasão" />
                        </ListItem>
                    </Link>
                    <Link style={styles(theme).link}  to="/correlacao">
                        <ListItem
                            onClick={this.handleDrawerClose}
                            button
                        >
                            <ListItemIcon>
                                <SendIcon />
                            </ListItemIcon>
                            <ListItemText primary="Correlação" />
                        </ListItem>
                    </Link>
                </List>
                <Divider />
                <List>
                    <Link style={styles(theme).link}  to="/contato">
                        <ListItem
                            onClick={this.handleDrawerClose}
                            button
                        >
                            <ListItemIcon>
                                <MailIcon />
                            </ListItemIcon>
                            <ListItemText primary="Contato" />
                        </ListItem>
                    </Link>
                    <Link style={styles(theme).link}  to="/quemsomos">
                        <ListItem
                            onClick={this.handleDrawerClose}
                            button
                        >
                            <ListItemIcon>
                                <StarIcon />
                            </ListItemIcon>
                            <ListItemText primary="Quem somos" />
                        </ListItem>
                    </Link>
                    <Link style={styles(theme).link}  to="/ajuda">
                        <ListItem
                            onClick={this.handleDrawerClose}
                            button
                        >
                            <ListItemIcon>
                                <ReportIcon />
                            </ListItemIcon>
                            <ListItemText primary="Ajuda" />
                        </ListItem>
                    </Link>
                </List>
            </Drawer>
        );

        let before = null;
        let after = null;

        if (anchor === 'left') {
            before = drawer;
        } else {
            after = drawer;
        }

        return (
            <Router>
                <div className={classes.root}>
                    <div className={classes.appFrame}>
                        <AppBar
                            className={classNames(classes.appBar, {
                                [classes.appBarShift]: open,
                                [classes[`appBarShift-${anchor}`]]: open,
                            })}
                            color="secondary"
                        >
                            <Toolbar disableGutters={!open}>
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={this.handleDrawerOpen}
                                    className={classNames(classes.menuButton, open && classes.hide)}
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Typography variant="title" color="inherit" noWrap>
                                    UFRN Data Analisys
                                </Typography>
                            </Toolbar>
                        </AppBar>
                        {before}
                        <main
                            className={classNames(classes.content, classes[`content-${anchor}`], {
                                [classes.contentShift]: open,
                                [classes[`contentShift-${anchor}`]]: open,
                            })}
                        >
                            <div className={classes.drawerHeader} />
                            <Typography>
                                <Route exact path='/' component={CSSGrid}/>
                                <Route path='/medias' component={MediasView}/>
                                <Route path='/ingresso' component={IngressoView}/>
                                <Route path='/correlacao' component={CorrelacaoView}/>
                                <Route path='/contato' component={ContatoView}/>
                                <Route path='/quemsomos' component={QuemSomosView}/>
                                <Route path='/ajuda' component={AjudaView}/>
                            </Typography>
                        </main>
                        {after}
                    </div>
                </div>
            </Router>
        );
    }
}

PersistentDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(PersistentDrawer);