let Rerender = (state) => {
    console.log('sdf')
}

let ProfileStore = {
    _posts: [
        {id: 1, message: "sdfsdfsefsef", likesCount: 12},
        {id: 2, message: "sdfsdfsefsef", likesCount: 12},
        {id: 3, message: "sdfsdfsefsef", likesCount: 12}
    ],
    _Dialogs: [
        {id: 1, name: "Erdem"},
        {id: 2, name: "Timur"},
        {id: 3, name: "Dashi"}
    ],
    _Messages: [
        {id: 1, message: "sdfsdf"},
        {id: 2, message: "sdfs"},
        {id: 3, message: "sdfsdfwqwe31"}
    ],
    _PostText: "Введите текст",
    addPost() {
        let newPost = {
            id: 4,
            message: this.PostText,
            likesCount: 0
        };
        this.posts.push(newPost)
        this.PostText = '';
        Rerender()
    },
    updateNewPostText(newText) {
        this.PostText = newText;
        Rerender()
      },

    getPosts(){
        return this._posts
    },
    getDialogs(){
        return this._Dialogs
    },
    getMessages(){
        return this._Messages
    },
    subscribe(observer) {
    Rerender = observer;// observer паттерн
    },
    Rerender () {
        console.log('sdf')
    }

}
  let state = {
        ProfilePage: {
            posts: [
                {id: 1, message: "sdfsdfsefsef", likesCount: 12},
                {id: 2, message: "sdfsdfsefsef", likesCount: 12},
                {id: 3, message: "sdfsdfsefsef", likesCount: 12}
            ],
            PostText: "Fndsnfdsofndos"
        },
        MessagesPage: {
            Dialogs: [
                {id: 1, name: "Erdem"},
                {id: 2, name: "Timur"},
                {id: 3, name: "Dashi"}
            ],
            Messages: [
                {id: 1, message: "sdfsdf"},
                {id: 2, message: "sdfs"},
                {id: 3, message: "sdfsdfwqwe31"}
            ]
        }
  }

  export const addPost = () => {
    let newPost = {
        id: 4,
        message: state.ProfilePage.PostText,
        likesCount: 0
    };
    state.ProfilePage.posts.push(newPost)
    state.ProfilePage.PostText = '';
    Rerender(state)
  }

  export const updateNewPostText = (newText) => {
    state.ProfilePage.PostText = newText;
    Rerender(state)
  }

  export const subscribe = (observer) => {
     Rerender = observer;// observer паттерн
  }

  export default state;