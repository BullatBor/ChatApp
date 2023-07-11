import profileReducer, { addPost } from "./profileReducer";



test('length of post should be incremented', () => {
    // 1. test data
    let state = {
        posts: [
            {id: 1, message: "sdfsdfsefsef", likesCount: 12},
            {id: 2, message: "sdfsdfsefsef", likesCount: 12},
            {id: 3, message: "sdfsdfsefsef", likesCount: 12}
        ]
    }
    let action = addPost("TEST")
    // 2. action
    let newState = profileReducer(state, action);

    // 3. exceptation
    expect(newState.posts.length).toBe(5)
  }); 