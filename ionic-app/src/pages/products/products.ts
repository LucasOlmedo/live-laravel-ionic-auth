import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import {LoginPage} from '../../pages/login/login'

/**
 * Generated class for the ProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-products',
    templateUrl: 'products.html',
})
export class ProductsPage {

    products = [];

    constructor(public navCtrl: NavController, public navParams: NavParams,
                private http: HttpClient) {
    }

    ionViewCanEnter() {
        const isAuth = window.localStorage.getItem('token') != null;
        if (!isAuth) {
            setTimeout(() => {
                this.navCtrl.setRoot(LoginPage)
            });
        }
        return isAuth;
    }

    ionViewDidLoad() {
        /*const token = window.localStorage.getItem('token');
        this.http.get<any>('http://localhost:8000/api/products', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .subscribe(data => this.products = data.data)*/
        this.http
            .get<any>('http://localhost:8000/api/products')
            .subscribe(data => this.products = data.data)
    }

}
