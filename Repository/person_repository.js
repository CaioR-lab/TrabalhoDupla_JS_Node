import { BaseRepository } from "./base_repository.js";

export class PersonRepository extends BaseRepository{

    constructor(Person){
        super ("Person")
    }
}