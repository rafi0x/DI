export default class BaseRepo {

    constructor(model, obj) {
        this.model = model;
        this.obj = obj;
    }

    async insert() {
        return await this.model.create(this.obj);
    }

    async update(finder) {
        return await this.model.findOneAndUpdate(finder, this.obj);
    }

    async delete(finder) {
        return await this.model.findOneAndDelete(finder);
    }
}