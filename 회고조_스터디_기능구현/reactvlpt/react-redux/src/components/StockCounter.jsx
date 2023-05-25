import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { sale, soldout } from '../modules/stockCounter';

export default function StockCounter() {
  const {message} = useSelector(state => ({
    message: state.stockReducer.message,
  }))

  const {stock} = useSelector(state => ({
    stock: state.goodsReducer.stock,
  }))

  const dispatch = useDispatch();

  const onSale = () => dispatch(sale());
  const onSoldout = () => dispatch(soldout());

  useEffect(() => {
    if (stock <= 0){
      onSoldout()
    } else {
      onSale()
    }
  }, [stock]);

  return (
    <div>
      <p>{message}</p>
    </div>
  )
}
