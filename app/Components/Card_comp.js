// components/CourseCard.js

import Link from "next/link";
import PropTypes from 'prop-types';

export default function CourseCard({ image, subject, description, price, instructor }) {
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
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                    <Link href="/payment">
                        <button className="btn-5"><span>Explore</span></button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

CourseCard.propTypes = {
    image: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    instructor: PropTypes.string.isRequired,
};
