const express = require('express');
const app = express();
const mongoose = require('mongoose');
const quoteRoutes = require('./apis/quotesRoute');

const userRoutes = require('./routes/auth');
const cors = require('cors');
const methodOverride = require('method-override');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const cookieParser = require('cookie-parser');
const User = require('./model/User');

let URL="mongodb+srv://quote:zcBcDkC67GdTlo6M@cluster0.pubhthb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(URL).then(() => {
    console.log("Db connected !");
}).catch((e) => {
    console.log("Db not connected!");
});

app.use(cookieParser());

app.use(cors({
    origin: ["http://localhost:5173"]
}));

app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


let configSession = {
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000
    }
};
app.use(session(configSession));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate())); //password
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Middleware to set currentUser
app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    console.log(req.user);
    next();
});

// Routes
app.use('/', quoteRoutes);
app.use('/', userRoutes);


app.listen(8080, () => {
    console.log("server connected at port: 8080 !");
});
