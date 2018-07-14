import React,{Component} from 'react'
import './leftPanel.scss'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

export default class LeftPanelComponent extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='left-bar'>
                <List component="nav">
                    <ListItem button>
                        <ListItemText primary="Inbox" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Drafts" />
                    </ListItem>
                </List>
                <Divider />
                <List component="nav">
                    <ListItem button>
                        <ListItemText primary="Trash" />
                    </ListItem>
                    <ListItem button component="a" href="#simple-list">
                        <ListItemText primary="Spam" />
                    </ListItem>
                </List>
            </div>
        );
    }
}