const mongoose = require('mongoose');
const Student = require('../models/students');

const getAllStudents = async(req, res) =>{
    try{
        const students = await Student.find();
        res.status(200).json(students);
    } catch(e){
        console.error('Error retrieving students:', e);
        res.status(500).json({ message: 'Error retrieving students', e});
    }
};

const getStudentById = async(id)=>{
    try{
        const student = await Student.findById(id);

        if(!student) throw new Error('Student not found');

        return student;
    } catch(e){
        console.error('Error finding student by ID:', e);
        throw e;
    }
}

const createNewStudent = async(studentData) =>{
    try{
        const newStudent = new Student(studentData);
        const savedStudent = await newStudent.save();
        return savedStudent;
    } catch(e){
        console.error('Error creating student:', e);
        throw e;
    }
}

const updateStudent = async(id, studentData) =>{
    try{
        const updatedStudent = await Student.findByIdAndUpdate(id, studentData, { new: true });

        if (!updatedStudent){
            return res.status(404).json({ message: "Student not found."});
        }

        return updatedStudent;
    } catch(e){
        console.error('Error updating student:', e);
    }
}

const deleteStudent = async (id) => {
  try {
    const deletedStudent = await Student.findByIdAndDelete(id);

    if (!deletedStudent) {
      throw new Error("Error: student not found.");
    }

    return deletedStudent;
  } catch (e) {
    console.error("Error deleting student:", e);
    throw error;
  }
};

module.exports ={ getAllStudents, createNewStudent, getStudentById, updateStudent, deleteStudent };