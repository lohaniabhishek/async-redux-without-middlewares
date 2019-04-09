const GET_TODO_BY_ID = (id) => fetch(`https://jsonplaceholder.typicode.com/todos/${id}`) ;

const GET_TODO_BULK = () => fetch("https://jsonplaceholder.typicode.com/posts");