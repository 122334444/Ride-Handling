import React from 'react'

export const UserContext = createContext();
const userContext = ({children}) => {

  const [user, setUser] = useState({
    email: '',
    fullname:{
      firstname: '',
      lastname: ''
    }
  });

  return (
    <div>
      <UserContext.Provider>
        {children}
      </UserContext.Provider>
    </div>
  )
}

export default userContext
