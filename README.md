
## NestJs Assignment

Completed by **[Hassan Nasir](mailto:hassan.nasir@systemsltd.com)**

### Modules
- **Users**: Manages users
- **Tasks**: Manages tasks with user
- **Auth**: Authenticates user

### Guard
- **Auth Guard**: Authorizes user with jwt token

### Interceptor
- **Response Interceptor**: Returns custom error response


## How to run

#### Run postgres using docker

```
docker compose up -d
```

#### Add admin user to postgres

```
docker exec -it postgres-container bash
```
```
psql
```
```
\c training; \x
```
```
INSERT INTO public.user (firstname, lastname, email, username, password, "createdAt", "updatedAt")
VALUES ('Admin', 'User', 'admin@example.com', 'admin', 'hashed_password', now(), now());
```

#### Run the application on [localhost:3000](http://localhost:3000)
```
npm run start:dev
```



## Using the App

APIs to use the application

### [Login](http://localhost:3000/auth/login)
- Public | POST
- Login to access the system
- Jwt service to sign user

### [Create User](http://localhost:3000/users)
- Private | POST
- Creates a new user in database
- Class validators added to validate data
- Unique usernames only

### [Get Users](http://localhost:3000/users)
- Private | GET
- Fetch a list of users available in database

### [Get User](http://localhost:3000/users/:id)
- Private | GET
- Replace the :id with user id
- Fetch the user matching id from database

### [Update User](http://localhost:3000/users/:id)
- Private | PATCH
- Replace the :id with the user's ID in the URL
- Update user details in the database

### [Delete User](http://localhost:3000/users/:id)
- Private | DELETE
- Replace the :id with the user's ID in the URL
- Delete a user from the database

### [Create Task](http://localhost:3000/task)
- Private | POST
- Create a new task in the database.

### [Get Tasks](http://localhost:3000/task)
- Private | GET
- Fetch a list of all tasks.

### [Get Task](http://localhost:3000/task/:id)
- Private | GET
- Fetch a single task by its ID.

### [Get Tasks by Status](http://localhost:3000/task/status/:status)
- Private | GET
- Fetch tasks by their status.
- Replace with the desired task :status (e.g., "in-progress", "completed")

### [Get Tasks within Date Range](http://localhost:3000/task/range/:start/:end)
- Private | GET
- Fetch tasks within a specified date range.
- Params  
    :start - Replace with the start date in the format "YYYY-MM-DD"   
    :end - Replace with the end date in the format "YYYY-MM-DD"   

### [Update Task by ID](http://localhost:3000/task/:id)
- Prviate | PATCH
- Update task details by its ID.
- Replace with the task's :id in the URL

### [Delete Task by ID](http://localhost:3000/task/:id)
- Private | DELETE
- Delete a task by its ID.
- Replace with the task's :id in the URL