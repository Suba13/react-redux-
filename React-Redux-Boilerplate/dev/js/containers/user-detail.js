import React, {Component} from 'react';
import {connect} from 'react-redux';
import {modify} from '../actions/index';
import {bindActionCreators} from 'redux';
/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */
class UserDetail extends Component {

   value()
        {
             const val=this.refs.newText.value;   
            console.log(val);
            return val;
           
        };
        
    render() {
 
        
        if (!this.props.user) {
            return (<div>Select a user...</div>);
        }
       
        return (
            <div>
                <img src={this.props.user.thumbnail} />
                <h2>{this.props.user.first} {this.props.user.last}</h2>
                <h3>Age: <input type="text" placeholder={this.props.user.age} onChange={this.props.modify.bind(this,this.props.user)} ></input></h3>
                <button > save</button>
                    <h3>Description: {this.props.user.description}</h3>
            </div>
        );
    }
}

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({modify: modify}, dispatch);
}


export default connect(mapStateToProps,matchDispatchToProps)(UserDetail);
