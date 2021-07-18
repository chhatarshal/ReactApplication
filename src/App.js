import React, {useState} from 'react';
import Card from './UI/Card';
import AddUser from './Components/AddUser';
import UserList from './Components/UserList';
 

function App() {

  const userAdded = (userName, age) => {
    setUserList(
      (oldValues) => {
        return [
          ...oldValues,
          { name: userName, age: age,  id: Math.random().toString()}
        ]
      }
    );
  }

  const [userList, setUserList] = useState([]);


  return (
    <div>
        <Card>
          <AddUser addUser={userAdded}></AddUser>
          <UserList users={userList}></UserList>
        </Card>
    </div>
  );
}

export default App;
