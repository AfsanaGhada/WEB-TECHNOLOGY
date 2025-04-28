import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const StudentCRUD1 = () => {
  const API_URL = "https://67ce949e125cd5af757b1531.mockapi.io/student";
  
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({ 
    name: "", 
    mark: "", 
    image: "" 
  });
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch all students (READ)
  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_URL);
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      console.error("Error fetching students:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewStudent({ ...newStudent, [name]: value });
  };

  // Handle image URL change
  const handleImageChange = (e) => {
    setNewStudent({ ...newStudent, image: e.target.value });
  };

  // Create or Update student
  const handleAddEdit = async () => {
    try {
      setLoading(true);
      if (editId === null) {
        // CREATE operation
        const response = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newStudent),
        });
        const createdStudent = await response.json();
        setStudents([...students, createdStudent]);
      } else {
        // UPDATE operation
        const response = await fetch(`${API_URL}/${editId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newStudent),
        });
        const updatedStudent = await response.json();
        setStudents(
          students.map((student) =>
            student.id === editId ? updatedStudent : student
          )
        );
      }
      setNewStudent({ name: "", mark: "", image: "" });
      setEditId(null);
    } catch (error) {
      console.error("Error saving student:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (student) => {
    setNewStudent({ 
      name: student.name,
      mark: student.mark,
      image: student.image
    });
    setEditId(student.id);
  };

  // Delete student
  const deleteStudent = async (id) => {
    try {
      setLoading(true);
      await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });
      setStudents(students.filter((student) => student.id !== id));
    } catch (error) {
      console.error("Error deleting student:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Student List</h2>
      
      {/* Student Form */}
      <div className="mb-4">
        <input 
          type="text" 
          className="form-control mb-2" 
          placeholder="Name" 
          name="name" 
          value={newStudent.name} 
          onChange={handleChange} 
          disabled={loading}
        />
        <input 
          type="number" 
          className="form-control mb-2" 
          placeholder="Mark" 
          name="mark" 
          value={newStudent.mark} 
          onChange={handleChange} 
          disabled={loading}
        />
        <input 
          type="text" 
          className="form-control mb-2" 
          placeholder="Image URL" 
          name="image" 
          value={newStudent.image} 
          onChange={handleImageChange} 
          disabled={loading}
        />
        <button 
          className="btn btn-primary" 
          onClick={handleAddEdit}
          disabled={loading}
        >
          {loading ? "Processing..." : editId !== null ? "Update" : "Add"} Student
        </button>
      </div>

      {/* Display Students */}
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Mark</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan="5" className="text-center">Loading...</td>
            </tr>
          ) : students.length > 0 ? (
            students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.mark}</td>
                <td>
                  {student.image ? (
                    <img 
                      src={student.image} 
                      alt={student.name} 
                      style={{ width: "50px", height: "50px", objectFit: "cover" }}
                      onError={(e) => (e.target.src = "https://via.placeholder.com/50")}
                    />
                  ) : (
                    "No Image"
                  )}
                </td>
                <td>
                  <button 
                    className="btn btn-warning btn-sm me-2" 
                    onClick={() => handleEdit(student)}
                    disabled={loading}
                  >
                    Edit
                  </button>
                  <button 
                    className="btn btn-danger btn-sm" 
                    onClick={() => deleteStudent(student.id)}
                    disabled={loading}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">No students available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StudentCRUD1;