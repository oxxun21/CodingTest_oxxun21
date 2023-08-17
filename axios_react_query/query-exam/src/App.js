import { Suspense, useEffect, useState, version } from "react";
import { QueryCache, QueryClient, QueryClientProvider, useMutation, useQueries, useQuery, useQueryClient } from "react-query";

const queryClient = new queryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Todos />
    </QueryClientProvider>
  );
}
export default App;

const Todos = () => {
  const { isLoading, isError, data, error } = useQuery("todos", fetchTodoList, {
    refetchOnWindowFocus: false, // react-query 사용자가 사용하는 윈도우가 다른 곳을 갔다가 다시 화면으로 돌아오면 이 함수 재실행(옵션)
    retry: 0, // 실패 시 재호출 몇번 할지
    onSuccess: (data) => {
      // 성공 시 호출
      console.log(data);
    },
    onError: (e) => {
      // 실패 시 호출 -> 404, 404 같은 error가 아닌 정말 api 호출이 실패한 경우만 호출
      // 강제로 error 발생시키려면 api 단에서 throw error을 날려야함
      console.log(e.message);
    },
  });

  if (isLoading) {
    return <span>Loading</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <ul>
      {data.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};

function Todos() {
  const { status, data, error } = useQuery("todos", fetchTodoList);

  if (status === "loading") {
    return <span>Loading</span>;
  }

  if (status === "error") {
    return <span>Error: {error.message}</span>;
  }

  return (
    <ul>
      {data.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}

// const {data: todoList, error, isFetching} = useQuery("todos", fetchTodoList);
// const {data: nextTodo, error, isFetching} = useQuery(
//   "nextTodos",
//   fetchNextTodoList,
//   {
//     enabled: !!todoList // true가 되면 fetchNextTodoList 실행
//   }
// )

const usersQuery = useQuery("users", fetchUsers);
const teamsQuery = useQuery("teams", fetchTeams);
const projectsQuery = useQuery("projects", fetchProject);

const result = useQueries([
  {
    queryKey: ["getRune", riot.version],
    queryFn: () => api.getRunInfo(riot.version),
  },
  {
    queryKey: ["getSpell", riot.version],
    queryFn: () => api.getSpellInfo(riot.version),
  },
]);

useEffect(() => {
  console.log(result);
  // [{rune 정보, data: [], isSucces: true ...}, {spell 정보, data: [], isSucces: true ...}]
  const loadingFinishAll = result.some((result) => result.isLoading);
  console.log(loadingFinishAll); // loadingFinishAll이 false이면 최종 완료
}, [result]);

const riot = {
  version: "12.1.1",
};

const result0 = useQueries([
  {
    queryKey: ["getRune", riot.version],
    queryFn: (params) => {
      console.log(params);
      return api.getRunInfo(riot.version);
      // {queryKey: ['getRune', '12.1.1'], pageParam: undefined, meta: undefined}
    },
  },
]);

const queryClient0 = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => {
      console.log(error, query);
      if (query.state.data !== undefined) {
        toast.error(`에러: ${error.message}`);
      }
    },
    onSuccess: (data) => {
      console.log(data);
    },
  }),
});

// 로그인 예시
const Index = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const loginMutation = useMutation(loginApi, {
    onMutate: (variable) => {
      console.log("onMutate", variable);
      // variable : {loginId: 'xxx', password; 'xxx'}
    },
    onError: (error, variable, context) => {
      // error
    },
    onSuccess: (data, variable, context) => {
      console.log("success", data, variable, context);
    },
    onSettled: () => {
      console.log("end");
    },
  });

  const handleSubmit = () => {
    loginMutation.mutate({ loginId: id, password });
  };

  return (
    <>
      {loginMutation.isSuccess ? "success" : "pending"}
      {loginMutation.isError ? "error" : "pending"}
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSubmit}>로그인</button>
    </>
  );
};

// const mutation = useMutation(postTodo, {
//   onSuccess: () => {
//     // postTodo 가 성공하면 todos로 맵핑된 useQuery api 함수를 실행
//     queryClient.invalidateQueries("todos");
//   },
// });

// const queryClient = useQueryClient();

const mutation = useMutation(editTodo, {
  onSuccess: (data) => {
    // data가 fetchTodoById 로 삽입
    queryClient.setQueryData(["todo", { id: 5 }], data);
  },
});

const { status, data, error } = useQuery(["todo", { id: 5 }], fetchTodoById);

mutation.mutate({
  id: 5,
  name: "sks",
});

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       retry: 0,
//       suspense: true,
//     },
//   },
// });

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// const { data } = useQuery("test", testApi, { suspense: true });

return (
  // isLoading이 true면 Suspense의 fallback 내부 컴포넌트 표시
  // isError가 true면 ErrorBoundary의 fallback 내부 컴포넌트 표시
  <Suspense fallback={<div>loading</div>}>
    <ErrorBoundary fallback={<div>error</div>}>
      <div>{data}</div>
    </ErrorBoundary>
  </Suspense>
);
