const express = require('express')
const {getUser , postUser, putUser,patchUser,deleteUser} = require('../Controller/UserController')

const router = express.Router()

router.get("/getuser",getUser);
router.post("/postuser",postUser);
router.put('/putuser/:id', putUser);
router.patch('/patchuser/:id', patchUser);
router.delete('/deleteuser/:id', deleteUser);

module.exports = router;