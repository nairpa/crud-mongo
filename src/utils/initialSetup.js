const db = require('../models');
const Role = db.role;

exports.createRoles = async() => {
    try {
        const count = await Role.estimatedDocumentCount();
        if(count > 0) return;

        const roles = await Promise.all([
            new Role({ name: 'user' }).save(),
            new Role({ name: 'admin' }).save(),
        ])
    } catch(err) {
        return err
    }
}