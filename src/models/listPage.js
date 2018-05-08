
export default {

  namespace: 'listPage',

  state: {
    name: '列表',
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
