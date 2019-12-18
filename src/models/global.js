export default {
  namespace: 'global',
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