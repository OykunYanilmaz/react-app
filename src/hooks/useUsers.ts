import { useEffect, useState } from "react";
import userService, { type User } from "../services/user-service";
import { CanceledError } from "../services/api-client";

const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    // Handling errors with chaining
    useEffect(() => {
        setLoading(true);

        // get -> promise -> response / err
        const { request, cancel } = userService.getAll<User>();
        //  .then(response => console.log(response.data[0].name));
        request
        .then((response) => {
            setUsers(response.data);
            setLoading(false);
        })
        .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message);
            setLoading(false);
        });

        return () => cancel();
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

    return { users, error, isLoading, setUsers, setError };
}

export default useUsers;