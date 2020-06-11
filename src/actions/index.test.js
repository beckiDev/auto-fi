import configureMockStore from 'redux-mock-store' 

import fetchMock from "jest-fetch-mock";

import actions from '../actions'

const mockStore = configureMockStore();
const store = mockStore();

describe('fetchPosts, fetchComments from actions/index.js ', () => {
    beforeEach(() => {
        store.clearActions();
    })

    it('Should dispatch fetchPosts action and payload ', done =>{
        store.dispatch(fetchPosts());
      
        expect(store.getActions()).toEqual({
                type: FETCH_POSTS,
                posts: data
        });
        
    })
    it('Should correctly retrieve comments ', () =>{
        
      })
})


