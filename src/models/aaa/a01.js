export default {
  namespace: 'aaa.a01',
  state: {
    username: '鲨鱼辣椒',
    xiaodi: '蜻蜓队长',
    clickCount: 0,
  },
  reducers: {
    clickCountPlus: (state) => {
      let clickCount = state.clickCount += 1
      return {
        username: state.username,
        // xiaodi: state.xiaodi, // 注释掉此项变成null
        clickCount: clickCount,
      }
    }
  }
}
