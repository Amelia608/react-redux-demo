<!--
 * @Author: your name
 * @Date: 2020-05-27 21:56:14
 * @LastEditTime: 2020-05-30 12:08:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /redux-demo/README.md
--> 
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
步骤:
安装相关依赖
yarn add redux
yarn add react-redux

构建store和reducer
1、创建reducer/index.js文件,构建reducer来响应actions
2、创建store/index.js文件,通过createStore方法,把我们的reducer传入进来
3、在app.js导入store

搭建页面结构
1、创建一个组件,名字叫ComA,里面放一个button按钮
2、创建另外一个组件,名字叫ComB,里面放一个div,用来显示数字
3、在app.js中导入两个组件



Provider组件实现
1、导入Provider组件,在react-redux中进行导入
2、利用Provider组件将我们整个结构进行包裹
3、给Provider组件设置store的属性,而这个值就是我们通过createStore构建出来的store实例对象


ComA 发送action
1、导入connect
2、利用connect对组件进行加强
   connect(要接收数据的函数,要发送action的函数)(放入要加强的组件)
3、我们要实现connect、第二个参数
4、构建一个函数mapDispatchToProps(dispatch)
  dispatch:就是用来发送一个action的
5、在这个函数里面就可以返回一个对象
  key 是方法名
  value :调用dispatch去发送action
6、在组件内部就可以通过this.props来拿到这个方法