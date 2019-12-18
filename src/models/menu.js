export default {
  namespace: 'menu',
  state: {
    menuData: [],
    routeData: []
  },
  effects: {
    *getMenuData(_,{call,put}) {
      yield put({
        type: 'saveRouteData',
        routeData: [
          { path: '/user', name: 'user',model: ['pagemenu'], Component: 'user',exact: true },
          { path: '/home', name: 'home',model: ['pagemenu'], Component: 'home',exact: true },
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