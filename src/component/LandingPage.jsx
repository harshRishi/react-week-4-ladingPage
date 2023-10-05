import Carousel from "../component/Carousel";

import banner1 from '../assets/learn-coding.jpg';
import banner2 from '../assets/become-expert.jpg';
import banner3 from '../assets/job-ready4.jpeg';

import { data } from "../data/cardsData";
import Cards from "../component/Cards";
import styles from "../styles/Cards.module.css";

const LandingPage = () => {
    const banners = [
        {
            content: <img src={banner1} alt="Banner 1" className="banner-image" />,
            quote: "Learn to code!",
        },
        {
            content: <img src={banner2} alt="Banner 2" className="banner-image" />,
            quote: "Become a Cobra!",
        },
        {
            content: <img src={banner3} alt="Banner 3" className="banner-image" />,
            quote: "Job Ready!",
        },
    ];

    return (
        <>
            <div className="landing-Container">
                <Carousel slides={banners} />
            </div>
            <div className={styles.cardListContainer}>
                <div className={styles.CardHeading}>Our Courses</div>
                <div className={styles.cardsContainer}>
                    {
                        data?.map((item, index) => {
                            return (
                                <Cards course={item} key={index} />
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default LandingPage;