export default props => ({
  $store: {
    ...props,
    dispatch: jest.fn(),
    commit: jest.fn()
  }
})
