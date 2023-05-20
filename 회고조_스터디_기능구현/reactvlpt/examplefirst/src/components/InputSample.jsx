import { useRef, useState } from "react";

export default function InputSample(){
  const [inputs, setInputs] = useState({
    name: '',
    nickName: '',
  })

  const {name, nickName} = inputs;  // 비구조화 할당을 통한 값 추출

  const nameInput = useRef();

  const onChange = (e) => {
    const {value, name} = e.target // e.target 에서 name과 value 추출

    setInputs({
      ...inputs,  // 기존 input 객체 복사
      [name]: value // name 키를 가진 값을 value로 설정
    })
  }

  const onReset = () => {
    setInputs({
      name: '',
      nickName: '',
    })
    nameInput.current.focus();
  }

  return (
    <div>
      <input name="name" onChange={onChange} value={name} ref={nameInput} placeholder="이름" />
      <input name="nickName" onChange={onChange} value={nickName} ref={nameInput} placeholder="닉네임" />
      <button onChange={onReset}>초기화</button>
      <div>
        <b>값 : </b>
        {name} {nickName}
      </div>
    </div>
  )
}