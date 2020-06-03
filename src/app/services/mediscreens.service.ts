import { Injectable } from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/do'
import { Patient } from '../model/patient';
import { History } from '../model/history';

@Injectable({
  providedIn: 'root'
})
export class MediscreensService {

  baseUrl: string = "http://localhost:8084/";

  constructor(
    public http: HttpClient, public toastr: ToastrManager
  ) { 
  }


  alert(text, def) {
    if (def == "sucess") {
      this.toastr.successToastr(text, '', { toastLife: 10000 });
    } else {
      this.toastr.errorToastr(text, '', { toastLife: 10000 });
    }
  }

  listPatients() {
    var url = this.baseUrl + "patient/all";
    var response = this.http.get(url).do(res => console.log(response));
    return response;
  }

  addPatient(patient:Patient) {
    var url = this.baseUrl + "patient/add";
    var response = this.http.post(url, patient).do(res => console.log(response));
    return response;
  }
  
  editPatient(patient:Patient,id:any) {
    var url = this.baseUrl + "patient/update/"+ id;
    var response = this.http.put(url, patient).do(res => console.log(response));
    return response;
  }

  getPatient(id:any) {
    var url = this.baseUrl + "patient/find/"+id;
    var response = this.http.get(url).do(res => console.log(response));
    return response;
  }

  listHistoriquePatient(id:any) {
    var url = this.baseUrl + "patHistory/allHistoryPatient/"+id;
    var response = this.http.get(url).do(res => console.log(response));
    return response;
  }

  addHistory(history:History){
    var url = this.baseUrl + "patHistory/add";
    var response = this.http.post(url, history).do(res => console.log(response));
    return response;
  }

  editHistory(history:History,id:any) {
    var url = this.baseUrl + "patHistory/update/"+ id;
    var response = this.http.put(url, history).do(res => console.log(response));
    return response;
  }

  getHistory(id:any) {
    var url = this.baseUrl + "patHistory/find/"+id;
    var response = this.http.get(url).do(res => console.log(response));
    return response;
  }

  listHistorique() {
    var url = this.baseUrl + "patHistory/all";
    var response = this.http.get(url).do(res => console.log(response));
    return response;
  }

  addRapport(patient: Patient) {
    var url = this.baseUrl + "rapport/stat";
    var response = this.http.post(url, patient).do(res => console.log(response));
    return response;
  }

}
