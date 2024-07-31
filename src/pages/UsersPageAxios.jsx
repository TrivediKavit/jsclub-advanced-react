import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function UsersPage() {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        fetchUsers()
    }, [])

    const fetchUsers = () => {
        setIsLoading(true)
        setTimeout(function() {
            axios.get('https://jsonplaceholder.typicode.com/users')
                .then((response) => {
                    setUsers(response.data);
                })
                .catch((error) => {
                    console.error("Error fetching users:", error.response?.status); // Handle any errors
                });
            setIsLoading(false)
        }, 3000)
    }

    const editUser = (id) => {
        const originalUser = users.find(user => user.id === id)

        const updatedUser = {
            ...originalUser,
            name: "John Doe",
            email: "john.doe@example.com",
        }

        setUsers(users.map(user => (user.id === id ? updatedUser : user)));

        setTimeout(function() {
            axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updatedUser, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((response) => {
                setUsers(users.map(user => (user.id === id ? response.data : user)));
            })
            .catch((error) => {
                console.error("Error updating user:", error.response?.status);
                setUsers(users.map(user => (user.id === id ? originalUser : user)))
            });
        }, 3000)
    }

    const deleteUser = (id) => {
        const originalUsers = [...users];

        setUsers(users.filter(user => user.id !== id));
        
        setTimeout(function() {
            axios.delete(`https://jsonplaceholder.typicode.com/usessdasrs/${id}`)
            .then(() => {
                setUsers(users.filter(user => user.id !== id))
            })
            .catch((error) => {
                console.error("Error deleting user:", error.response?.status)
                setUsers(originalUsers)
            })
        }, 3000)
    };

    return (
        <>
            <h2>Users</h2>
            <button onClick={fetchUsers}>Fetch Users</button><br /><br />
            <div className="users-list">
                {isLoading 
                    ? <h4>FETCHING USERS ...</h4>
                    : <div className="users-list">
                        {users.map(user => (
                            <div className="users-list-item" key={user.id}>
                                <span><b>Name:</b> {user.name}</span><br/>
                                <span><b>Email:</b> {user.email}</span><br/>
                                <button onClick={() => editUser(user.id)}>Edit</button> &nbsp;
                                <button onClick={() => deleteUser(user.id)}>Delete</button>
                            </div>
                        ))}
                    </div>
                }
            </div>
        </>
    )
}