import express from 'express';
import { 
  registerUser, 
  loginUser, 
  getUserProfile, 
  updateUserProfile, 
  changeUserPassword,
  deleteAccount,
  uploadProfilePhoto
} from '../controllers/authController';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', protect, getUserProfile);
router.put('/profile', protect, updateUserProfile);
router.put('/change-password', protect, changeUserPassword);
router.delete('/delete-account', protect, deleteAccount);
// Google OAuth routes will be re-enabled when credentials are provided
// router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
// router.get('/google/callback', 
//   passport.authenticate('google', { session: false, failureRedirect: '/login' }),
//   googleAuthCallback
// );

// Upload profile photo route (commented out until implemented)
// router.post('/upload-photo', protect, uploadProfilePhoto);

export default router;