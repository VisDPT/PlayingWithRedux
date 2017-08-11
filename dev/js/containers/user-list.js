import React, {Component} from 'react';
import {bindActionCreators} from 'redux'; /**/
import {connect} from 'react-redux'; /**/
import {selectUser} from '../actions/index'; /*hooking it to action so when you click, it displays deets; has to be hooked to smart component*/



/*PASSING USERS INTO USER LIST*/
class Userlist extends Component{

    createListItems(){
        return this.props.users.map((user) =>{
            return(
                /*return list items!*/
                <li key={user.id} 
                onClick={() => this.props.selectUser(user)}>
                     {user.first} {user.last}
                </li>
                
            );
        });   /*this.props.users is ths user reducer list; .map is like a for each*/
    }

    render() {
        return(
            <ul>
                {this.createListItems()}    
            </ul>
        );
        }
}

//Takes the main data from store and passes it into the componenet as a property
//take users and pass it into user list
/*====== CONTAINER =========*/
function mapStateToProps(state){
    return{
        users:state.users /* from /reducers/index.js*/
    }
}
/*======CONTAINER ENDS======*/

/*====== PASSING action function in as a prop and hook it to use redux; match dispatch calls a function========*/
function matchDispatchToProps(dispatch){
    return bindActionCreators({selectUser:selectUser}, dispatch)
}


export default connect(mapStateToProps, matchDispatchToProps)(Userlist); /*adding the map state to props makes the store data exportable*/
/* export gets added to app.js since its like a component*/