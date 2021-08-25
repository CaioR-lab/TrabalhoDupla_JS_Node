import { User } from "./user.js";
export class Person{
    firstName;
    lastName;
    birthDate;
    document;
    user;
    constructor(user){
        user = new User;
    }
}