// components/CourseCard.js

import Link from "next/link";
import PropTypes from 'prop-types';

export default function CourseCard({ image, subject, description, price, instructor, onEdit, onDelete }) {
    return (
        <div className="course">
            <img src={image} alt={`${subject} Course Image`} />
            <h2>{subject}</h2>
            <p>{description}</p>
            <div className="course-details" style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <p>Price: ${price}</p>
                    <p>Instructor: {instructor}</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', marginTop: '20px' }}>
                    <button className="btn btn-success btn-sm" onClick={onEdit}>Edit</button>
                    <button className="btn btn-danger btn-sm" onClick={onDelete}>Delete</button>
                </div>
            </div>
        </div>
    );
}

CourseCard.propTypes = {
    image: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    instructor: PropTypes.string.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};
