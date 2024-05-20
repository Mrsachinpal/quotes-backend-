const express = require('express');
const User = require('../model/User');
const router = express.Router();
const passport = require('passport');
const { isLoggedIn } = require('../middleware');

// Registration route
router.post('/login/register', async (req, res) => {
    try {
        let { email, name, username, password } = req.body;
        let user = new User({ email, name, username });
        let newUser = await User.register(user, password);
        // console.log("Successfully registered")
        res.redirect('/');
    } catch (e) {
        res.status(500).send(e);
    }
});

// Login route
router.post('/login', passport.authenticate('local'), (req, res) => {
    // console.log(`Logged in user: ${req.user}`);
    res.send('Logged in successfully');
});

// Logout route
router.get('/logout', (req, res) => {
    req.logout((err) => {
        if (err) {
            console.error("Error logging out:", err);
            return res.status(500).send("Error logging out");
        }
        console.log("User logged out");
        res.send("Logged out successfully");
    });
});

// Example protected route (requires authentication)
router.get('/protected', isLoggedIn, (req, res) => {
    // This route can only be accessed by authenticated users
    // console.log(`Logged in user: ${req.user}`);
    res.send('Protected route accessed successfully');
});

module.exports = router;
