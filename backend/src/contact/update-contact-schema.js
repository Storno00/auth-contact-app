import * as Yup from 'yup';

const createContactSchema = Yup.object({
    userId: Yup.string()
        .uuid('Invalid id'),
    name: Yup.string()
        .min(2, 'At least 2 characters are required for name')
        .max(100, 'Too many characters in name (max. 100)'),
    email: Yup.string()
        .email('Invalid email format')
        .max(100, 'Too many characters in email (max. 100)'),
    profileUrl: Yup.string()
        .url('Invalid URL'),
    phoneNumber: Yup.string()
        .min(3, 'At least 3 characters are required for name')
        .max(15, 'Too many characters in name (max. 15)'),
    postCode: Yup.string()
        .min(4, 'Post code should be 4 characters')
        .max(4, 'Post code should be 4 characters'),
    city: Yup.string()
        .min(2, 'At least 2 characters are required for name')
        .max(100, 'Too many characters in email (max. 100)'),
    country: Yup.string()
        .min(3, 'At least 3 characters are required for name')
        .max(45, 'Too many characters in name (max. 45)'),
    address: Yup.string()
        .min(5, 'At least 5 characters are required for name')
        .max(100, 'Too many characters in name (max. 100)'),
    houseNumber: Yup.string()
        .min(1, 'At least 1 characters are required for name')
        .max(10, 'Too many characters in name (max. 10)'),
});

export default createContactSchema;
