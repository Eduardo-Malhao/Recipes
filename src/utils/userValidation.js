export default function validateRegisterFields(userData) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =	/^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*0-9])(?=.{6,15}$).*/;
  
    if (!userData.email || !userData.password || !userData.username) {
      return 'All fields must be filled';
    }
    
    const emailCheck = emailRegex.test(userData.email)
    if (emailCheck === false) {
			return 'Invalid email';
    }

    // if (userData.username.length < 4 || userData.username.length > 20) {
    //   return status(400).json({ message: 'Invalid username' });
    // }

    // const passwordCheck: boolean = passwordRegex.test(userData.password)
    // if (passwordCheck === false) {
		// 	return res.status(400).json({ message: 'Invalid password' });
    // }
	}

  // public static validateLoginFields(req: Request, res: Response, next: NextFunction) {
  //   const userData = req.body;

  //   if (!fields.email || !fields.password || !fields.username) {
  //     return res.status(400).json({ message: 'All fields must be filled' });
  //   }

	// 	next();
	// }
