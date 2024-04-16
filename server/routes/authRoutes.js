const express = require('express')
const router = express.Router()
const cors = require('cors');
const {test,registerUser,loginUser, getProfile} = require('../controllers/authControllers')

//middleware
router.use(
    cors({
    credentials: true,
    origin: 'https://ats-resume-scorer-application.vercel.app/'
    })
);

router.get('/login', test)
router.post('/register',registerUser);
router.post('/login',loginUser);
// router.get('/profile', getProfile)
module.exports = router