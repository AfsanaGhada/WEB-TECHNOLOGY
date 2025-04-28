import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const FacultyCRUD = () => {
  const [faculties, setFaculties] = useState([
    { id: 1, name: "Dr. A. Sharma", department: "CSE", experience: 10, qualification: "PhD", contact: 9876543210 },
    { id: 2, name: "Prof. B. Mehta", department: "IT", experience: 8, qualification: "M.Tech", contact: 8765432109 },
    { id: 3, name: "Dr. C. Patel", department: "ECE", experience: 12, qualification: "PhD", contact: 7654321098 },
    { id: 4, name: "Prof. D. Verma", department: "ME", experience: 7, qualification: "M.Tech", contact: 6543210987 },
    { id: 5, name: "Dr. E. Gupta", department: "Civil", experience: 15, qualification: "PhD", contact: 5432109876 },
  ]);

  const [newFaculty, setNewFaculty] = useState({ name: "", department: "", experience: "", qualification: "", contact: "" });
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewFaculty({ ...newFaculty, [name]: value });
  };

  const handleAddEdit = () => {
    if (editId === null) {
      const newFacultyWithId = { ...newFaculty, id: faculties.length + 1 };
      setFaculties([...faculties, newFacultyWithId]);
    } else {
      setFaculties(
        faculties.map((faculty) =>
          faculty.id === editId ? { ...faculty, ...newFaculty } : faculty
        )
      );
    }
    setNewFaculty({ name: "", department: "", experience: "", qualification: "", contact: "" });
    setEditId(null);
  };

  const handleEdit = (id) => {
    const facultyToEdit = faculties.find((faculty) => faculty.id === id);
    setNewFaculty({ ...facultyToEdit });
    setEditId(id);
  };

  const deleteFaculty = (id) => {
    setFaculties(faculties.filter((faculty) => faculty.id !== id));
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Faculty List</h2>
      
      {/* Faculty Form */}
      <div className="mb-4">
        <input type="text" className="form-control mb-2" placeholder="Name" name="name" value={newFaculty.name} onChange={handleChange} />
        <input type="text" className="form-control mb-2" placeholder="Department" name="department" value={newFaculty.department} onChange={handleChange} />
        <input type="number" className="form-control mb-2" placeholder="Experience" name="experience" value={newFaculty.experience} onChange={handleChange} />
        <input type="text" className="form-control mb-2" placeholder="Qualification" name="qualification" value={newFaculty.qualification} onChange={handleChange} />
        <input type="number" className="form-control mb-2" placeholder="Contact" name="contact" value={newFaculty.contact} onChange={handleChange} />
        <button className="btn btn-primary" onClick={handleAddEdit}>{editId !== null ? "Edit" : "Add"} Faculty</button>
      </div>

      {/* Display Faculties */}
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Experience (Years)</th>
            <th>Qualification</th>
            <th>Contact</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {faculties.length > 0 ? (
            faculties.map((faculty) => (
              <tr key={faculty.id}>
                <td>{faculty.id}</td>
                <td>{faculty.name}</td>
                <td>{faculty.department}</td>
                <td>{faculty.experience}</td>
                <td>{faculty.qualification}</td>
                <td>{faculty.contact}</td>
                <td>
                  <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(faculty.id)}>Edit</button>
                  <button className="btn btn-danger btn-sm" onClick={() => deleteFaculty(faculty.id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center">No faculties available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default FacultyCRUD;