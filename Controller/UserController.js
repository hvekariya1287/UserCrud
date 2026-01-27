const User = require('../models/User')

// GEt Users
exports.getUser = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({
            message: 'User fetched successfully',
            data: users
        });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}
// Post Method -- create user

exports.postUser = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();

        res.status(201).json({
            message: 'User Created',
            data: user
        });
    }
    catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}

exports.putUser = async (req, res) => {
    try {
        const putUser = await User.findOneAndReplace(
            { _id: req.params.id },
            req.body,
            {
                new: true,
                overwrite: true,
                runValidations: true
            }
        )
        res.json({
            message: ' User put Successfully !',
            data: putUser,
        });

    }
    catch (error) {
        res.json({
            error: error.message
        })
    }
};

exports.patchUser = async (req, res) => {
    try {
        const patchUser = await User.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            {
                new: true,
                runValidations: true
            }
        )
        if (!patchUser) {
            return res.status(404).json({
                message: 'User Not Found'
            })
        }
        res.json({
            message: ' User patch Successfully !',
            data: patchUser,
        });

    }
    catch (error) {
        res.json({
            error: error.message,
            'msg': 'xyz'
        })
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.findOneAndDelete(id);
        res.json({
            message: ' User delete Successfully !',
            data: user,
        });

    }
    catch (error) {
        res.json({
            error: error.message
        })
    }
};

exports.getSingleUser = async (req, res) => {
    try {
        const id = req.params.id
        const users = await User.findById(id)
        res.status(200).json({
            message: 'User fetched successfully',
            data: users
        });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.postUsers = async (req, res) => {
    try {
        const user = req.body
        const addUsers = await User.insertMany(user)

        res.status(201).json({
            message: "Multiple User created",
            users: addUsers
        })

    }
    catch (err) {
        res.status(500).json({
            err: err.message
        })
    }
}