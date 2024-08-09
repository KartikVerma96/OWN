import { check } from 'express-validator';

export const registerValidationRules = () => {
  return [
    check('name').notEmpty().withMessage('Name is required'),
    check('email').isEmail().withMessage('Email is invalid'),
    check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    check('dob').isISO8601().withMessage('Date of Birth is required').custom((value) => {
      if (new Date(value) > new Date()) {
        throw new Error('Date of birth cannot be in the future');
      }
      return true;
    }),
    check('city').notEmpty().withMessage('City is required'),
  ];
};
