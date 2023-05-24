import React from 'react'
import {shallowEqual, useDispatch, useSelector} from 'react-redux'
import {decrease, increase, setDiff} from '../modules/counter'
import Counter from '../components/Counter';

export default function CounterContainer() {
  // useSelector는 리덕스 스토어 상태를 조회하는 Hook
  // state 값은 store.getState() 함수를 호출했을 때 나타나는 결과물과 동일
  const {number, diff} = useSelector(state => ({
    number: state.counter.number,
    diff: state.counter.diff
  }), shallowEqual);

  // useDispatch는 리덕스 스토어의 dispatch를 함수에서 사용할 수 있게 해주는 Hook
  const dispatch = useDispatch();
  // 각 액션들을 디스패치하는 함수
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = diff => dispatch(setDiff(diff));

  return (
    <Counter 
      // 상태
      number={number}
      diff={diff}
      // 액션 디스패치 함수를 props로 전달
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  )
}
