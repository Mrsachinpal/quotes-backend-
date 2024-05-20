const mongoose=require('mongoose');
const Quotes = require('./model/Quote');

let dummyQuote=[
    {
        author: "sachin",
        text: "life is a greatest lesson"
    },
    {   
        author: "Monika",
        text: "Lines are drawn, but then its fade. For her i can bend, for you i break"
    },
    {
        author: "anjali",
        text: "you don’t have to be sweet to be liked by everyone”blackcofe",
    },
    {
        author: "Dilip",
        text: "“In the future... if by some miracle you ever find yourself in the position to fall in love again... fall in love with me.”"
    }
]
async function seedDb(){
    await Quotes.insertMany(dummyQuote);
    console.log("data seeded");
}
module.exports=seedDb;

