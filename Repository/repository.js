import axios from "axios"
export class PersonRepository{
    api_url =  "http://192.168.0.141/api/"
    api;
    endpoint;
constructor(endpoint){
    this.api = axios.create({baseURL:this.api_url});
    endpoint = this.endpoint;
}

create(model){
this.api.post(endpoint, model).then((r)=>{console.log(r.status)})
}

async read_by_id(id){
return (await ( this.api.get(`${endpoint}/${id}`).then() )).data
}

async read(){
return (await ( this.api.get(endpoint).then() )).data
}

update(model){
this.api.put(`${endpoint}/${model.id}`, model).then((r)=>{console.log(r.status)})
}

Delete(id){
this.api.delete(`${endpoint}/${id}`).then((r)=>{console.log(r.status)})
}
}