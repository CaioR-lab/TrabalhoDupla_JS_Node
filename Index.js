import { User } from "./Model/user.js";
import { TypeUser } from "./Model/typeuser.js";
import { Person } from "./Model/person.js";
import { repository } from  "./Repository/repository.js";

let userrepository = new repository('User');
let personrepository = new repository('Person');
let typeuserrepository = new repository('TypeUser');

let typeuser = new TypeUser();
typeuser.description= "obrabo";
typeuser.name= "Rodolfo";
// typeuserrepository.create(typeuser)

let user = new User();
user.email = "algumacoisa@gmail";
user.password= "aquelelabemdificil";
user.typeuser = typeuser;
// userrepository.create(user);

let person = new Person();
person.birthDate = Date.parse("March 21, 2012");
person.document = "teste";
person.firstName = "Rodolfo";
person.lastName = "Da Silva";
person.user = user;
personrepository.create(person);


