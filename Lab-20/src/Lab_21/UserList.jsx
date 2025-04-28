// src/components/UserList.jsx

import React, { useEffect, useState } from "react";
import { getUsers, addUser, updateUser, deleteUser } from "./UserService"
import "./styles.css";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", avatar: "" });
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  // Fetch users from API
  const fetchUsers = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  // Add new user
  const handleAddUser = async () => {
    if (!newUser.name || !newUser.avatar) return;
    const addedUser = await addUser(newUser);
    setUsers([...users, addedUser]);
    setNewUser({ name: "", avatar: "" });
  };

  // Update existing user
  const handleUpdateUser = async () => {
    if (!editingUser.name || !editingUser.avatar) return;
    await updateUser(editingUser.id, editingUser);
    setUsers(users.map((u) => (u.id === editingUser.id ? editingUser : u)));
    setEditingUser(null);
  };

  // Delete user
  const handleDeleteUser = async (id) => {
    await deleteUser(id);
    setUsers(users.filter((u) => u.id !== id));
  };

  return (
    <div className="container">
      <h2>User Management</h2>

      {/* Add User Form */}
      <div className="form">
        <input
          type="text"
          placeholder="Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Avatar URL"
          value={newUser.avatar}
          onChange={(e) => setNewUser({ ...newUser, avatar: e.target.value })}
        />
        <button onClick={handleAddUser}>Add User</button>
      </div>

      {/* Edit User Form */}
      {editingUser && (
        <div className="form">
          <h3>Edit User</h3>
          <input
            type="text"
            value={editingUser.name}
            onChange={(e) =>
              setEditingUser({ ...editingUser, name: e.target.value })
            }
          />
          <input
            type="text"
            value={editingUser.avatar}
            onChange={(e) =>
              setEditingUser({ ...editingUser, avatar: e.target.value })
            }
          />
          <button onClick={handleUpdateUser}>Save</button>
          <button onClick={() => setEditingUser(null)}>Cancel</button>
        </div>
      )}

      {/* User List */}
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id} className="user-card">
            <img src={user.avatar} alt={user.name} width="50" />
            <span>{user.name}</span>
            <div>
              <button onClick={() => setEditingUser(user)}>Edit</button>
              <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
