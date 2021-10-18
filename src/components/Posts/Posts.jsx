import React from 'react';

const  Posts = (props) => {
    if (props.users.length === 0) {
     axios.get('https://jsonplaceholder.typicode.com/posts?userId=1').then(response => {
      console.log() 
     //  console.log(props.setUsers)
     let onclickPost = () => {
      let userId = u.id;
      
  }
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