import { BaseRepository } from "./base_repository.js";

export class UserRepository extends BaseRepository{

    constructor(User){
        super("User")
    }
}