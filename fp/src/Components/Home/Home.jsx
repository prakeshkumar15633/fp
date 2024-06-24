import React, { useEffect } from 'react';
import './Home.css';
import { Link } from 'react-router-dom'; 
import entrepreneurBanner from '../../Assets/home-background.jpg';
import img1 from '../../Assets/Home/IMG_1.jpg';
import img2 from '../../Assets/Home/IMG_2.jpg';
import img3 from '../../Assets/Home/IMG_3.jpg';
import img4 from '../../Assets/Home/IMG_4.avif';
import img5 from '../../Assets/Home/IMG_5.jpg';
import img6 from '../../Assets/Home/IMG_6.jpg';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    useEffect(()=>{
        
    })

    return (
        <div className="home-container">
            <header className="home-header">
                <div className="hero-section">
                    <img src={entrepreneurBanner} alt="Entrepreneurship" className="home-banner" />
                    <div className="hero-text">
                        <h1>Empowering the Next Generation of Entrepreneurs</h1>
                        <p>Explore programs, events, and resources to kickstart your entrepreneurial journey.</p>
                    </div>
                </div>
            </header>
            <section className="about-section">
                <h2>About Our Entrepreneurship Development Program</h2>
                <p>
                    Our Entrepreneurship Development Program is designed to nurture and support aspiring entrepreneurs. We provide comprehensive resources, mentorship, and networking opportunities to help students turn their innovative ideas into successful ventures. Through workshops, seminars, and hands-on projects, students gain practical experience and valuable insights into the entrepreneurial ecosystem.
                </p>
            </section>
            <section className="programs-section">
                <h2>Our Programs</h2>
                <div className="program-cards">
                    <div className="program-card">
                        <img src={img1} alt="Workshop" />
                        <h3>Workshops</h3>
                        <p>Participate in our interactive workshops designed to provide practical skills and knowledge on various aspects of entrepreneurship. Learn from industry experts and get hands-on experience.</p>
                    </div>
                    <div className="program-card">
                        <img src={img2} alt="Mentorship" />
                        <h3>Mentorship</h3>
                        <p>Connect with experienced mentors who can provide guidance, advice, and support throughout your entrepreneurial journey. Our mentors are successful entrepreneurs and industry professionals.</p>
                    </div>
                    <div className="program-card">
                        <img src={img3} alt="Incubator" />
                        <h3>Incubator</h3>
                        <p>Join our incubator program to receive the resources and support needed to develop your startup. Benefit from office space, funding opportunities, and a collaborative environment.</p>
                    </div>
                </div>
            </section>
            <section className="events-section">
                <h2>Upcoming Events</h2>
                <Slider {...settings} className="event-slider">
                    <div className="slider-item">
                        <img src={img4} alt="Event 1" />
                        <Link to="/hackathon/upcoming" className="event-button">Events</Link>
                    </div>
                    <div className="slider-item">
                        <img src={img5} alt="Event 2" />
                        <Link to="/hackathon/upcoming" className="event-button">Events</Link>
                    </div>
                    <div className="slider-item">
                        <img src={img6} alt="Event 3" />
                        <Link to="/hackathon/upcoming" className="event-button">Events</Link>
                    </div>
                </Slider>
                <div className="event-info">
                    <h3>Hackathon</h3>
                    <p>
                        Join our upcoming hackathon to collaborate, innovate, and create groundbreaking solutions. This intensive event is filled with opportunities to code, network, and have fun. Whether you're a seasoned developer or a newcomer, our hackathon provides a platform to showcase your skills and work on exciting projects. Participants will form teams, brainstorm ideas, and develop prototypes. Our mentors and judges will offer guidance and feedback. Don't miss out on the chance to connect with like-minded individuals and potentially launch your next big idea.
                    </p>
                </div>
            </section>
            <section className="success-stories-section">
                <h2>Success Stories</h2>
                <div className="success-stories-content">
                    <p>
                        Our programs have helped shape numerous successful entrepreneurs. Through our comprehensive training and support, participants have launched innovative startups, secured funding, and achieved significant milestones. The hands-on experience and mentorship provided have been crucial in their journey.
                    </p>
                    <p>
                        Many of our alumni have gone on to make significant impacts in their respective fields. From tech innovations to social enterprises, the success stories from our program are diverse and inspiring. 
                    </p>
                    <p>
                        For instance, Jane Doe, a participant from the 2020 cohort, founded a tech startup that recently raised $5 million in seed funding. John Smith developed a groundbreaking AI tool during his time in our program, which is now used by major corporations worldwide. 
                    </p>
                    <p>
                        Additionally, our community of entrepreneurs is actively contributing to the local and global economy by creating jobs and driving innovation. Their success is a testament to the value and impact of our program.
                    </p>
                    <p>
                        Join us to transform your entrepreneurial vision into reality and become part of a thriving community of changemakers. Discover how our program can make a significant difference in your entrepreneurial journey. Learn from the best, innovate with the brightest, and succeed with our support.
                    </p>
                    <Link to="/explore/alumini" className="learn-more-button">Know More</Link> 
                </div>
            </section>
        </div>
    );
}

export default Home;