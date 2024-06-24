import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './VJHub.css'; // Import the CSS file here
import img1 from '../../Assets/VJHub/img1.jpeg';
import img2 from '../../Assets/VJHub/i1.png';
import img3 from '../../Assets/VJHub/i2.png';

function VJHub() {
    const divStyle = {
        backgroundImage: `url(${img1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '400px',
    };

    return (
        <div className='p-3'>
            <div className='vjimg' style={divStyle}>
                <br /><br /><br /><br /><br />
                <h2 className='text-center text-white'>VJ Hub Welcomes You!</h2>
                <div className='text-center text-white'>
                    Empowering Tech Innovators through Incubation & Mentorship in Hyderabad’s Entrepreneurial Ecosystem
                </div>
            </div>
            <div className='mb-3 mt-3'>
                <h2 className='text-center'>Our Core Services</h2>
                <div className='text-center'>From initial concept to final execution, we’re here to guide you every step of the way.</div>
            </div>
            <div className='row row-cols-5 border-1'>
                <div className='col'>
                    <div className='card text-center'>
                        <img src={img2} className='card-img-top' alt='Pre-incubation support' height={150} width={50} />
                        <div className='card-body'>
                            <div className='card-text'>Pre-incubation support</div>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className='card text-center'>
                        <img src={img3} className='card-img-top' alt='Mentorship' height={150} width={50} />
                        <div className='card-body'>
                            <div className='card-text'>Mentorship</div>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className='card text-center'>
                        <img src={img1} className='card-img-top' alt='Funding Opportunities' height={150} width={50} />
                        <div className='card-body'>
                            <div className='card-text'>Funding Opportunities</div>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className='card text-center'>
                        <img src={img1} className='card-img-top' alt='Co-working Space' height={150} width={50} />
                        <div className='card-body'>
                            <div className='card-text'>Co-working Space</div>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className='card text-center'>
                        <img src={img1} className='card-img-top' alt='Networking Events' height={150} width={50} />
                        <div className='card-body'>
                            <div className='card-text'>Networking Events</div>
                        </div>
                    </div>
                </div>
               
                
            </div>
            <div className='abt-section'>
                <div className='row row-cols-2 border-1'>
                    <div className='col'>
                        <div className='abt-text'>
                            <h1>What do we do?</h1>
                            <p>The “Vignana Jyothi Foundation for Entrepreneurial Excellence,” commonly known as “VJ Hub,” is a Section 8 company established on July 26, 2017, under the Companies Act (2013) in India. It is situated within the premises of VNRVJIET and VJIM in Pragathi Nagar, Bachupally, Hyderabad. VJ Hub specializes in providing pre-incubation, virtual incubation, and co-incubation support to startups. It has been an integral part of the Telangana Incubators and Enablers Network for over five years, contributing to the regional ecosystem.

                                Over the years, VJ Hub has nurtured more than 25 startups, with some being initiated by students, alumni, and faculty members of VNRVJIET. Notably, four startups have successfully graduated from the program in the past two years.

                                With a primary focus on the technology sector, VJ Hub extends support to startups in terms of infrastructure and mentorship. Startups are granted access to laboratory facilities at VNRVJIET and can leverage the opportunity to recruit interns or full-time employees from any educational institution affiliated with the not-for-profit society, Vignana Jyothi.

                                Startups founded by students, alumni, and faculty members are offered complimentary usage of VJ Hub’s facilities from the ideation stage onwards. Additionally, these startups are eligible to seek seed funding support from Vignana Jyothi. VJ Hub facilitates further investor connections through its extensive collaborations within the entrepreneurial ecosystem.

                            </p>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='abt-img'>
                            <img src={img1} height={350} width={350} alt='About VJ Hub'></img>
                        </div>
                    </div>
                </div>
            </div>
            {/* New Sections */}
            <div className='events-section mt-5'>
                <h2 className='text-center'>Upcoming Events</h2>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='event-card card'>
                            <div className='card-body'>
                                <h5 className='card-title'>Startup Workshop</h5>
                                <p className='card-text'>Join our intensive workshop for budding entrepreneurs. Date: July 30, 2024.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='event-card card'>
                            <div className='card-body'>
                                <h5 className='card-title'>Investor Meet</h5>
                                <p className='card-text'>Meet and pitch to potential investors. Date: August 15, 2024.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='event-card card'>
                            <div className='card-body'>
                                <h5 className='card-title'>Tech Expo</h5>
                                <p className='card-text'>Showcase your tech innovations. Date: September 10, 2024.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='testimonials-section mt-5'>
                <h2 className='text-center'>What Our Members Say</h2>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='testimonial-card card'>
                            <div className='card-body'>
                                <p className='card-text'>“VJ Hub provided us with the mentorship and resources we needed to turn our idea into a reality.” - John Doe, Founder of TechStart</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='testimonial-card card'>
                            <div className='card-body'>
                                <p className='card-text'>“The community and networking opportunities at VJ Hub are unparalleled.” - Jane Smith, CEO of InnovateNow</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='contact-section mt-5'>
                <h2 className='text-center'>Contact Us</h2>
                <div className='row'>
                    <div className='col-md-6'>
                        <h5>Address:</h5>
                        <p>VJ Hub, VNRVJIET Campus, Pragathi Nagar, Bachupally, Hyderabad, Telangana, India</p>
                    </div>
                    <div className='col-md-6'>
                        <h5>Email:</h5>
                        <p>contact@vjhub.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VJHub;