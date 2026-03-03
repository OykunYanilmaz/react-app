import axios, { AxiosError, CanceledError } from "axios";
import { use, useEffect, useState, useSyncExternalStore } from "react";

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  // Handling errors with chaining
  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);

    // get -> promise -> response / err
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      //  .then(response => console.log(response.data[0].name));
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  // Handling errors with async and await
  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     // get -> await promise -> response / err

  //     try {
  //       const response = await axios
  //         .get<User[]>("https://jsonplaceholder.typicode.com/xusers");

  //       setUsers(response.data);
  //     }
  //     catch (err) {
  //       setError((err as AxiosError).message);
  //     }
  //   }

  //   fetchUsers();
  // }, []);

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter(u => u.id !== user.id))

    axios.delete("https://jsonplaceholder.typicode.com/users/" + user.id)
         .catch(err => {
            setError(err.message);
            setUsers(originalUsers);
         })
  }

  const addUser = () => {
    const originalUsers = [...users];
    const newUser = {id: 0, name: 'Mosh'};
    setUsers([newUser, ...users])

    axios.post("https://jsonplaceholder.typicode.com/users", newUser)
        //  .then(res => setUsers([res.data, ...users]));
         .then(({data: savedUser}) => setUsers([savedUser, ...users]))
         .catch(err => {
            setError(err.message);
            setUsers(originalUsers);
         })
  }

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>Add</button>
      <div>
        <ul className="list-group">
          {users.map((user) => (
            <li className="list-group-item d-flex justify-content-between" key={user.id}>
              {user.name}
              <button className="btn btn-outline-danger" onClick={() => deleteUser(user)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
