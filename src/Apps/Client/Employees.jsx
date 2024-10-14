import React from "react";
import { Link } from "react-router-dom";

const employees = [
  {
    id: 1,
    name: "Reem Ahmed",
    position: "UI/UX Designer",
    branch: "Al malaz",
    contract: "Annual",
    joiningDate: "1/12/2022",
    employeeId: "12345789",
    role: "Sales",
    level: "Non management",
  },
  // Add more employee objects here as needed
];

export default function Employees() {
  return (
    <div className="my-4">
      <div className="p-4 bg-white rounded-lg shadow-round">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-xl font-semibold">Employees</h1>
          </div>
          <div className="flex gap-2">
            <Link
              to="/client/AddEmployees/*"
              className="py-1 px-2 bg-primary text-white rounded-lg"
            >
              + Add New Employee
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {employees.map((employee) => (
            <div
              key={employee.id}
              className="border p-4 rounded-xl shadow-round"
            >
              <div className="flex items-center mb-4">
                <img
                  src="https://via.placeholder.com/40"
                  alt={employee.name}
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                  <h2 className="font-semibold">{employee.name}</h2>
                  <p>{employee.position}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-[2px] bg-[#234895] text-white rounded-lg">
                  {employee.role}
                </span>
                <span className="px-2 py-[2px] bg-[#234895] text-white rounded-lg">
                  {employee.level}
                </span>
              </div>
              <div className="text-sm">
                <p>
                  <strong>Employee ID:</strong> {employee.employeeId}
                </p>
                <p>
                  <strong>Branch:</strong> {employee.branch}
                </p>
                <p>
                  <strong>Contract:</strong> {employee.contract}
                </p>
                <p>
                  <strong>Joining date:</strong> {employee.joiningDate}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
