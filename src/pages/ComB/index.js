/*
 * @Author: your name
 * @Date: 2020-05-30 11:25:46
 * @LastEditTime: 2020-05-30 15:22:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /redux-demo/src/pages/ComB/index.js
 */ 
import React from 'react'
import {connect} from 'react-redux'
class ComB extends React.Component{
  render (){
    return (
      <div className="tc p20">
        {this.props.count}
      </div>
    )
  }
}
/**
 * @description: 
 * @param 接收两个参数(state,action)
 * @return: state
 */
const mapStateToProps=(state)=>{
  console.log(state)
  return state
}
//ComB是接收方,要实现connect的第一个参数
export default connect(mapStateToProps)(ComB)