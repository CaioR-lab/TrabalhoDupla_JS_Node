import axios from "axios"
export class PersonRepository{
    api_url =  "http://192.168.0.141/api/"
    api;
constructor(){
    this.api = axios.create({baseURL:this.api_url})
}

create(model){
this.api.post('Person', model).then((r)=>{console.log(r.status)})
}

async read_by_id(id){
return (await ( this.api.get(`Person/${id}`).then() )).data
}

async read(){
return (await ( this.api.get('Person').then() )).data
}

update(model){
this.api.put(`Person/${model.id}`, model).then((r)=>{console.log(r.status)})
}

Delete(id){
this.api.delete(`Person/${id}`).then((r)=>{console.log(r.status)})
}
}