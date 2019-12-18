export default {
  namespace: 'pagemenu',
  state: {
    menuData: [],
    routeData: []
  },
  effects: {
    *getMenuData(_,{call,put}) {
      yield put({
        type: 'saveRouteData',
        routeData: [
          { path: '/user', name: 'user',model: ['global'], Component: 'user',exact: true },
          { path: '/home', name: 'home',model: ['global'], Component: 'home',exact: true },
        ]
      })
    }
  },
  reducers: {
    saveRouteData(state,{ routeData }) {
      return {
        ...state,
        routeData
      }
    }
  }
}