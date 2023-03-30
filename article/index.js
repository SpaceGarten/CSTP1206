const express = require('express'); // This is importing the downloaded express package
const app = express(); // This is the function i am storing inside a variable called as app
const PORT = 3000;


// Middlewares
app.use(express.json()); // This middleware is used to accept data in the form of JSON

let articles = [
    {
        id: 1,
        title: 'Inhabit hearing perhaps on ye do no',
        description: 'It maids decay as there he. Smallest on suitable disposed do although blessing he juvenile in. Society or if excited forbade.',
        author: 'Ernst Hemingway'
    },
    {
        id: 2,
        title: 'Two before narrow',
        description: 'Boisterous he on understood attachment as entreaties ye devonshire.',
        author: 'Leo Tolstoy'
    },
    {
        id: 3,
        title: 'Wrote water woman',
        description: 'Residence certainly elsewhere something she preferred cordially law. Age his surprise formerly mrs perceive few stanhill moderate. ',
        author: 'Petr Dostoyevsky'
    },
    {
        id: 4,
        title: 'Possession her thoroughly remarkably terminated man continuing. ',
        description: 'Visit arise my point timed drawn no.',
        author: 'Rachel Ward'
    }
]

app.get('/', (req, res) => {
    res.send("Welcome to Home Page!");
})

// GET API ARTICLES
app.get('/articles', (req, res) => {
    res.status(200).json(articles);
});

// GET API ARTICLES BY ID
app.get('/articles/Ernst_Hemingway', (req, res) => {
    const ernst_hemingway = articlesList.filter((article) => article.author == 'Ernst Hemingway' ? true : false);
    res.send(ernst_hemingway);
})

app.get('/articles/Leo_Tolstoy', (req, res) => {
    const leo_tolstoy = articlesList.filter((article) => article.author == 'Leo Tolstoy' ? true : false);
    res.send(leo_tolstoy);
})

app.get('/articles/Petr_Dostoyevsky', (req, res) => {
    const petr_dostoyevsky = articlesList.filter((article) => article.author == 'Petr Dostoyevsky' ? true : false);
    res.send(petr_dostoyevsky);
})

app.get('/articles/Rachel_Ward', (req, res) => {
    const rachel_ward = articlesList.filter((article) => article.author == 'Rachel Ward' ? true : false);
    res.send(rachel_ward);
})


// POST API ARTICLES
app.post('/articles/create', (req, res) => {
    const newArticles = req.body; 
    articlesList.push(newArticles);
    res.send(articlesList);
})

// DELETE API ARTICLES
app.delete('/articles/delete/:id', (req, res) => {  
    const articlesID = req.params.id;
    articlesList = articlesList.filter((article) => article.id != articlesID ? true : false);
    res.send(articlesList);
})



// Listening to server on this PORT - 3000
app.listen(PORT, () => {
    console.log("Server running on port : "  +PORT);
})
