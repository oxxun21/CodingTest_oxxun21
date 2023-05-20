import User from "./User"

export default function UserList({users, onRemove, onToggle}){
  return (
    <div>
      {users.map(user => {
        return (
          <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle} />
        )
      })}
    </div>
  )
}