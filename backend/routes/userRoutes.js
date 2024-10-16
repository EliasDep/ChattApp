import express from 'express'
import getUsersForSideBar from '../controllers/userController.js'
import protectRoute from '../middleware/protectRoute.js'


const router = express.Router()

router.get ('/signup', protectRoute, getUsersForSideBar)


export default router
