import "./styles.css";
import useFetch from "./useFetch";

const App = () => {
  const [data] = useFetch("https://dummyjson.com/todos");
  return (
    <>
      {data &&
        data.todos.map((item) => {
          return <p key={item.id}>{item.todo}</p>;
        })}
    </>
  );
};
export default App;
