import BaseWriteRepo from "../repository/BaseWriteRepo.js";
import BaseReadRepo from "../repository/BaseReadRepo.js";
import { UserDto } from "../DTO/users.dto.js";
import DB from "../utils/dbConfig.js";
import User from "../Schema/Users.schema.js";
import {giveBool} from "../utils/utils.js"

export const addUser = async (req, res) => {
    const userRepo = new BaseWriteRepo(new DB('DI', User), new UserDto(req.body));
    const saved =  await userRepo.insert()

    return giveBool(saved);
}
export const getUser = async () => {
    const data = await new BaseReadRepo(new DB('DI', User)).getAll();
    return giveBool(data);
}