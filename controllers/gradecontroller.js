const gradeservice = require('../services/gradeservice');
const Grade = require('../models/Grade');

const CreateGrade = async (req, res) => {
  try {
    const { studentName, subject, score } = req.body;
    const grade = await gradeservice.CreateGrade(studentName, subject, score);
    res.status(201).json(grade);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllGrades = async (req, res) => {
  try {
    const grades = await gradeservice.getAllGrades();
    res.status(200).json(grades);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getGradeById = async (req, res) => {
  try {
    const grade = await gradeservice.getGradeById(req.params.id);
    if (!grade) {
      return res.status(404).json({ message: 'Grade not found' });
    }
    res.status(200).json(grade);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateGrade = async (req, res) => {
  try {
    const grade = await gradeservice.updateGrade(req.params.id, req.body);
    if (!grade) {
      return res.status(404).json({ message: 'Grade not found' });
    }
    res.status(200).json(grade);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteGrade = async (req, res) => {
  try {
    const grade = await gradeservice.deleteGrade(req.params.id);
    if (!grade) {
      return res.status(404).json({ message: 'Grade not found' });
    }
    res.status(200).json({ message: 'Grade deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Corrected export statement
module.exports = { CreateGrade, getAllGrades, getGradeById, updateGrade, deleteGrade };