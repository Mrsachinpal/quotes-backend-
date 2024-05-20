const express = require('express');
const Quotes = require('../model/Quote');
const router = express.Router();

router.get('/allquote', async (req, res) => {
    try {
        const allQuotes = await Quotes.find({});
        res.status(200).json(allQuotes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.post('/addquote', async (req, res) => {
    try {
        const { author,quote,email, tag, topic, dob,} = req.body;
        const newQuote = await Quotes.create({author,quote,email,tag,topic,dob
        });
        res.status(201).json({ msg: 'Quote added successfully!' });
    } catch (error) {
        console.error(`Error adding quote: ${error}`);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});




// --------------

// router.get('/author/:author',async (req,res)=>{
//     try{
//         let{author}=req.params;
//         let quote=await Quotes.findOne({author:author});
//         if (!quote) {
//             return res.status(404).json({ message: 'Author not found' });
//           }
//         // console.log(author);
//     }catch(e){
//         console.log(`author/:author route error:- ${e}`);
//     }
   
// })
router.get('/allauthor', async (req, res) => {
    try {
        const allQuotes = await Quotes.find({});
        res.status(200).json(allQuotes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.get("/authors/:author",async (req,res)=>{            
    console.log(req.params.author);  
    let quote=await Quotes.find({author:req.params.author})
    res.status(200).json(quote);
})
  

module.exports = router;
