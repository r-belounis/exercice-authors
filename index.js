const express = require('express');
const port = 3000;

const app = express();

const api = {
    author1: {
        id: 1,
        books: {
            name: 'Beowulf'
        },
        name: 'Lawrence Nowell',
        country: 'UK'
    },
    author2: {
        id: 2,
        books: {
            name: 'Hamlet, Othello, Romeo and Juliet, MacBeth'
        },
        name: 'Lawrence Nowell',
        country: 'UK'
    },
    author3: {
        id: 3,
        books: {
            name: 'Oliver Twist, A Christmas Carol'
        },
        name: 'Lawrence Nowell',
        country: 'UK'
    },
    author4: {
        id: 4,
        books: {
            name: 'The Picture of Dorian Gray, The Importance of Being Earnest'
        },
        name: 'Lawrence Nowell',
        country: 'UK'
    }
}

// Home
app.get('/', (req, res) => {
    res.send(`Authors API`);
});

// Authors
app.get(`/authors/${api.author1.id}`, (req, res) => {
    res.send(`${api.author1.name}, ${api.author1.country}`);
});

app.get(`/authors/${api.author2.id}`, (req, res) => {
    res.send(`${api.author2.name}, ${api.author2.country}`);
});

app.get(`/authors/${api.author3.id}`, (req, res) => {
    res.send(`${api.author3.name}, ${api.author3.country}`);
});

app.get(`/authors/${api.author4.id}`, (req, res) => {
    res.send(`${api.author4.name}, ${api.author4.country}`);
});

// Books
app.get(`/authors/${api.author1.id}/books`, (req, res) => {
    res.send(`${api.author1.books.name}`);
});

app.get(`/authors/${api.author2.id}/books`, (req, res) => {
    res.send(`${api.author2.books.name}`);
});

app.get(`/authors/${api.author3.id}/books`, (req, res) => {
    res.send(`${api.author3.books.name}`);
});

app.get(`/authors/${api.author4.id}/books`, (req, res) => {
    res.send(`${api.author4.books.name}`);
});

// Error
// app.get('/', function(req, res) {
//     res.send('Error');
// });

// app.get('*/author/:id', function(req, res) {
//     res.send(`The author with the ID  ${req.params.id} does not exist`);
// });

// Server on port 3000
app.listen(port, () => {
  console.log('Server started on port: ' + port);
});