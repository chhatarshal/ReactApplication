

const UserList = (props) => {

    return (
        <div>
            {
                props.users.map(
                    (user) => <li key={user.id}>{user.name}</li>
                )
            }
        </div>
        )

}

export default UserList