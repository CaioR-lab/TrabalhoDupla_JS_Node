import { PersonRepository } from "./Repository/person_repository.js";
import { TypeUserRepository } from "./Repository/typeuser_repostiory.js";
import { UserRepository } from "./Repository/user_repository.js";
import { User } from "./Model/user.js";
import { TypeUser } from "./Model/typeuser.js";
import { Person } from "./Model/person.js";


let userrepository = new UserRepository();
let personrepository = new PersonRepository();
let typeuserrepository = new TypeUserRepository();

let typeuser = new TypeUser();
typeuser.description= "obrabo";
typeuser.name= "Rodolfo";
// typeuserrepository.create(typeuser)

let user = new User();
user.email = "algumacoisa@gmail";
user.password= "aquelelabemdificil";
user.typeuser = typeuser;
//  userrepository.create(user);

let person = new Person();
person.birthDate = "2021-08-25T13:31:11.412Z";
person.document = "teste";
person.firstName = "Rodolfo";
person.lastName = "Da Silva";
person.user = user;
console.log(person);
personrepository.create(person);

// userrepository.read();
