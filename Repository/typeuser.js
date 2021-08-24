import axios from "axios"
export class TypeUserRepository{
    api_url =  "http://192.168.0.141/api/"
    api;
constructor(){
    this.api = axios.create({baseURL:this.api_url})
}

create(model){
this.api.post('TyperUser', model).then((r)=>{console.log(r.status)})
}

async read_by_id(id){
return (await ( this.api.get(`/TyperUser/${id}`).then() )).data
}

async read(){
return (await ( this.api.get('/TyperUser').then() )).data
}

update(model){
this.api.put(`/TyperUser/${model.id}`, model).then((r)=>{console.log(r.status)})
}

Delete(id){
this.api.delete(`/TyperUser/${id}`).then((r)=>{console.log(r.status)})
}
}