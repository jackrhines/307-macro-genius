const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');

app.use(cors());
app.use(express.json());

const userServices = require('./models/user-services')

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/users', (req, res) => {
    const name = req.query.name;
    const job = req.query.job;

    if (name !== undefined && job !== undefined){
        let result = findUserByNameAndJob(name, job)
        result = {users_list: result};
        res.send(result)
    }
    else if (name !== undefined){
        let result = findUserByName(name);
        result = {users_list: result};
        res.send(result);
    }
    else if (job !== undefined){
        let result = findUserByJob(job);
        result = {users_list: result};
        res.send(result)
    }
    else{
        res.send(users);
    }
});

app.get('/users/:id', (req, res) => {
    const id = req.params['id']; //or req.params.id
    let result = findUserById(id);
    if (result === undefined || result.length === 0)
        res.status(404).send('Resource not found.');
    else {
        result = {users_list: result};
        res.send(result);
    }
});

app.post('/users', (req, res) => {
    const userToAdd = generateId(req.body);
    addUser(userToAdd);
    res.status(201).send(userToAdd).end();
});

app.delete('/users/:id', (req, res) => {
    const id = req.params['id']; //or req.params.id
    deleteUserById(id);
    res.status(204).end();
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

function generateId(person) {
    person["id"] = Math.random().toString(36).substring(2, 8)
    return person
}

const findUserByName = (name) => {
    return users['users_list'].filter( (user) => user['name'] === name);
}

const findUserByJob = (job) => {
    return users['users_list'].filter((user) => user['job'] === job);
}

const findUserByNameAndJob = (name, job) => {
    return users['users_list'].filter((user) =>
        (user['name'] === name && user['job'] === job))
}

function findUserById(id) {
    return users['users_list'].find( (user) => user['id'] === id); // or line below
    //return users['users_list'].filter( (user) => user['id'] === id);
}

function addUser(user){
    users['users_list'].push(user);
}

function deleteUserById(id) {
    users['users_list'] = users['users_list'].filter( (user) => user['id'] !== id);
}

const users = {
    users_list :
        [
            {
                id : 'xyz789',
                name : 'Charlie',
                job: 'Janitor',
            },
            {
                id : 'abc123',
                name: 'Mac',
                job: 'Bouncer',
            },
            {
                id : 'ppp222',
                name: 'Mac',
                job: 'Professor',
            },
            {
                id: 'yat999',
                name: 'Dee',
                job: 'Bird',
            },
            {
                id: 'zap555',
                name: 'Dennis',
                job: 'Bartender',
            }
        ]
}
