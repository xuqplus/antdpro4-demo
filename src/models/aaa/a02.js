import { queryA02 } from '@/services/a02';

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
  effects: {
    *a02(_, { call, put }) {
      const response = yield call(queryA02);
      yield put({
        type: 'aFunction',
        payload: response,
      });
    },
  },
};
