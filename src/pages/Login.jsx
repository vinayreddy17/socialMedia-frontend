import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState,useContext } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { UserContext } from '../context/userContext';

function Login() {
 const navigate = useNavigate()
 const { updateUserContext } = useContext(UserContext);
const [data, setData] = useState({email:'',password:''})

    const handleSubmit = async(e) => {
        e.preventDefault();
        const {email,password}=data;
        
        try{
          
          const serverData=await axios.post('/login',{
            email,password
          });
             console.log(serverData.data)
          if(serverData.error){
            console.log(serverData.error)

          }else{
           console.log(serverData.data)
            updateUserContext(serverData.data);
            setData({});
            navigate('/dashboard')
          }
        }catch(error){
          console.log(error);
        }
       
       };
  return (
    
    <Form onSubmit={handleSubmit}>
         
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={data.email} onChange={(e)=>setData({...data,email:e.target.value})} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else. 
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        {/* <Form.Control type="password" placeholder="Password" value={data.password} onChange={(e)=>setData({...data,password:e.target.password})} /> */}
        <Form.Control type="password" placeholder="Password" value={data.password} onChange={(e)=>setData({...data,password:e.target.value})} />
      </Form.Group>
    
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
}

export default Login;

// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { useState,useContext } from 'react';
// import axios from 'axios';
// import {useNavigate} from 'react-router-dom';
// import { UserContext } from '../context/userContext';

// function Login() {
//  const navigate = useNavigate()
 
// const [data, setData] = useState({email:'',password:''})

//     const handleSubmit = async(e) => {
//         e.preventDefault();
//         const {email,password}=data;
        
//         try{
          
//           const serverData=await axios.post('/login',{
//             email,password
//           });
          
//           if(serverData.error){
//             console.log(serverData.error)

//           }else{
            
//             setData({});
//             navigate('/dashboard')
//           }
//         }catch(error){
//           console.log(error);
//         }
       
//        };
//   return (
    
//     <Form onSubmit={handleSubmit}>
         
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control type="email" placeholder="Enter email" value={data.email} onChange={(e)=>setData({...data,email:e.target.value})} />
//         <Form.Text className="text-muted">
//           We'll never share your email with anyone else. 
//         </Form.Text>
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         {/* <Form.Control type="password" placeholder="Password" value={data.password} onChange={(e)=>setData({...data,password:e.target.password})} /> */}
//         <Form.Control type="password" placeholder="Password" value={data.password} onChange={(e)=>setData({...data,password:e.target.value})} />
//       </Form.Group>
    
//       <Button variant="primary" type="submit">
//         Login
//       </Button>
//     </Form>
//   );
// }

// export default Login;
