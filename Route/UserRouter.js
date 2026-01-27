const express = require('express')
const {getUser , postUser, putUser,patchUser,deleteUser, getSingleUser, postUsers} = require('../Controller/UserController')

const router = express.Router()

router.get("/getuser",getUser);
router.get("/getuser/:id",getSingleUser);
router.post("/postuser",postUser);
router.post("/postusers",postUsers);
router.put('/putuser/:id', putUser);
router.patch('/patchuser/:id', patchUser);
router.delete('/deleteuser/:id', deleteUser);

module.exports = router;