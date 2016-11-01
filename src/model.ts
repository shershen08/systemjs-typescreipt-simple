class Post {
     constructor(){

     }   
}
class User {
     constructor(){

     }   
}
export class BlogModel{
    private _currentUser: User;
    private _posts: Post[];

    get currentUser(){
        return this._currentUser;
    }

    set currentUser(value: User){
        this._currentUser = value;
    }

    get posts(){
        return this._posts;
    }

    set posts(value: Post[]){
        this._posts = value;
    }
}