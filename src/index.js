const express = require('express')
const { v4: uuidv4} = require('uuid');
const app = express()
app.use(express.json())

// const path = require('path');
const projects = []

app.get('/projects', function(request, response){
    return response.json(projects)
    // response.sendFile(path.join(__dirname, '/index.html'));
})

app.post('/projects', function(request, response){
    const {name, owner} = request.body
    console.log(name, owner)  

    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3'
    ])
})

app.put('/projects/:id/', function(request, response){
    const {name, owner} = request.body
    const {id} = request.params

    console.log(id, name, owner)  

    return response.json([
        'Projeto 4',
        'Projeto 2',
        'Projeto 3'
    ])
})

app.delete('/projects/:id/', function(request, response){
    return response.json([
        'Projeto 2',
        'Projeto 3'
    ])
})

app.listen(3000, () => {
    console.log('Server started on port 3000!')
})


