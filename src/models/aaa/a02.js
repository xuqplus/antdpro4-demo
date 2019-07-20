import { queryA02 } from '@/services/a02';

export default {
  namespace: 'aaa.a02',
  state: {
    username: '这次要请求server了',
    message: '还没有请求的点位符',
  },
  reducers: {
    aFunction: (state, resp) => {
      if (resp.payload.username) {
        return {
          username: resp.payload.username,
          message: resp.payload.message,
        };
      }
      return state;
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
