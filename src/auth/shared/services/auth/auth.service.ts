import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable }  from '@angular/core';
import { Store } from 'store';
import 'rxjs/add/operator/do';

export interface User{
    uid: string,
    email: string,
    authenticated: boolean
}

@Injectable()
export class AuthService{
    constructor(
        private af: AngularFireAuth,
        private store: Store
        ){}

    auth$ = this.af.authState
        .do(next => {
            if(!next){
                this.store.set('user', null);
                return;
            }
            const user: User = {
                uid: next.uid,
                email: next.email,
                authenticated: true
            }
            this.store.set('user', user);
        });

    createUser(email: string, password: string){
        return this.af.auth.createUserWithEmailAndPassword(email, password);
    }

    loginUser(email: string, password: string){
        return this.af.auth.signInWithEmailAndPassword(email, password);
    }

    get authState(){
        return this.af.authState;
    }

    logoutUser(){
        return this.af.auth.signOut();
    }

    get user(){
        return this.af.auth.currentUser;
    }
    
}