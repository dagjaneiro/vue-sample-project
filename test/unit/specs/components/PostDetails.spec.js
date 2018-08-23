import Vuex from 'vuex'
import PostDetails from '@/components/PostDetails'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import sinon from 'sinon'

describe('PostDetails.vue', () => {
  let store
  let localVue
  let wrapper

  beforeEach(() => {
    localVue = createLocalVue()
    localVue.use(Vuex)
  })

  describe('when the component is created', () => {
    beforeEach(() => {
      store = new Vuex.Store({
        getters: {
          getPostById: state => id => ({}),
          getCommentsforPostId: () => []
        }
      })
      store.dispatch = sinon.spy()
    })

    describe('when the blog post is present in the store', () => {
      beforeEach(() => {
        store = new Vuex.Store({
          getters: {
            getPostById: state => id => ({
              id: '1',
              title: 'post title',
              body: 'post body'
            })
          }
        })
        store.dispatch = sinon.spy()
      })

      it('does not dispatch the "getPosts" action', () => {
        wrapper = shallowMount(PostDetails, {
          propsData: { id: '1' },
          store,
          localVue
        })
        expect(store.dispatch).not.to.have.been.calledWith('getPostById', '1')
      })

      it('renders the blog post title', () => {
        wrapper = shallowMount(PostDetails, {
          propsData: { id: '1' },
          store,
          localVue
        })
        expect(wrapper.text()).to.contain('post title')
      })

      it('renders the blog post body', () => {
        wrapper = shallowMount(PostDetails, {
          propsData: { id: '1' },
          store,
          localVue
        })
        expect(wrapper.text()).to.contain('post body')
      })
    })

    describe('when the blog post is not present in the store', () => {
      beforeEach(() => {
        store = new Vuex.Store({
          getters: {
            getPostById: state => id => ({
              id: '2',
              title: 'other title',
              body: 'other body'
            })
          }
        })
        store.dispatch = sinon.spy()
      })

      it('does dispatches the "getPosts" action', () => {
        wrapper = shallowMount(PostDetails, {
          propsData: { id: '1' },
          store,
          localVue
        })
        expect(store.dispatch).not.to.have.been.calledWith('getPostById', '1')
      })

      it('does not render the blog post title', () => {
        wrapper = shallowMount(PostDetails, {
          propsData: { id: '1' },
          store,
          localVue
        })
        expect(wrapper.text()).not.to.contain('post title')
      })

      it('renders the blog post body', () => {
        wrapper = shallowMount(PostDetails, {
          propsData: { id: '1' },
          store,
          localVue
        })
        expect(wrapper.text()).not.to.contain('post body')
      })
    })
  })
})
