import express from 'express';
<<<<<<< HEAD
import passport from '../config/passport';
=======
>>>>>>> 5fbcd6f2c893500ea09a1b1848b2939fce707c2f
import { 
  registerUser, 
  loginUser, 
  getUserProfile, 
  updateUserProfile, 
  changeUserPassword,
  deleteAccount,
<<<<<<< HEAD
  uploadProfilePhoto,
  googleAuthCallback
=======
  uploadProfilePhoto
>>>>>>> 5fbcd6f2c893500ea09a1b1848b2939fce707c2f
} from '../controllers/authController';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', protect, getUserProfile);
router.put('/profile', protect, updateUserProfile);
router.put('/change-password', protect, changeUserPassword);
router.delete('/delete-account', protect, deleteAccount);
router.post('/upload-photo', protect, uploadProfilePhoto);

<<<<<<< HEAD
// Google OAuth routes
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback', 
  passport.authenticate('google', { session: false, failureRedirect: '/login' }),
  googleAuthCallback
);

=======
>>>>>>> 5fbcd6f2c893500ea09a1b1848b2939fce707c2f
export default router;