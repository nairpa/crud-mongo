const bcrypt = require('bcryptjs');
const db = require('../../models');
const jwt = require('jsonwebtoken');
const User = db.user;

exports.signin = async(req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({email: email});
        if(!user) return res.status(400).send('Email is wrong');

        const pass = await bcrypt.compare(password, user.password);
        if(!pass) return res.status(400).send('Invalid password');  
        
        const token = jwt.sign({_id: user._id}, process.env.SECRET);

        return res.header('auth-token', token).send({
            message: "successfully logged in",
            token: token,
            user: user,
        });
    } catch(err) {
        return res.status(500).send({
            message: err | "Error on login"
        })
    }
}