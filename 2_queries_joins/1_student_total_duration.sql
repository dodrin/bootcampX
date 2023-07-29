-- SELECT id
-- FROM students
-- WHERE name = 'Ibrahim Schimmel';
-- students_id = 186
-- students.name = 'Ibrahim Schimmel'

SELECT SUM(duration) as total_duration
FROM assignment_submissions
JOIN students
ON students.id = student_id
WHERE students.name = 'Ibrahim Schimmel';
