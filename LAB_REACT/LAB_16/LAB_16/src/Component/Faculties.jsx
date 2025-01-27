import React from "react";

const faculties = [
  { 
    id: 1, 
    name: "Dr. Nilesh Gambhava", 
    department: "CSE", 
    email: "vp@darshan.ac.in", 
    phone: "+91 - 9727747310", 
    image: "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/3---28-04-2023-02-02-42.jpg"
  },
  { 
    id: 2, 
    name: "Dr. Pradyumansinh Jadeja", 
    department: "CSE", 
    email: "pradyuman.jadeja@darshan.ac.in", 
    phone: "9988776655", 
    image: "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/6---28-04-2023-02-06-07.jpg"
  },
  { 
    id: 3, 
    name: "Prof. Maulik Trivedi", 
    department: "CSE", 
    email: "maulik.trivedi@darshan.ac.in", 
    phone: "9872314567", 
    image: "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/8---28-04-2023-02-06-25.jpg"
  },
  { 
    id: 4, 
    name: "Prof. Dixita Kagathara", 
    department: "CSE", 
    email: "dixita.kagathara@university.com", 
    phone: "9756421234", 
    image: "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/9---28-04-2023-02-06-37.jpg"
  },
  { 
    id: 5, 
    name: "Prof. Swati Sharma", 
    department: "CSE", 
    email: "swati.sharma@darshan.ac.in", 
    phone: "9965443322", 
    image: "https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/11---29-04-2023-01-44-21.jpg"
  }
];

function FacultyDemo() {
  return (
    <div className="container">
      <h1 className="text-center my-4">Faculty Members</h1>
      <div className="row">
        {faculties.map((faculty) => (
          <div className="col-md-4 mb-4" key={faculty.id}>
            <div className="card shadow-custom">
              <img src={faculty.image} className="card-img-top" alt={faculty.name} />
              <div className="card-body">
                <h5 className="card-title">{faculty.name}</h5>
                <p className="card-text">Department: {faculty.department}</p>
                <p className="card-text">Email: {faculty.email}</p>
                <p className="card-text">Phone: {faculty.phone}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FacultyDemo;