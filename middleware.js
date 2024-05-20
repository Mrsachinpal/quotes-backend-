const isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    if (req.xhr) {
        return res.status(401).json({ message: 'You need to login first' });
    }
    console.log('Error: You are not logged in');
    res.redirect('/login');
};



module.exports = { isLoggedIn };
