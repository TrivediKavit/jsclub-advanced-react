import React, { useState } from 'react'

export default function UsersPage() {
    // const users = [
    //     {
    //         "id": 1,
    //         "name": "John Doe",
    //         "email": "john.doe@example.com",
    //     },
    //     {
    //         "id": 2,
    //         "name": "Jane Doe",
    //         "email": "jane.doe@example.com",
    //     },
    // ]
    const [users, setUsers] = useState([])

    const fetchUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`)
                }
                return response.json()
            })
            .then((data) => {
                // console.log(data)
                setUsers(data)
            })
            .catch((error) => {
                console.error("Error fetching users: ", error)
            })
    }

    const editUser = (id) => {
        const updatedUser = {
            name: "John Doe",
            email: "john.doe@example.com",
        };

        fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedUser),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`)
            }
            return response.json()
        })
        .then(updatedUser => {
            setUsers(users.map(user => (user.id === id ? updatedUser : user)))
        })
        .catch(error => console.error("Error updating user:", error))
    }

    const deleteUser = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: "DELETE",
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`)
            }
            return response.json()
        })
        .then(() => {
            setUsers(users.filter(user => user.id !== id))
        })
        .catch(error => console.error("Error deleting user:", error))
    };

    return (
        <>
            <h2>Users</h2>
            <button onClick={fetchUsers}>Fetch Users</button><br /><br />
            <div className="users-list">
                {users.map(user => (
                    <div className="users-list-item" key={user.id}>
                        <span><b>Name:</b> {user.name}</span><br/>
                        <span><b>Email:</b> {user.email}</span><br/><br/>
                        <button onClick={() => editUser(user.id)}>Edit</button>
                        <button onClick={() => deleteUser(user.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </>
    )
}