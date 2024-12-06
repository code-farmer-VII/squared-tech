import React from 'react';
import img1 from "../assets/Image/temustar.jpg"
import img2 from "../assets/Image/img1.jpg"
import img3 from "../assets/Image/img2.jpg"
import img4 from "../assets/Image/img3.jpg"
import img5 from "../assets/Image/img4.jpg"
import img6 from "../assets/Image/img5.jpg"


const employees = [
  {
    id: 1,
    name: 'Jane Doe',
    role: 'Software Engineer',
    image: img1,
  },
  {
    id: 2,
    name: 'John Smith',
    role: 'Project Manager',
    image: img2,
  },
  {
    id: 3,
    name: 'Emily Brown',
    role: 'UI/UX Designer',
    image: img3,
  },
  {
    id: 4,
    name: 'Michael Johnson',
    role: 'Data Scientist',
    image: img4,
  },
  {
    id: 5,
    name: 'Sophia Williams',
    role: 'QA Engineer',
    image: img5,
  },
  {
    id: 6,
    name: 'David Lee',
    role: 'DevOps Engineer',
    image: img6,
  },
];

const EmployeeCard = ({ employee }) => {
  return (
    <div className="relative bg-white bg-opacity-40 backdrop-blur-md  rounded-lg p-4 hover:scale-105 transform transition-all duration-300">
      <img
        src={employee.image}
        alt={employee.name}
        className="absolute w-24 h-24 mx-auto rounded-full top-[-50px] left-1/2 transform -translate-x-1/2"
      />
      <h3 className="text-xl font-semibold text-center mt-14">{employee.name}</h3>
      <p className="text-gray-600 text-center">{employee.role}</p>
    </div>
  );
};

const EmployeeSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-24">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-20">
          {employees.map((employee) => (
            <EmployeeCard key={employee.id} employee={employee} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmployeeSection;
