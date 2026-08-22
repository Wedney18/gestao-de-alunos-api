import asyncHandler from '../utils/asyncHandler.js';
<<<<<<< HEAD
import authService from '../services/auth.service.js';
=======
import * as authService from '../services/auth.service.js';
>>>>>>> a740e54a56cc3167e17839faec41b8d869bdae43

export const login = asyncHandler(async (req, res) => {
  res.json(authService.login(req.body));
});
