import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";

let mapStateToProps = (state) => {
    return {
        users: state.users.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
}

// const UsersContainer = (props) => {
//     console.log(props)
//     return (
//         <div>
//             <Users state={props.state} store={props.store}/>
//         </div>
//     )
// }

export default connect(mapStateToProps, mapDispatchToProps) (Users);
// export default UsersContainer