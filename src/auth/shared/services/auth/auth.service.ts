import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable }  from '@angular/core';
import { Store } from 'store';

export interface User{
    uid: string,
    email: string,
    authenticated: boolean
}

@Injectable()
export class AuthService{
    constructor(private af: AngularFireAuth){}

    createUser(email: string, password: string){
        return this.af.auth.createUserWithEmailAndPassword(email, password);
    }

    loginUser(email: string, password: string){
        return this.af.auth.signInWithEmailAndPassword(email, password);
    }

    logoutUser(){
        return this.af.auth.signOut();
    }
}