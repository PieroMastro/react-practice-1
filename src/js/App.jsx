import React, { useEffect, useState } from "react";


const App = () => {

  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    const controller = new AbortController();

    setLoading(true);

    const getUsersData = async () => {

      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users", { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();

        setUsers(data);
        setLoading(false);
      }
      catch (error) {
        setError(error.message);
        setLoading(false);

      }
    };

    getUsersData();
    return () => controller.abort();
  }, []);

  const deleteUser = async (userToDelete) => {
    const originalUsers = [...users];
    setUsers(users.filter(user => user.id !== userToDelete.id));

    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userToDelete.id}`,
        { method: 'DELETE', });

      if (!response.ok) {
        throw new Error("Failed to delete user");
      }
    } catch (error) {
      setError(error.message);
      setUsers(originalUsers);
    }
  }

  const addUser = async () => {
    const originalUsers = [...users];
    const newUser = { id: 0, name: 'Piero' };
    setUsers([newUser, ...users]);

    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users`, {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });

      if (!response.ok) {
        throw new Error("Failed to add user");
      }

      const addedUser = await response.json();
      setUsers([...users, addedUser])

    } catch (error) {
      setError(error.message);
      setUsers(originalUsers);
    }
  }

  const updateUser = async (user) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + '!' };
    setUsers(users.map(u => u.id === user.id ? updatedUser : u))

    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`,
        {
          method: 'PUT',
          body: JSON.stringify(updatedUser),
          headers: {
            "content-type": "aplication/json; charset=UTF-8"
          }
        });

      if (!response.ok) {
        throw new Error("Failed to update user");
      }

    } catch (error) {
      setError(error.message);
      setUsers(originalUsers);
    }
  }

  return (
    <>
      {error && <p className="text-danger">Error: {error}</p>}
      {loading === true && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>Add User</button>
      <ul className="list-group" >
        {users.map((user) => (
          <li key={user.id} className="list-group-item d-flex justify-content-between" >
            {user.name}
            <div>
              <button className="btn btn-outline-secondary me-1" onClick={() => updateUser(user)}>Update</button>
              <button className="btn btn-outline-danger" onClick={() => deleteUser(user)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;


// const App = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const getUsersData = async () => {
//       const data = await (
//         await fetch(
//           "https://jsonplaceholder.typicode.com/users"
//         )
//       ).json();

//       setUsers(data);
//     };

//     getUsersData();
//   }, []);

//   return (
//     <ul>
//       {users.map((user) => (
//         <li key={user.id}>{user.name}</li>
//       ))}
//     </ul>
//   );
// };

// export default App;
