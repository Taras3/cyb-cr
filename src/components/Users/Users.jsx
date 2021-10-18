import React from 'react';
import classes from './Users.module.css';
import * as axios from 'axios';


const  Users = (props) => {
 if (props.users.length === 0) {
  axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
   console.log() 
  //  console.log(props.setUsers)
  props.setUsers(response.data);
  console.log(response.data)
  })
}
  return (
    <div>
        <div className="content">
            jjjjjjjj
            {
              props.users.map( u => <div key={u.id}>
                {u.name}
                <button>Posts</button>
                </div>)
            }
        </div>
    </div>
  );
}

export default Users;