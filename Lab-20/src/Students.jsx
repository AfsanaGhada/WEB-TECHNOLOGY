import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const StudentCRUD = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "Ruchita", dept: "CSE", sem: 4, spi: 8.5, contact: 1230985473 },
    { id: 2, name: "Shreya", dept: "BSC-IT", sem: 1, spi: 7.90, contact: 2345091123 },
    { id: 3, name: "Vandana", dept: "BCA", sem: 2, spi: 9.5, contact: 1256789023 },
    { id: 4, name: "Aarav", dept: "ECE", sem: 3, spi: 8.2, contact: 9876543210 },
    { id: 5, name: "Meera", dept: "BBA", sem: 2, spi: 8.0, contact: 8765432109 }
  ]);

  const [newStudent, setNewStudent] = useState({ name: "", dept: "", sem: "", spi: "", contact: "" });
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewStudent({ ...newStudent, [name]: value });
  };

  const handleAddEdit = () => {
    if (editId === null) {
      const newStudentWithId = { ...newStudent, id: students.length + 1 };
      setStudents([...students, newStudentWithId]);
    } else {
      setStudents(
        students.map((student) =>
          student.id === editId ? { ...student, ...newStudent } : student
        )
      );
    }
    setNewStudent({ name: "", dept: "", sem: "", spi: "", contact: "" });
    setEditId(null);
  };

  const handleEdit = (id) => {
    const studentToEdit = students.find((student) => student.id === id);
    setNewStudent({ ...studentToEdit });
    setEditId(id);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Student List</h2>
      
      {/* Student Form */}
      <div className="mb-4">
        <input type="text" className="form-control mb-2" placeholder="Name" name="name" value={newStudent.name} onChange={handleChange} />
        <input type="text" className="form-control mb-2" placeholder="Department" name="dept" value={newStudent.dept} onChange={handleChange} />
        <input type="number" className="form-control mb-2" placeholder="Semester" name="sem" value={newStudent.sem} onChange={handleChange} />
        <input type="number" step="0.01" className="form-control mb-2" placeholder="SPI" name="spi" value={newStudent.spi} onChange={handleChange} />
        <input type="number" className="form-control mb-2" placeholder="Contact" name="contact" value={newStudent.contact} onChange={handleChange} />
        <button className="btn btn-primary" onClick={handleAddEdit}>{editId !== null ? "Edit" : "Add"} Student</button>
      </div>

      {/* Display Students */}
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Semester</th>
            <th>SPI</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 ? (
            students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.dept}</td>
                <td>{student.sem}</td>
                <td>{student.spi}</td>
                <td>{student.contact}</td>
                <td>
                  <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(student.id)}>Edit</button>
                  <button className="btn btn-danger btn-sm" onClick={() => deleteStudent(student.id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center">No students available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StudentCRUD;
