const express = require('express');
const router = express.Router();
const { getAllStudents, createNewStudent, getStudentById, updateStudent, deleteStudent } = require('../controllers/dbController');

router.get('/students', getAllStudents);
router.get('/students/:id', async (req, res)=>{
    try{
        const studentID = req.params.id;
        const savedStudent = await getStudentById(studentID);
        res.status(200).json({ student: savedStudent});
    } catch(e){
        res.status(500).json({ message: 'Error retreiving Student', e});
    }
});
router.post('/students', async (req, res) =>{
    try{
        const studentData = req.body;
        const savedStudent = await createNewStudent(studentData);
        res.status(201).json({ message:  'Student created successfully.', student: savedStudent});
    } catch(e){
        res.status(500).json({ message: 'Error creating new Student', e});
    }
});
router.put('/students/:id', async (req, res)=>{
    try{
        const studentId = req.params.id;
        const studentData = req.body;
        const updatedStudent = await updateStudent(studentId, studentData);
        res.status(200).json({ message: 'Student updated successfully.', student: updatedStudent});
    } catch(e){
        res.status(500).json({ message: 'Error updating student.', e});
    }
});
router.delete('/students/:id', async(req, res)=>{
    try{
        const studentId = req.params.id;
        const deletedStudent = await deleteStudent(studentId);
        res.status(200).json({ message: 'Student deleted successfully.', student: deletedStudent});
    } catch(e){
        res.status(500).json({ message: 'Error deleting student', e});
    }
});

module.exports = router;