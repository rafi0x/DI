export default class BaseRepo {

    constructor(model) {
        this.model = model;
    }

    async getAll() {
        return await this.model.find();
    }

    async getOne(finder) {
        return await this.model.findOne(finder);
    }
}