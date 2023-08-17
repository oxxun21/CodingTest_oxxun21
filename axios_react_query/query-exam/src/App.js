import { QueryClientProvider, useMutation, useQuery, useQueryClient } from "react-query";

const queryClient = new queryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Todos />
    </QueryClientProvider>
  );
}

function Todos() {
  const queryClient = useQueryClient();

  const query = useQuery("todos", getTodos);

  const mutatoin = useMutation(postTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("toods");
    },
  });

  return (
    <div>
      <ul>
        {query.data.map((todo) => {
          <li key={todo.id}>{todo.title}</li>;
        })}
      </ul>
      <button
        onClick={() => {
          mutatoin.mutate({
            id: Date.now(),
            title: "Do Laundry",
          });
        }}
      >
        add todo
      </button>
    </div>
  );
}
export default App;
