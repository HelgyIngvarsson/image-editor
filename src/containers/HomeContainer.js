import React,{Component} from 'react'
import HomeComponent from "../components/HomeComponent";
import {connect} from 'react-redux'

class HomeContainer extends Component{
    constructor(props){
        super(props)
    }

    uploadImage = (image) =>{

    };

    render(){
        const {image} = this.props.image;
        return(
            <HomeComponent image={image} uploadImage={this.uploadImage} />
        );
    }
}

function mapStateToProps (state) {
    return {
        image:state.image
    }
}

export default connect(mapStateToProps)(HomeContainer)