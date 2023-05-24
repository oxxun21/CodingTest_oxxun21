import React from 'react'

export default function Counter({ number, diff, onIncrease, onDecrease, onSetDiff }) {
  const onChange = e => {
    // e.target.value 는 문자열이기 때문에 숫자 변환 필요
    onSetDiff(parseInt(e.target.value, 10));
  }
  return (
    <>
      <h1>{number}</h1>
      <div>
        <input type="number" value={diff} min="1" onChange={onChange} />
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
      </div>
    </>
  )
}
