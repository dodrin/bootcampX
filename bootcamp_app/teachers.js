const { Pool } = require("pg");
const { user } = require("pg/lib/defaults");

const pool = new Pool({
  user: "vagrant",
  password: "123",
  host: "localhost",
  database: "bootcampx",
});

const inputCohort = process.argv[2] || 'JUL02';
const values = [`${inputCohort}`];
const queryString = `
  SELECT DISTINCT teachers.name AS teacher, cohorts.name AS cohort, COUNT(assistance_requests) AS total_assistances
  FROM teachers
  JOIN assistance_requests ON teacher_id = teachers.id
  JOIN students ON students.id = student_id
  JOIN cohorts ON cohorts.id = students.cohort_id
  WHERE cohorts.name = $1
  GROUP BY teachers.name, cohorts.name
  ORDER BY teacher;
`;

pool
  .query(queryString, values)
  .then((res) => {
    console.log(`connected`);
    res.rows.forEach((user) => {
      console.log(`${user.cohort}: ${user.teacher}`);
    });
  })
  .catch((err) => console.error("query error", err.stack));
