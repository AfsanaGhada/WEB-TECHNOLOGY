// src/services/UserService.js

const API_URL = "https://67ce949e125cd5af757b1531.mockapi.io/faculty";

// Fetch all users
export const getUsers = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

// Add a new user
export const addUser = async (user) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  return response.json();
};

// Update an existing user
export const updateUser = async (id, user) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  return response.json();
};

// Delete a user
export const deleteUser = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
};
