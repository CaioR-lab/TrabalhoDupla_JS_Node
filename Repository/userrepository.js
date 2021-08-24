import axios from "axios"
export class UserRepository{
    api_url =  "http://192.168.0.141/api/"
    api;
constructor(){
    this.api = axios.create({baseURL:this.api_url})
}

create(model){
this.api.post('User', model).then((r)=>{console.log(r.status)})
}

async read_by_id(id){
return (await ( this.api.get(`/User/${id}`).then() )).data
}

async read(){
return (await ( this.api.get('/User').then() )).data
}

update(model){
this.api.put(`/User/${model.id}`, model).then((r)=>{console.log(r.status)})
}

Delete(id){
this.api.delete(`/User/${id}`).then((r)=>{console.log(r.status)})
}
}