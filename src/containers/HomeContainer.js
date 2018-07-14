import React,{Component} from 'react'
import HomeComponent from "../components/HomeComponent";
import {connect} from 'react-redux'

class HomeContainer extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const {image} = this.props.image;
        return(
            <HomeComponent image={image} />
        );
    }
}

function mapStateToProps (state) {
    return {
        image:state.image
    }
}

export default connect(mapStateToProps)(HomeContainer)