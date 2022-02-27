import {addUser, getUser} from "../Services/users.service.js";

const controller = {}

controller.addUsers = async (req, res) => {
    let status = await addUser(req, res);
    res.send(status);
}
controller.getUsers = async (req, res) => {
    let status = await getUser();
    res.send(status);
}

export default controller;