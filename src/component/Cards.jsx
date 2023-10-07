import PropTypes from 'prop-types';
import styles from '../styles/Cards.module.css';

const Cards = ({ course }) => {
    return (
        <div className={styles.card}>

            <div className={styles.supportText}>{course.titleSupport}</div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className={styles.cardTitle}>{course.title}</div>
                <img src={course.titleImageURL} alt={course.title} className={styles.cardImage} />
            </div>

            <div className={styles["style-two"]}> </div>

            <div className={styles.cardInfo}>
                <p>{course.totalProjects}</p>
                <p>{course.totalHour}</p>
            </div>

            <div className={styles.cardRating}>
                <div className={styles.cardRatingWrapper}>
                    <span>{course.rating}</span>
                    <img
                        src="https://files.codingninjas.in/4-8-stars-5588.png"
                        alt="ratings" />
                </div>
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
