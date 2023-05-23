import { createStore } from 'redux'

// 리덕스에서 관리 할 상태 정의
const initialState = {
  counter: 0,
  text: '',
  list: []
}

// 액션 타입 정의
const INCREASE = 'INCREASE'
const DECREASE = 'INCREDECREASEASE'
const CHANGE_TEXT = 'CHANGE_TEXT'
const ADD_TO_LIST = 'ADD_TO_LIST'

// 액션 함수 정의
function increase(){
  return {
    type: INCREASE
  }
}

// 화살표 함수로 작성하는 것이 코드가 더 간결해짐
const decrease = () => ({
  type: DECREASE
})

const changeText = text => ({
  type: CHANGE_TEXT,
  text
})

const addToList = item => ({
  type: ADD_TO_LIST,
  item
})

// 리듀서 정의 -> 불변성 지켜주기
function reducer(state = initialState, action){
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1
      }
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1
      }
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text
      }
    case ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.item)
      }
    default:
      return state;
  }
}

// 스토어 만들기
const store = createStore(reducer);
console.log(store.getState());  // 현재 store에 존재하는 상태 조회

// 스토어 안 상태가 바뀔 때마다 호출되는 함수
const listener = () => {
  const state = store.getState();
  console.log(state);
}

const unsubscribe = store.subscribe(listener);  // 구독 해제 시 사용

// 액션들을 디스패치
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('안녕하세요'));
store.dispatch(addToList({ id: 1, text: '안녕' }));