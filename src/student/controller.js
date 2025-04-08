const pool = require('../../db');
const queries = require('./queries');

const getStudents = (request, response) => {
    pool.query(queries.getStudents, (error, results) => {
        if (error) throw error;
        
        response.status(200).json(results.rows);
    });
};

const getStudentById = (request, response) => {
    const id = parseInt(request.params.id);

    pool.query(queries.getStudentById, [id], (error, results) => {
        if (error) throw error;
        
        response.status(200).json(results.rows);
    });
}

const addStudent = (request, response) => {
    const { name, email, age, dob } = request.body;
    
    // check if email exists
    pool.query(queries.checkEmailExists, [email], (error, results) => {
        if (error) throw error;
        
        if (results.rows.length) {
            response.status(400).send("Email already exists!");
            return;  // Add return to prevent further execution
        }
        
        // add new student
        pool.query(queries.addStudent, [name, email, age, dob], (error, results) => {
            if (error) throw error;
            response.status(201).send("Student added successfully!");
        });
    });
}

const removeStudentById = (request, response) => {
    const id = parseInt(request.params.id);

    pool.query(queries.getStudentById, [id], (error, results) => {
        const noStudentFound = !results.rows.length;

        if (noStudentFound) {
            return response.send("Student not found!");
        }

        pool.query(queries.removeStudentById, [id], (error, results) => {
            if (error) throw error;
            
            response.status(200).send("Student removed successfully!");
        });
    })

    

}

const updateStudentById = (request, response) => {
    const id = parseInt(request.params.id);

    const { name } = request.body;

    pool.query(queries.getStudentById, [id], (error, results) => {
        const noStudentFound = !results.rows.length;

        if (noStudentFound) {
            return response.send("Student not found!");
        }

        pool.query(queries.updateStudentById, [name, id], (error, results) => {
            if (error) throw error;
            
            response.status(200).send("Student updated successfully!");
        });
    })

}


module.exports = {
    getStudents,
    getStudentById,
    addStudent,
    removeStudentById,
    updateStudentById
}