// // 액션 생성 함수
// export const addNumber = () => {
//   return { type: "ADD" }
// }

// export const substractNumber = () => {
//   return { type: "SUBSTRACT" }
// }

// // 초기 값
// const initialState = {
//   stock: 100,
//   goods: 1
// }

// // 리듀서
// const goodsReducer = (state = initialState, action) => {
//   console.log(action);
//   console.log(action.type);
//   console.log(state);
//   switch (action.type){
//     case "ADD":
//       return {
//         ...state,
//         stock : state.stock - 1,
//         goods : state.goods + 1,
//       }
//     case "SUBSTRACT":
//       return {
//         ...state,
//         stock : state.stock + 1,
//         goods : state.goods - 1,
//       }
//     default:
//       return state
//   }
// }

// export default goodsReducer;

import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  stock: 10,
  goods: 1
};

export const counterSlice = createSlice({
  name: 'counter',  // 리듀서 이름
  initialState, // 초기값 설정
  reducers: { // reducers가 함수로 변환 -> 유니크한 이름이 아니여도 됨
    increment: (state) => {
      // ...state X
      state.stock -= 1
      state.goods += 1
    },
    decrement: (state) => {
      state.stock += 1
      state.goods -= 1
    },
  },
})

console.log(createSlice);

export const {increment, decrement} = counterSlice.actions

export default counterSlice.reducer   // reducer"s" -> s가 빠짐