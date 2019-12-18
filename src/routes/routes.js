import { Switch, Route,Redirect, Router,routerRedu,withRouter} from 'dva/router';
import React from 'react';
import dynamic from 'dva/dynamic';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { connect } from 'dva';
import page404 from '../pages/404.jsx';
import '../common/css/animate.css';
export const dynamicWrapper = (app,models,component) => {
     console.log(models.map((model) => model));
  return dynamic({
    app,
    models:models.map((model) => import(`../pages/models/${model}`)),
    component: () => import(`../pages/${component}`)
  })
}


const ANIMATION_MAP = {
  PUSH: 'forward',
  POP: 'back',
  REPLACE: 'forward'
}
const routes = [
  { path: '/index', name: '首页',model: ['pagemenu'],Component:'App',exact: true },
]


class RouteConfig extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'menu/getMenuData'
    })
  }

  render() {
   
    const { app, menu: { routeData},location: { pathname } } = this.props;
    // console.log(this.props,11);
    return (
      routes.concat(routeData).map(({path,Component,exact,model,children}) => {
        // if (children) {
        //   console.log(children,"children  ");
        // }
        return   <Route key={path} path={path} exact={exact} component={dynamicWrapper(app,model,Component)} />;
      })
    )
  }
}
const CreateRoute =connect(({menu}) => ({menu}))(RouteConfig);

export default (routerConfig) => {
  const { history, app} = routerConfig;
  console.log(routerConfig);
  return <Router history={history} >
    <Switch>
      <Route path="/" exact render={() => (<Redirect to="/index" />)} />
      <Route path="/aa" exact component={dynamicWrapper(app,['pagemenu'],'home')} />
      <Switch>
          <Route render={(props) => <CreateRoute {...props}/>}/>
      </Switch>
      <Route path='*' component={page404} /> 
    </Switch>
  </Router>
};



