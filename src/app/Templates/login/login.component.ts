import { Component, OnInit } from '@angular/core';
import { MediscreensService } from "src/app/services/mediscreens.service";
import { ToastrManager } from 'ng6-toastr-notifications';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {

  donnee: any;
  login: any;
  password: any;
  donneenew: any;
  search: any;
  constructor(
    public toastr: ToastrManager,
    private router: Router,
  ) {
  }

  ngOnInit() {
    //this.toastr.successToastr('You are awesome!', 'Success!', { toastLife: 1000 })
  }

  connexion() {
    this.router.navigate(['dashboard/accueil']);

    // if (this.login != "" && this.password != "") {
    //   this.vtsmsProvider.login(this.login, this.password)
    //     .subscribe(data => {
    //       this.donnee = data;
    //       //this.donneenew = data.json();
    //       if (this.donnee["_body"] != "") {
    //         this.global.UserInfo = data.json();
    //         localStorage.setItem('iduser', this.global.UserInfo.iduser);
    //         localStorage.setItem('nom', this.global.UserInfo.nom);
    //         localStorage.setItem('prenoms', this.global.UserInfo.prenoms);
    //         localStorage.setItem('telephone', this.global.UserInfo.telephone);
    //         localStorage.setItem('email', this.global.UserInfo.email);
    //         localStorage.setItem('login', this.global.UserInfo.login);

    //         if (this.global.UserInfo.statut==false){
    //           this.router.navigate(['dashboard/accueil']);
    //         }else{
    //           this.router.navigate(['dashboardadmin/reportingvente']);

    //         }

    //       } else {
    //         this.vtsmsProvider.alert('Login ou mot de passe incorrect !', 'error');
    //       }

    //     },
    //     error => {
    //       console.log(error);
    //     });
    // } else {
    //   this.vtsmsProvider.alert('Veuillez saisir le login et le mot de passe !', 'error');
    // }

  }


 
}
