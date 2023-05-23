import { createContext } from "react";

const UserInfo = createContext({name: "gary", id: "garyIsFree"});

const App = () => {
  return (
    <UserInfo.Provider  value={{name: 'licat', id: 'ImLion'}}>
    {/* value={{name: 'licat', id: 'ImLion'}} 전달하여 value 값 변경 가능 */}
      <HelloLicat />
    </UserInfo.Provider>
  )
}

export default App;

// 자식
const HelloLicat = () => {
  return (
    <UserInfo.Consumer>
      {(value) => {
        <div>
          <h2>{value.name}</h2>
          <strong>{value.id}</strong>
          <HelloLicatTwo />
        </div>
      }}
    </UserInfo.Consumer>
  )
}

// 자손
const HelloLicatTwo = () => {
  return (
    <UserInfo.Consumer>
      {(value) => {
        <div>
          <h2>{value.name}</h2>
          <strong>{value.id}</strong>
        </div>
      }}
    </UserInfo.Consumer>
  )
}