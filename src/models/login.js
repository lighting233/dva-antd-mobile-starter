
export default {

  namespace: 'login',

  state: {
    name: '登录',
  },

  subscriptions: {
    getLoginDate({dispatch, history}) {
      return history.listen(({pathname, query}) => {
        if (pathname.startsWith('/')) {

        }
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
