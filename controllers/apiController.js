var Todos = require('../models/todoModel');
var bodyParser = require('body-parser');

module.exports = function(app){
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));//So we can handle url encoded items

    //This gets all the todo items based on a given userName
    app.get('/api/todos/:userName', function(request, response){
        Todos.find({userName: request.params.userName}, function(err, todos){
            if (err) throw err;

            response.send(todos);
        });
    });

    app.get('/api/todo/:id', function(request, response){
        Todos.findById({_id: request.params.id}, function(err, todo){
            if (err) throw err;

            response.send(todo);
        });
    });

    app.post('/api/todo', function(request, response){
        if (request.body.id){//We have an update situation because the id exists
            Todos.findByIdAndUpdate(request.body.id, {
                todo: request.body.todo,
                isDone: request.body.isDone,
                hasAttachment: request.body.hasAttachment}, function(err, todo){
                    if (err) throw err;
                    response.send('Success');
                });
        }
        else{
            var newTodo = Todos({
                userName: 'test',
                todo: request.body.todo,
                isdone: request.body.isDone,
                hasAttachment: request.body.hasAttachment
            });
            newTodo.save(function(err){
                if (err) throw err;
                response.send('Success');
            });
        }
    });

    app.delete('/api/todo', function(request, response){
        Todos.findByIdAndRemove(request.body.id, function(err){
            if (err) throw err;
            response.send('Success');
        })
    });
}