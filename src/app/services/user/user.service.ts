import { IUser } from './../../interfaces/user';
import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders ,HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/catch';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class UserService {

  private url = "https://jsonplaceholder.typicode.com/users";
  private  postUrl = "https://jsonplaceholder.typicode.com/posts";
  private users :IUser[] =[];
  public value :number = 0;
  public opr :String ="none";
  
  public valChanged: BehaviorSubject<number> = new BehaviorSubject<number>(this.value);
  public oprChanged: BehaviorSubject<String> = new BehaviorSubject<String>(this.opr);

  constructor(private http : HttpClient) { 
  }

  getValue():number{
    return this.value;
  }

  setValue(value):void{
    this.value = value;
    this.valChanged.next(this.value);
  }

  getOperator():number{
    return this.value;
  }

  setOperator(opr):void{
    this.opr = opr;
    this.oprChanged.next(this.opr);
  }

  

  getAllUsers():IUser[]{
     return this.users;
  } 

  getUserById(id : number):IUser{
    return  this.users.filter(user =>{
        return user.id === id
      })[0];
  }

  getAllUsersViaREST():Observable<IUser[]>{
    let myHeader = new HttpHeaders().set("auth","auth header");
    return this.http.get<IUser[]>(this.url,{headers : myHeader});
    // .map( users => {
    //   return users.map(user =>{
    //     return{
    //       id :user.id
    //     }
    //   })
    // });
  }

  getAllUsersByIdViaREST(id :number):Observable<IUser>{
    return this.http.get<IUser>(`${this.url}/${id}`)
    // return this.http.get<IUser>(`${this.url}/${id}aerfsdf`)
    // .retry(3)
    // .catch(err => {
    //   console.log(err);
    //   });
  }

  createUser(user : IUser):Observable<IUser>{
    return this.http.post<IUser>(this.url,user);
  }

  updateUser(user : IUser):Observable<IUser>{
    return this.http.put<IUser>(`${this.url}/${user.id}`,user);
  }

  deleteUser(id :number):Observable<IUser>{
    return this.http.delete<IUser>(`${this.url}/${id}`);
  }

  getUserPosts(id : number):Observable<any>{
    let myParam = new HttpParams().set("userId",id.toString());
    return this.http.get<any>(this.postUrl,{params : myParam});
  }

  addUser(users){
    users.push(users[0]);
    this.users = users;
    return this.users;
  }
}
