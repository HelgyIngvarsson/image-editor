import React, {Component} from 'react'
import './home.scss'
import LeftPanelComponent from "./leftPanel/LeftPanelComponent";
import RightPanelComponent from "./rightPanel/RightPanelComponent";
import Button from '@material-ui/core/Button';

export default class HomeComponent extends Component {

    constructor(props) {
        super(props);
        this.state={
            image:{}
        }
    }

    render() {
        const {image} = this.props;
        return (
            <div className='container-fluid'>
                <div className='content' style={{backgroundImage:`url(${require('../../assets/images/content-bg.png')})`}}>
                    <LeftPanelComponent/>
                    <div className='image-block'>
                        <img src={image} className='image' />
                        <input
                            accept="image/*"
                            className='image-input'
                            id="contained-button-file"
                            type="file"
                            onChange={(data)=>{
                                console.log(data.target.files)
                            }}
                        />
                        <label htmlFor="contained-button-file" className='upload'>
                            <Button variant="contained" component="span" className='upload-btn'>
                                Upload
                            </Button>
                        </label>
                    </div>
                    <RightPanelComponent/>
                </div>
            </div>
        );
    }

}