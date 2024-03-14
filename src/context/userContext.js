import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const UserContext = createContext({});


export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const[k,setK]=useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get('/profile');
        setUser(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (!user||k) {
      fetchData();
      setK(false);
    }
  }, [user]);

  // Function to update the user context
  const updateUserContext = async (userData) => {
    try {
      setIsLoading(true);
      // Update the user context variable
      setK(true);
      setUser(userData);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, isLoading, error, updateUserContext }}>
      {children}
    </UserContext.Provider>
  );
}

// export const UserContext = createContext({});


// export function UserContextProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const[k,setK]=useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setIsLoading(true);
//         const { data } = await axios.get('/profile');
//         setUser(data);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     if (!user||k) {
//       fetchData();
//       setK(false);
//     }
//   }, []);

//   // Function to update the user context
//   // const updateUserContext = async (userData) => {
//   //   try {
//   //     setIsLoading(true);
//   //     // Update the user context variable
//   //     setK(true);
//   //     setUser(userData);
//   //   } catch (error) {
//   //     setError(error.message);
//   //   } finally {
//   //     setIsLoading(false);
//   //   }
//   // };

//   return (
//     <UserContext.Provider value={{ user, setUser, isLoading, error }}>
//       {children}
//     </UserContext.Provider>
//   );
// }





