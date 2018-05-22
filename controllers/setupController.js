var Todos = require('../models/todoModel');

module.exports = function(app){
    app.get('/api/setupTodos', function(request, response){
        //seed the database
        var starterTodos = [
            {
                userName: 'test',
                todo: 'Buy some soda',
                isDone: false,
                hasAttachment: false
            },
            {
                userName: 'test',
                todo: 'Take dog to the vet',
                isDone: false,
                hasAttachment: false
            },
            {
                userName: 'test',
                todo: 'Learn node',
                isDone: false,
                hasAttachment: false
            }
        ];
        Todos.create(starterTodos, function(err, results){
            response.send(results);
        });
    });
}