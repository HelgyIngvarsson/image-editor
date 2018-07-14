import React,{Component} from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import './header.scss'

export default class HeaderComponent extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='header'>
                <AppBar position="fixed">
                    <Toolbar className='toolbar'>
                        <Typography variant="title" color="inherit" className='flex'>
                            IMAGE EDITOR by Olle
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}