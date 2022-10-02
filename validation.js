const { check } = require('express-validator');
 
exports.movieValidation = [
    check('year', 'This should be 4 numbers').isLength({ min: 10 }),
    check('review', 'This field should have texts').isLength({ min: 10 })
]
 
