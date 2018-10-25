const express = require('express') ;

const app = express();
app.use(express.json());

const genres = [
    {id: 1, name: 'Action'},
    {id: 2, name: 'Drama'},
    {id: 3, name: 'Comedy'},    
    {id: 4, name: 'Si-Fi'} 
];

app.get('/',(req, res) => {
    res.send(`<h1>CheapFlix...kind of Netflix but cheap..</h1>`);
});

app.get('/api/genres',(req, res) => {
    res.send(genres);
});

app.get('/api/genres/:id',(req, res) => {

    const genre = genres.find(g => g.id === parseInt(req.params.id));
    
    if(!genre) {
        res.status(404).send(`Course with ID : ${req.param.id} not found`)
    }

    res.send(genre);
});

app.post('/api/genres',(req, res) => {
    
    if(!req.body.name || req.body.name.length < 3){
        res.status(400).send(`Name can't be less than 3 char`);
    }
    
    const genre = {
        id: genres.length + 1,
        name: req.body.name
    };

    genres.push(genre);

    res.send(genre);
});


const port = 3000;//process.env.PORT || 3000;

app.listen(port,()=> {
    console.log(`Listning to Port ${port}`);
});