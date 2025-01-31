import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Sample faculty data
const faculties = [
  {
    createdAt: "2024-11-27T08:40:52.857Z",
    FacultyName: "Intelligent Concrete Cheese",
    FacultyImage:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/211.jpg",
    FacultyInitial: "AS",
    FacultyDescription:
      "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    FacultyDateOfBirth: "1996-01-06T15:08:56.674Z",
    id: "32",
  },
  {
    createdAt: "2024-11-27T08:40:52.857Z",
    FacultyName: "Alice Brown",
    FacultyImage:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/212.jpg",
    FacultyInitial: "AB",
    FacultyDescription: "Expert in Machine Learning and AI.",
    FacultyDateOfBirth: "1975-03-22T15:08:56.674Z",
    id: "33",
  },
  {
    createdAt: "2024-11-27T08:40:52.857Z",
    FacultyName: "Andrew Smith",
    FacultyImage:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/213.jpg",
    FacultyInitial: "AS",
    FacultyDescription: "Professor of Physics with 20 years of experience.",
    FacultyDateOfBirth: "1979-11-30T15:08:56.674Z",
    id: "34",
  },
  {
    createdAt: "2024-11-27T08:40:52.857Z",
    FacultyName: "David Williams",
    FacultyImage:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/214.jpg",
    FacultyInitial: "DW",
    FacultyDescription: "Head of Chemistry Department.",
    FacultyDateOfBirth: "1990-05-14T15:08:56.674Z",
    id: "35",
  },
];

// Task 3: Faculties whose names start with 'A'
const facultiesStartingWithA = faculties.filter((faculty) =>
  faculty.FacultyName.startsWith("A")
);

// Task 4: Faculties born before 1980
const facultiesBefore1980 = faculties.filter(
  (faculty) => new Date(faculty.FacultyDateOfBirth).getFullYear() < 1980
);

const FacultyList = () => {
  return (
    <div className="container mt-4">
      {/* Task 1: Faculties in a Table */}
      <h2>All Faculties (Table View)</h2>
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Initial</th>
            <th>Date of Birth</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {faculties.map((faculty) => (
            <tr key={faculty.id}>
              <td>{faculty.id}</td>
              <td>
                <img
                  src={faculty.FacultyImage}
                  alt={faculty.FacultyName}
                  width="50"
                  height="50"
                  className="rounded-circle"
                />
              </td>
              <td>{faculty.FacultyName}</td>
              <td>{faculty.FacultyInitial}</td>
              <td>{new Date(faculty.FacultyDateOfBirth).toLocaleDateString()}</td>
              <td>{faculty.FacultyDescription}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Task 2: Faculties as Bootstrap Cards */}
      <h2>All Faculties (Card View)</h2>
      <div className="row">
        {faculties.map((faculty) => (
          <div key={faculty.id} className="col-md-4 mb-4">
            <div className="card">
              <img
                src={faculty.FacultyImage}
                className="card-img-top"
                alt={faculty.FacultyName}
              />
              <div className="card-body">
                <h5 className="card-title">{faculty.FacultyName}</h5>
                <p className="card-text">{faculty.FacultyDescription}</p>
                <p className="card-text">
                  <strong>DOB:</strong>{" "}
                  {new Date(faculty.FacultyDateOfBirth).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Task 3: Faculties with Name Starting with 'A' */}
      <h2>Faculties whose names start with 'A'</h2>
      <ul className="list-group">
        {facultiesStartingWithA.length > 0 ? (
          facultiesStartingWithA.map((faculty) => (
            <li key={faculty.id} className="list-group-item">
              <img
                src={faculty.FacultyImage}
                alt={faculty.FacultyName}
                width="30"
                height="30"
                className="rounded-circle me-2"
              />
              {faculty.FacultyName} - {faculty.FacultyInitial}
            </li>
          ))
        ) : (
          <li className="list-group-item">No faculty found.</li>
        )}
      </ul>

      {/* Task 4: Faculties born before 1980 */}
      <h2>Faculties born before 1980</h2>
      <ul className="list-group">
        {facultiesBefore1980.length > 0 ? (
          facultiesBefore1980.map((faculty) => (
            <li key={faculty.id} className="list-group-item">
              <img
                src={faculty.FacultyImage}
                alt={faculty.FacultyName}
                width="30"
                height="30"
                className="rounded-circle me-2"
              />
              {faculty.FacultyName} - DOB:{" "}
              {new Date(faculty.FacultyDateOfBirth).toLocaleDateString()}
            </li>
          ))
        ) : (
          <li className="list-group-item">No faculty found.</li>
        )}
      </ul>
    </div>
  );
};

export default FacultyList;
