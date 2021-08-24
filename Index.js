import { User } from "./Model/user.js";
import { TypeUser } from "./Model/typeuser.js";
import { Person } from "./Model/person.js";
import { PersonRepository } from  "./Repository/personrepository.js"

let person = new Person();
let user = new User();
let typeuser = new TypeUser();
person.birthDate = Date.parse("March 21, 2012");
person.document = "teste";
person.firstName = "Rodolfo";
person.lastName = "Da Silva";
person.user = user;
user.email = "algumacoisa@gmail";
user.password= "aquelelabemdificil";
user.typeuser = typeuser;
typeuser.description= "obrabo";
typeuser.name= "Rodolfo";

let respository = new PersonRepository();
respository.create(person)