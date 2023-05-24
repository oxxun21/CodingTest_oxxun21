import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, toggleTodo } from './../modules/todos';
import Todos from '../components/Todos';

export default function TodosContainer() {
  // useSelector 에서 꼭 객체를 반환할 필요는 없다
  // 한 종류의 값만 조회하고 싶다면 원하는 값만 반환하면 된다
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const onCreate = text => dispatch(addTodo(text));
  const onToggle = useCallback(id => dispatch(toggleTodo(id)), [dispatch]);

  return <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />
}
