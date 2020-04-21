import { Component, OnInit } from '@angular/core';
import { ApiService, ENDPOINT } from 'src/app/core/service/api/api.service';
import { AuthService } from 'src/app/core/service/auth/auth.service';
import { LocalerService } from 'src/app/core/service/localer/localer.service';
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
	constructor(
		private apiService: ApiService,
		private localer: LocalerService,
		private userService: UserService
	) { }
	email = this.localer.getLocalStorage('TOKEN').email
	curentFa: any

	checkFa(array, category) {

		this.apiService.get(ENDPOINT.users, '?email=' + this.email).subscribe(e => {
			this.curentFa = e[0].favorite
			for (let i = 0; i < array.length; i++) {


				for (let j = 0; j < this.curentFa.length; j++) {
					if (array[i].id === this.curentFa[j].id) {
						let justFa = { state: true }
						array[i] = Object.assign({}, array[i], justFa)
						if (category = 1) {
							this.tkd = array
						} else if (category = 2) {
							this.tkkd = array
						} else {
							this.tpcn = array
						}
					}
				}
			}
		});
	}




	ngOnChanges() {

	}
	ngOnInit(): void {

		this.apiService.get(ENDPOINT.products, '/?category=1&_limit=4').subscribe(e => {
			this.tkd = e;
			this.checkFa(e, 1)
		});
		this.apiService.get(ENDPOINT.products, '/?category=2&_limit=4').subscribe(e => {
			this.tkkd = e
			this.checkFa(e, 2)
		});
		this.apiService.get(ENDPOINT.products, '/?category=3&_limit=4').subscribe(e => {
			this.tpcn = e
			this.checkFa(e, 3)
		});

	}
}

