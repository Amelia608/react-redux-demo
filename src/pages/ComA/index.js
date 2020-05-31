import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "antd";
import { PlusOutlined ,MinusOutlined} from '@ant-design/icons';
class ComA extends Component {
    handleAdd = () => {
        console.log("ComA", this.props);
        //发送action
        this.props.addAction();
    };
    handleReduce = () => {
        console.log("ComA", this.props);
        this.props.reduceAction();
    };
    render() {
        return (
            <div className="tc p20">
                <Button type="primary" className="mr10" icon={<PlusOutlined />} onClick={this.handleAdd}/>
                <Button type="primary"  icon={<MinusOutlined />} onClick={this.handleReduce}/>
                {/* <button onClick={this.handleAdd}>+</button>
                <button onClick={this.handleReduce}>_</button> */}
            </div>
        );
    }
}
/**
 * 这个函数有一个返回值,返回的是一个对象
 * @param {type}
 * @return: Object
 */
const mapDispatchToProps = (dispatch) => {
    return {
        addAction: () => {
            //利用dispatch发送一个action
            //传递action对象我们要定一个type属性
            dispatch({
                type: "add_action",
            });
        },
        reduceAction: () => {
            dispatch({
                type: "reduce_action",
            });
        },
    };
};

//connect是接收方 null
//ComA是发送方,所以要实现connect第二个参数
export default connect(null, mapDispatchToProps)(ComA);
