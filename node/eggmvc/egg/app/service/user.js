'use strict';


const Service = require('egg').Service;

class UserService extends Service {
    async getAll() {
        // return [
        //     {name: 'tom'},
        //     {name: 'tom2'}
        // ]
        return await this.ctx.model.User.findAll()
    }
}

module.exports = UserService