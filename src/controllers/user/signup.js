const bcrypt = require('bcryptjs');
const db = require('../../models');
const User = db.user;
const Role = db.role;

exports.signup = async(req, res) => {
    const { username, email, password, roles } = req.body;
    
    const usernameExists = await User.findOne({username: username});
    const emailExists = await User.findOne({email: email});

    if(usernameExists) {
        return res.status(400).send({
            message: "Username is already in use"
        })
    }

    if(emailExists) {
        return res.status(400).send({
            message: "Email is already in use"
        })
    }

    try {
        const newUser = new User({
            username,
            email,
            password: bcrypt.hashSync(password, 8),
        });
        
        if(roles) {
            const foundRoles = await Role.find({name: {$in: roles}})
            newUser.roles = foundRoles.map(role => role._id)
        } else {
            const role = await Role.findOne({name: 'user'})
            newUser.roles = [role._id];
        }
        
        const user = await newUser.save();
        
        return res.send({
            message: "User successfully created",
            user: user,
        })
    } catch(err) {
        return res.status(400).send({
            message: err,
        })
    }    
}