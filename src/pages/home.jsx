import React from 'react';
import { NavLink } from 'dva/router';
export default class Home extends React.Component {
  render () {
    return <div className={'aaa'}>
      <NavLink to='/user'>user</NavLink>
    </div>
  }
}