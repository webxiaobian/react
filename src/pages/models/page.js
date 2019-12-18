export default {
  namespace: 'page',
  state: {

  },
  effects: {

  },
  reducers: {
    
  },
  subscriptions: {
    setUp({ dispatch, history }, done){
      history.listen((a) => {
        console.log(a)
      })
    }
  }
}