import { useEffect } from "react";

export default function User({user, onRemove, onToggle}){
  useEffect(() => {
    console.log(user);
  }, [])

  return (
    <div>
      <b
        style={{
          cursor: "pointer",
          color: user.active ? "green" : "black"
        }}
        onClick={onToggle(user.id)}
      >
        {user.username}
      </b> <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  )
}