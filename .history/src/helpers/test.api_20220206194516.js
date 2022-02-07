export const getPostsApi = async () => {
  return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => res.json())
    .then((json) => json)
    .catch((err) => console.log(err));
};
