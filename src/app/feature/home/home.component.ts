import { Component, OnInit } from '@angular/core';
import { ApiService, ENDPOINT } from 'src/app/core/service/api/api.service';
import { AuthService } from 'src/app/core/service/auth/auth.service';
import { LocalerService } from 'src/app/core/service/localer/localer.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/user/user.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	tkd: any;
	tkkd: any;
	tpcn: any;
	isLogin: boolean;
	constructor(
		private apiService: ApiService,
		private localer: LocalerService,
		private auth: AuthService,
		private route: Router,
		private userService: UserService
	) { }

	idUser = this.localer.getLocalStorage('TOKEN') ? this.localer.getLocalStorage('TOKEN').currentUser.id : false;

	curentFa: any;

	checkFa(array, category) {

		this.apiService.get(ENDPOINT.users, '/' + this.idUser).subscribe(e => {
			this.curentFa = JSON.parse(e.favorite);
			for (let i = 0; i < array.length; i++) {
				for (let j = 0; j < this.curentFa.length; j++) {
					if (array[i].id === this.curentFa[j].id) {
						array[i].state = true;
						if (category === 1) {
							this.tkd = array;
						} else if (category === 2) {
							this.tkkd = array;
						} else {
							this.tpcn = array;
						}
					}
				}
			}
		});
	}

	getDetail(product) {
		this.localer.saveLocalStorage({ currentProduct: product }, 'DETAIL');
		this.userService.changeProduct(product);
		this.route.navigateByUrl('/detail/' + product.id);
	}

	ngOnInit(): void {
		this.auth.currentStatus.subscribe(e => this.isLogin = e);
		this.apiService.get(ENDPOINT.category, '/1/products?page=1&limit=4').subscribe(e => {
			this.tkd = e;
			if (this.idUser) {
				this.checkFa(e, 1);
			}
		});
		this.apiService.get(ENDPOINT.category, '/2/products?page=1&limit=4').subscribe(e => {
			this.tkkd = e;
			if (this.idUser) {
				this.checkFa(e, 2);
			}
		});
		this.apiService.get(ENDPOINT.category, '/3/products?page=1&limit=4').subscribe(e => {
			this.tpcn = e;
			if (this.idUser) {
				this.checkFa(e, 3);
			}
		});

	}
}

