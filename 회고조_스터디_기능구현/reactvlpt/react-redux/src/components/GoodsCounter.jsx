import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../modules/goodsCounter';

export default function GoodsCounter() {
  // useSelector: store 상태 조회 hook
  const {stock, goods} = useSelector(state => ({
    stock: state.goodsReducer.stock,
    goods: state.goodsReducer.goods,
  }))
  console.log(stock, goods);
  
  const plus = useRef();
  const minus = useRef();

  // useDispatch: store의 dispatch를 함수 내부에서 사용할 수 있는 hook
  const dispatch = useDispatch();

  const onAddNumber = () => {
    // disabledToggleAdd();
    dispatch(increment())
  };
  const onSubstractNumber = () => {
    // disabledToggleMinus();
    dispatch(decrement())
  };

  // const disabledToggleAdd = () => {
  //   if (stock === 1) {
  //     plus.current.setAttribute("disabled", true)
  //   } else {
  //     plus.current.removeAttribute("disabled")
  //   }
  // }

  // const disabledToggleMinus = () => {
  //   if (goods === 1) {
  //     minus.current.setAttribute("disabled", true)
  //   } else {
  //     minus.current.removeAttribute("disabled")
  //   }
  // }


  return (
    <div>
      <h2>딥러닝 개발자 무릎 담요</h2>
      <span><strong>17,500</strong>원</span>
      <div>
        <button type='button' onClick={onSubstractNumber} ref={minus} >MINUS</button>
        <span>{goods}</span>
        <button type='button' onClick={onAddNumber} ref={plus}>PLUS</button>
      </div>
      <div>
        총 수량 <strong>{goods}</strong>
      </div>
      <div>
        <strong>{goods * 17500}</strong>원
      </div>
      <div>
        재고 <strong>{stock}</strong>
      </div>
    </div>
  )
}
