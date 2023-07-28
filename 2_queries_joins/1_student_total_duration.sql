-- SELECT id
-- FROM students
-- WHERE name = 'Ibrahim Schimmel';
-- students_id = 186
-- students.name = 'Ibrahim Schimmel'

SELECT SUM(duration) as total_duration
FROM assignment_submissions
INNER JOIN students
ON assignment_submissions.student_id = students.id
WHERE students.name = 'Ibrahim Schimmel';