import React, {Component} from 'reat';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../components/Header';
import MainSetion from '../components/MainSetion';
import * as TodoActions from '../actions/TodoActions';

class TodoApp extends Component{
    render(){
        const {todos, actions} = this.props;
        return(
            <div>
                <Header addTodo={actions.addTodo} />
                <MainSetion todos={todos} action={actions} />
            </div>
        );
    }
}