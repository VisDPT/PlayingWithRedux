import React, {Component} from 'react';
import {connect} from 'react-redux'; 


class UserDetail extends Component{
    render(){
        if (!this.props.user){
            return(<h2> SSelect a user </h2>);
        }
        return(
            <div>
                <img src = {this.props.user.thumbnail}/>
                <h2>{this.props.user.first}{this.props.user.last}</h2>
                <h2>{this.props.user.age}</h2>
                <h2>{this.props.user.description}</h2>
            </div>
        );
    }
}

/*====== CONTAINER =========*/
function mapStateToProps(state){
    return{
        user:state.activeUser /* TO DISPLAY INFO FOR SELECTED USER*/
    }
}
/*======CONTAINER ENDS======*/

export default connect (mapStateToProps)(UserDetail);