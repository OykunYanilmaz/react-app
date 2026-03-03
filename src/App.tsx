import axios, { AxiosError } from "axios";
import { use, useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  // useEffect(() => {
  //   // get -> promise -> response / err
  //   axios
  //     .get<User[]>("https://jsonplaceholder.typicode.com/xusers")
  //     //  .then(response => console.log(response.data[0].name));
  //     .then((response) => setUsers(response.data))
  //     .catch((err) => setError(err.message));
  // }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      // get -> await promise -> response / err
      
      try {
        const response = await axios
          .get<User[]>("https://jsonplaceholder.typicode.com/xusers");
        
        setUsers(response.data);
      }
      catch (err) {
        setError((err as AxiosError).message);
      }
    }

    fetchUsers();
  }, []);

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <div>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
