const checkrole = (allowedRoles) => {
    return (req, res, next) => {
      const userRole = req.user.role; // Get the user's role from the JWT payload
      if (!allowedRoles.includes(userRole)) {
        return res.status(403).json({ message: 'Access denied' });
      }
      next();
    };
  };
  
  module.exports = checkrole;