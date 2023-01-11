import React from 'react';
import './App.css';
import Main from './containers/main'
import SignUp from './containers/sign-up'
import ProductDetails from './containers/product-page'
import { BrowserRouter as Router, Route,Link } from "react-router-dom";
import  BestSellers from './containers/bestsellers';
import  Others from './containers/bestsellers/others';
import AboutUs from './containers/aboutpage'
import {Provider} from 'react-redux';
import {store} from './store'
import {USER_LOGIN} from './store/actions/types'
import Sass from '../src/sass-test'
import Counter from "./components/counter"
import ProductAddForm from "./components/product-add-form"
import ProductList from './components/product-list';
if(localStorage.getItem('access_token')) {
  console.log("TUT!!!!")
  store.dispatch({
    type: USER_LOGIN,
    payload: localStorage.getItem('access_token')
  })
}

function App() {
  
let id = null
  return (
    <Provider store={store}>
     <div className="App">
      <Router>
        <Route path="/" exact component={Counter}/>
        <Route path="/addform" exact component={ProductAddForm}/>
        <Route path="/sass" exact component={Sass}/>
        <Route path="/bestsellers"  component={BestSellers}/>
        <Route path="/signup"  component={SignUp}/>
        <Route path="/aboutus"  component={AboutUs}/>
        <Route path="/product/"  component={ProductDetails}/>
        <Route path="/categories/"  component={Others}/>
        <Route path="/search"  component={BestSellers}/>
      </Router>
     </div>
    </Provider>
  );
}

export default App;
// import { Layout, Menu } from 'antd';
// import {
//   MenuUnfoldOutlined,
//   MenuFoldOutlined,
//   UserOutlined,
//   VideoCameraOutlined,
//   UploadOutlined,
// } from '@ant-design/icons';

// const { Header, Sider, Content } = Layout;

// class App extends React.Component {
//   state = {
//     collapsed: false,
//   };

//   toggle = () => {
//     this.setState({
//       collapsed: !this.state.collapsed,
//     });
//   };

//   render() {
//     return (
//       <Router>
//       <Layout>
//         <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
//           <div className="logo" />
//           <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
//             <Menu.Item key="1" icon={<UserOutlined />}>
//               <Link to={'/admin/course'}>
//               Sign
//               </Link>
//             </Menu.Item>
//             <Menu.Item key="2" icon={<VideoCameraOutlined />}>
//             <Link to={'/admin/users'}>
//               About
//               </Link>
//             </Menu.Item>
//             <Menu.Item key="3" icon={<UploadOutlined />}>
//               nav 3
//             </Menu.Item>
//           </Menu>
//         </Sider>
//         <Layout className="site-layout">
//           <Header className="site-layout-background" style={{ padding: 0 }}>
//             {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
//               className: 'trigger',
//               onClick: this.toggle,
//             })}
//           </Header>
//           <Content
//             className="site-layout-background"
//             style={{
//               margin: '24px 16px',
//               padding: 24,
//               minHeight: 280,
//             }}
//           >
//               <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
//                   <Route exact path={'/admin/course'} component={SignUp}/>
//                   <Route exact path={'/admin/lecture'} component={AboutUs}/>
//               </div>
//           </Content>
//         </Layout>
//       </Layout>
//       </Router>
//     );
//   }
// }

// export default App;