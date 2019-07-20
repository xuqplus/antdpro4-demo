export default {
  namespace: 'aaa.a02',
  state: {
    username: '这次要请求server了',
    message: '还没有请求',
  },
  reducers: {
    aFunction: state => {
      let message = state.message;
      return {
        username: state.username,
        message: message,
      };
    },
  },
};
