# todoList
A simple node js app written using express that manages a todo list

# To Build And Containerize the Site
In the root directory of the project: docker build -t <userName>/node-todolist-app .

# To Host the Site at http://localhost:3000
docker run -p 3000:3000 -d <userName>/node-todolist-app
