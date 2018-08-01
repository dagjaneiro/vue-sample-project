import PostFeed from '@/components/PostFeed'
import { shallow, mount } from 'vue-test-utils'
import { createRenderer } from 'vue-server-renderer'
import mockStore from '../utils/mockStore'

describe('PostFeed.vue', () => {
  let store
  let renderer

  beforeEach(() => {
    renderer = createRenderer()
  })

  describe('when there are not posts', () => {
    beforeEach(() => {
      store = mockStore({ getters: { posts: [] } })
    })

    it('renders the component correctly', () => {
      const wrapper = shallow(PostFeed, { mocks: { ...store } })

      renderer.renderToString(wrapper.vm).then(str => {
        expect(str).toMatchSnapshot()
      })
    })
  })

  describe('when there are posts', () => {
    beforeEach(() => {
      store = mockStore({
        getters: {
          posts: [
            {
              userId: 1,
              id: 1,
              title:
                'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
              body:
                'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
            },
            {
              userId: 1,
              id: 2,
              title: 'qui est esse',
              body:
                'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'
            },
            {
              userId: 1,
              id: 3,
              title:
                'ea molestias quasi exercitationem repellat qui ipsa sit aut',
              body:
                'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut'
            }
          ]
        }
      })
    })

    it('renders the component correctly', () => {
      const wrapper = shallow(PostFeed, { mocks: { ...store } })

      renderer.renderToString(wrapper.vm).then(str => {
        expect(str).toMatchSnapshot()
      })
    })
  })

  describe('when the component is created', () => {
    beforeEach(() => {
      store = mockStore({ getters: { posts: [] } })
    })

    it('dispatches a "getPosts" action', () => {
      mount(PostFeed, { mocks: { ...store } })
      expect(store.$store.dispatch).toHaveBeenCalledWith('getPosts')
    })
  })
})