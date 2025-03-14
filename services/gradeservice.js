const Grade = require('../models/Grade'); 

const CreateGrade = async (studentName, subject, score) => {
  if (score < 0 || score > 100) {
    throw new Error('Score must be between 0 and 100');
  }
  const newGrade = new Grade({ studentName, subject, score }); // Fix variable name
  return await newGrade.save();
};

// Get all grades
const getAllGrades = async () => {
  return await Grade.find();
};

// Get a grade by ID
const getGradeById = async (id) => {
  return await Grade.findById(id);
};

// Update a grade
const updateGrade = async (id, data) => {
  return await Grade.findByIdAndUpdate(id, data, { new: true });
};

// Delete a grade
const deleteGrade = async (id) => {
  return await Grade.findByIdAndDelete(id);
};

// Export the functions
module.exports = { CreateGrade, getAllGrades, getGradeById, updateGrade, deleteGrade };