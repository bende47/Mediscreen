import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  login: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.login = localStorage.getItem('login');

  }

  deconnexion() {

    localStorage.removeItem('iduser');
    localStorage.removeItem('nom');
    localStorage.removeItem('prenoms');
    localStorage.removeItem('telephone');
    localStorage.removeItem('email');
    localStorage.removeItem('login');
    localStorage.removeItem('id');
    this.router.navigate(['./login']);

  }
}
