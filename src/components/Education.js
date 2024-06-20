import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section className="education">
      <h2>My Education</h2>
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th>Qualification</th>
            <th>Institution</th>
            <th>Result</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bachelor of Engineering</td>
            <td>Chaitanya Bharathi Institute of Technology</td>
            <td>CGPA: 9.77</td>
            <td>2022-2026 (Studying) </td>
          </tr>
          <tr>
            <td>Intermediate</td>
            <td>Narayana Junior College, Kothapet</td>
            <td>Percentage: 98.7%</td>
            <td>2020-2022</td>
          </tr>
          <tr>
            <td>Secondary Education</td>
            <td>Narayana Group of Schools</td>
            <td>GPA: 10</td>
            <td>2019-2022</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Education;
