import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";


let ProfileStore = {
    state: {
        ProfilePage: {
            posts: [
                {id: 1, message: "sdfsdfsefsef", likesCount: 12},
                {id: 2, message: "sdfsdfsefsef", likesCount: 12},
                {id: 3, message: "sdfsdfsefsef", likesCount: 12}
            ],
            _PostText: "Введите текст",
        },
        DialogsPage: {
            Dialogs: [
                {id: 1, name: "Erdem"},
                {id: 2, name: "Timur"},
                {id: 3, name: "Dashi"}
            ],
            Messages: [
                {id: 1, message: "sdfsdf"},
                {id: 2, message: "sdfs"},
                {id: 3, message: "sdfsdfwqwe31"},
                {id: 4, message: "TEST"}
            ],
            _newMessageText: '',
        }

    },

    
    dispatch(action) {//action это объект {type: 'описание действия'}
        this.state.ProfilePage = profileReducer(this.state.ProfilePage, action);
        this.state.DialogsPage = dialogsReducer(this.state.DialogsPage, action);
        this.Rerender()
    },

    get Posts(){
        return this.state.ProfilePage.posts;
    },
    get Dialogs(){
        return this.state.DialogsPage.Dialogs;
    },
    get Messages(){
        return this.state.DialogsPage.Messages
    },
    get PostText(){
        return this.state.ProfilePage._PostText
    },
    get MessageText(){
        return this.state.DialogsPage._newMessageText;
    },
    subscribe(observer) {
    this.Rerender = observer;// observer паттерн
    },
    Rerender () {
        console.log('sdf')
    }

}


  export default ProfileStore;