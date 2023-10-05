import PropTypes from 'prop-types';
import styles from '../styles/Cards.module.css';

const Cards = ({ course }) => {
    return (
        <div className={styles.card}>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <img src={course.titleImageURL} alt={course.title} className={styles.cardImage} />
                <div className={styles.cardTitle}>{course.title}</div>
            </div>
            <div className={styles.cardInfo}>
                <p>{course.titleSupport}</p>
                <p>{course.totalHour}</p>
                <p>{course.totalProjects}</p>
            </div>
            <div className={styles.cardRating}>
                <p>{course.rating}</p>
                <p>{course.enrolledStudents}</p>
            </div>
        </div >
    );
};

Cards.propTypes = {
    course: PropTypes.shape({
        titleSupport: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        titleImageURL: PropTypes.string.isRequired,
        totalHour: PropTypes.string.isRequired,
        totalProjects: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        enrolledStudents: PropTypes.string.isRequired,
    }).isRequired,
};

export default Cards;
