

const UserList = (props) => {

    return (
        <div>
            <ul>
            {
               
                    props.users.map(
                        (user) => <li key={user.id}>{user.name} {user.age}</li>
                    )
                
            }
            </ul>
        </div>
        )

}

export default UserList