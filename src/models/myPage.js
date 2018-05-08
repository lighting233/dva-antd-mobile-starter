
export default {

  namespace: 'myPage',

  state: {
    name: '我的',
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
