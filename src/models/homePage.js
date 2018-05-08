
export default {

  namespace: 'homePage',

  state: {
    name: '首页',
  },

  subscriptions: {
    getLoginDate({dispatch, history}) {
      return history.listen(({pathname, query}) => {

      });
    }
  },

  effects: {

  },

  reducers: {
    save(state, {payload}) {
      return {...state, ...payload};
    },
    saveSourceToState(state, {payload}) {
      return {
        ...state,
        ...payload
      };
    }
  }

};
