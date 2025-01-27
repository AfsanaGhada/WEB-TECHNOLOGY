import React from "react";

const students = [
  { 
    id: 1, 
    name: "Vasu Devadiya", 
    department: "Computer Science", 
    email: "john.doe@university.com", 
    phone: "+91 - 1234567890", 
    image: "https://du-website.s3.ap-south-1.amazonaws.com/U01/Student-Photo/190540107043---12-05-2022-12-30-04.JPG",
    logo: "https://du-website.s3.ap-south-1.amazonaws.com/U01/Recruiter/14-18_Tatvasoft_20032020_053024AM.png"
  },
  { 
    id: 2, 
    name: "Ronak Javia", 
    department: "Mathematics", 
    email: "jane.smith@university.com", 
    phone: "+91 - 9876543210", 
    image: "https://du-website.s3.ap-south-1.amazonaws.com/U01/Student-Photo/200540107026---19-05-2023-01-04-25.JPG",
    logo:"https://du-website.s3.ap-south-1.amazonaws.com/U01/Recruiter/14-18_Tatvasoft_20032020_053024AM.png"
  },
  { 
    id: 3, 
    name: "Vatsal Patel", 
    department: "Physics", 
    email: "michael.brown@university.com", 
    phone: "+91 - 9765432109", 
    image: "https://du-website.s3.ap-south-1.amazonaws.com/U01/Student-Photo/200540107523---11-05-2022-10-10-26.JPG",
    logo:"https://du-website.s3.ap-south-1.amazonaws.com/U01/Recruiter/42gears---05-08-2022-10-31-10.png"
  },
  { 
    id: 4, 
    name: "Shareya Gandhi", 
    department: "Chemistry", 
    email: "emily.white@university.com", 
    phone: "+91 - 9988776655", 
    image: "https://du-website.s3.ap-south-1.amazonaws.com/U01/Student-Photo/180540107015---03-01-2022-10-45-07.jpg",
    logo:"https://du-website.s3.ap-south-1.amazonaws.com/U01/Recruiter/9_Simform_19032020_050654AM.png"
  },
  { 
    id: 5, 
    name: "Swapnit Kathariya", 
    department: "Biology", 
    email: "david.green@university.com", 
    phone: "+91 - 9876543120", 
    image: "https://du-website.s3.ap-south-1.amazonaws.com/U01/Student-Photo/190540107064---25-06-2022-05-54-52.JPG",
    logo:"https://du-website.s3.ap-south-1.amazonaws.com/U01/Recruiter/14-18_Tatvasoft_20032020_053024AM.png"
  }
];

function StudentDemo() {
  return (
    <div className="container">
      <h1 className="text-center my-4">Student Members</h1>
      <div className="row">
        {students.map((student) => (
          <div className="col-md-4 mb-4" key={student.id}>
            <div className="card shadow-sm">
            <img src={student.image} className="card-img-top" alt={student.name} />
            <div className="card-body">
            <h5 className="card-title" style={{ textDecoration: "underline" }}>{student.name}</h5>
            <p className="card-text">
                   <img src={student.logo} alt="Company Logo" style={{ verticalAlign: "middle", width: "100px", height: "40px"}} />
            </p>
            <p className="card-text">Department: {student.department}</p>
                <p className="card-text">Email: {student.email}</p>
                <p className="card-text">Phone: {student.phone}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentDemo;