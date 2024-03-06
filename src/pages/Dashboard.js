// import { CreatePostForm } from "../components/createPost"; 
// import { UserContext } from "../context/userContext";
// import { useContext, useEffect, useState } from "react";


// export function Dashboard(){
//     // this is the initial code i used and whwn someone logins again to update the name on top the below code is used 
// // const {user}= useContext(UserContext);

// // return(
// //     <div>
// //         <h1>Dashboard</h1>
// //         {!!user && (<h2>Hi {user.name}</h2>)}
// //     </div>
// // )

// // }

// const { user } = useContext(UserContext);
// const [currentUser, setCurrentUser] = useState(user);

// useEffect(() => {
//   setCurrentUser(user);
// }, [user]);

// return (
//     <div>
//       <h1>Dashboard</h1>
//       {!!currentUser && 
//       (<>
      
//       <CreatePostForm userEmail={user.email} />
//       </>)}
//     </div>
//   );
// }

import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftColumn from './LeftColumn';
import MiddleColumn from './MiddleColumn';
import RightColumn from './RightColumn';
import { UserContextProvider } from '../context/userContext';

function Dashboard() {
  const [isPostCreated, setIsPostCreated] = useState(false);

  const handlePostCreated = () => {
    setIsPostCreated(true);
    setTimeout(() => {
      setIsPostCreated(false);
    }, 1000); // 1000 milliseconds = 1 second
  

  };
  return (
    
    <div>
   
      <Row>
        <Col xs={3}>
          <LeftColumn onSuccess={handlePostCreated}/>
        </Col>
        <Col xs={5}>
          <MiddleColumn key={isPostCreated ? 'post_created' : 'no_change'}/>
        </Col>
        <Col xs={4}>
          <RightColumn />
        </Col>
      </Row>
    </div>
    
  );
}

export default Dashboard;
