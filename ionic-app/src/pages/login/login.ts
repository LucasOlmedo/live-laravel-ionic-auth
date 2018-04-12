import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import {ProductsPage} from '../../pages/products/products';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {

    user = {
        email: '',
        password: ''
    };

    constructor(public navCtrl: NavController,
                public navParams: NavParams, private http:HttpClient) {
    }

    ionViewDidLoad() {
        const isAuth = window.localStorage.getItem('token') != null;
        if(isAuth){
            this.navCtrl.setRoot(ProductsPage);
        }
    }

    login(){
        this.http.post<any>('http://localhost:8000/api/login', this.user)
            .subscribe(data => {
                window.localStorage.setItem('token',data.token);
                this.navCtrl.setRoot(ProductsPage)
            })
        //webview - navegador mais enxuto
    }

}
