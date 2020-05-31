/*
 * @Author: your name
 * @Date: 2020-05-27 22:20:17
 * @LastEditTime: 2020-05-30 12:38:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /redux-demo/src/reducer/index.js
 */

/*
 *这是一个reducer函数,专门用来处理发送过来的action
 */

const initSate = {
    count: 0,
};
//reducer要接收一个action 然后进行逻辑处理
//判断发送过来的action是不是我们需要的
//如果是我们需要的 ,就应该return一个新的state

exports.reducer = (state = initSate, action) => {
    console.log("reducer", action);
    switch (action.type) {
        case "add_action":
            return {
                count: state.count + 1,
            };
        case "reduce_action":
            let count = state.count > 0 ? state.count - 1 : 0;
            return { count };
        default:
            return state;
    }
};
