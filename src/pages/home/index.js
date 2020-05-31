import React, { Component } from "react";
import store from "../../store";
import { sendAction } from "../../action";
export default class Home extends Component {
    handleClick = () => {
        //发送一个action
        const action = sendAction();
        store.dispatch(action)
    };
    componentDidMount(){
      store.subscribe(()=>{
        console.log('sendstore',store.getState())
      })
    }
    render() {
        return <button onClick={this.handleClick}>点我发送</button>;
    }
}
