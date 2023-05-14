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

  const deleteUser = (user) => {
    setUsers(users.filter(u => u.id !== user.id));
  }

  return (
    <>
      {error && <p className="text-danger">Error: {error}</p>}
      {loading === true && <div className="spinner-border"></div>}
      <ul className="list-group" >
        {users.map((user) => (
          <li key={user.id} className="list-group-item d-flex justify-content-between" >
            {user.name}
            <button className="btn btn-outline-danger" onClick={() => deleteUser(user)}>Delete</button>
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
