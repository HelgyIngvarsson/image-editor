import React, {Component} from 'react'
import './home.scss'
import LeftPanelComponent from "./leftPanel/LeftPanelComponent";
import RightPanelComponent from "./rightPanel/RightPanelComponent";

export default class HomeComponent extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const {image} = this.props;
        return (
            <div className='container-fluid'>
                <div className='content'>
                    <LeftPanelComponent/>
                    <div className='image-block'>
                        <img src={image} className='image' />
                    </div>
                    <RightPanelComponent/>
                </div>
            </div>
        );
    }

}