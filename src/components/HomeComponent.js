import React, {Component} from 'react'

export default class HomeComponent extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const {image} = this.props;
        return (
            <div className='container'>
                <img src={image}/>
            </div>
        );
    }

}