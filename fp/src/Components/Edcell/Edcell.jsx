// src/components/ServicePage.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Edcell.css'; // Import the custom CSS file
import { useNavigate } from 'react-router-dom';
import img1 from '../../Assets/edcell/ngimg.jpg';
import img2 from '../../Assets/edcell/ed-i1.png';
import img3 from '../../Assets/edcell/ed-i2.png';
import img4 from '../../Assets/edcell/ed-i4.png';
import img5 from '../../Assets/edcell/ed-i5.png';
import img6 from '../../Assets/edcell/ed-i6.png';

import img7 from '../../Assets/edcell/ed-i7.png'
import img8 from '../../Assets/edcell/ed-i8.png';
import img9 from '../../Assets/edcell/ed-i9.png';
import img10 from '../../Assets/edcell/ed-i10.png';
import img11 from '../../Assets/edcell/ed-i11.jpg';


const Edcell = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/vjhub');
    };
    const divStyle = {
        backgroundImage: `url(${img1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '400px',
    };




    return (
        <div className="service-pageedcell">
            <main>

                <div className='vjimgedcell' style={divStyle}>
                    <br /><br /><br /><br /><br />
                    <h2 className='text-center text-white'>ED-Cell Welcomes You!</h2>
                    <div className='text-center text-white'>
                        INVITATION TO YOUNG ENTREPRENEURS
                    </div>
                </div>
                <section className="heroedcell">
                    <div className="hero-textedcell">

                        <p>In India a large number of technical institutions and institutions of higher learning have emerged since Independence as a result of systematic and conscious intervention of the Government. Many of these are comparable to the best institutions in the world. These institutions are churning out large number of trained manpower, thus fulfilling the need of the industry, R&D institutions and other sectors of economy. In the wake of economic liberalization during the 1990s, significant number of institutions of higher learning has also been promoted by the private sector.<br></br> In order to make optimal use of facilities, expertise and know-how available in these institutions for the benefit of the society, it is necessary that appropriate links are established between them and the industry. In addition, young technocrats are also looking out for opportunities to exploit their full potential by setting up their own ventures thus becoming "job generators" rather than "job seekers". This necessitates systemic interventions and new instruments, which could facilitate the development and growth of new ventures by technologies. In this context, some of the mechanisms which have become popular the world over include Science Parks, Technology Parks, Technology Business Incubators, Techno polis, School of Small Business Development, Innovation Centers, etc.

                        </p>
                        <p>VNRVJIET ED Cell has come into existence from August,2006. It is nurtured with additional inputs like regular class work by internal faculty, guest lectures, e- Talks by entrepreneurs idea generation workshops and seminars. VNRVJIET has obtained permission to undertake EDC Project from 2011-2012 with AICTE funds for a period of 3 years.</p>
                        <button className="btn btn-primary" onClick={() => window.open('https://vnrvjiet.ac.in/ed-cell/', '_blank')}>
                            Explore More
                        </button>

                    </div>
                    <div className="hero-imageedcell">
                        <img src={img2} alt="Musician with vintage instruments" />
                    </div>
                </section>

                <section className="contentedcell">
                    <div className="content-leftedcell">
                        <div className="featureedcell">
                            <h2>Vision</h2>
                            <p>
                                To emerge as a Centre of Excellence in the field of Entrepreneurship Promotion and to
                                act as a catalyst in transforming employable to entrepreneurial communities by
                                translating latent ideas into viable enterprises.
                            </p>
                            <h2> Mission</h2>
                            <p>• To develop an institutional mechanism to create entrepreneurial culture among the
                                stakeholders of the institution.<br></br>
                                • To become an acknowledged unit by prospective entrepreneurs, committed to
                                entrepreneurship education, training and research through competitive, self-motivated
                                and self-driven practices.  Immerse Yourself in the Captivating World of Vintage-Inspired Music. Our Curated Services Blend the Timeless Charm of Guitar and Keyboard Melodies with Modern Sensibilities.
                            </p>
                        </div>
                    </div>

                </section>
                <section className='content-2edcell pt-4 pb-4'>
                    <h2 className='text-center pb-4'>Our Past Events</h2>
                    <div className='d-flex'>
                        <div className='containeredcell'>
                            <div className='row'>
                                <div className='col-sm-2 col-md-6 col-lg-2 mb-4'>
                                    <h6 className='text-center'> Ecficio</h6>
                                    <img src={img3} className="img-fluid uniform-image" />
                                </div>
                                <div className='col-sm-12 col-md-6 col-lg-2 mb-4'>
                                    <h6 className='text-center'> World IP Day</h6>
                                    <img src={img4} alt="Musician with vintage instruments" className="img-fluid uniform-image" />
                                </div>
                                <div className='col-sm-12 col-md-6 col-lg-2 mb-4'>
                                    <h6 className='text-center'> Tech Entrepreneurship Programme</h6>
                                    <img src={img5} alt="Musician with vintage instruments" className="img-fluid uniform-image" />
                                </div>
                                <div className='col-sm-12 col-md-6 col-lg-2 mb-4'>
                                    <h6 className='text-center'>National Entrepreneurship Day</h6>
                                    <img src={img6} alt="Musician with vintage instruments" className="img-fluid uniform-image" />
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <section>
                    <div className="vintage-digital-sectionedcell">

                        <div className="digital-cardsedcell">
                            <div className="digital-cardedcell">
                                <img src={img10} alt="Digital" />
                                <p>Dr.A. S.Rao,
                                    President, Indian Innovators Association was honored by Sri N.Chandra Babu Naidu, Chief Minister, A. P</p>
                            </div>
                            <div className="digital-cardedcell">
                                <img src={img7} alt="Digital Realm" />
                                <p>Inauguration of AICTE Sponsored ED Cell by Dr.D.N.Rao, General Secretary of VignanaJyothion 13-05-2011</p>
                            </div>
                            <div className="digital-cardedcell">
                                <img src={img8} alt="Digital Experience" />
                                <p>Inaugural Function of Entrepreneurship Awareness Camp on 21-07-2010</p>
                            </div>
                            <div className="digital-cardedcell">
                                <img src={img9} alt="Digital Harmony" />
                                <p>(EAC-2) Group Photo (31-10-2013)</p>
                            </div>
                        </div>
                    </div>


                </section>

                <section>
                    <div className="vintage-bg-sectionedcell">
                        <div className="overlayedcell">
                            <div className="content-cardedcell">
                                <div className="card-textedcell">
                                    <h3>Explore VJHUB</h3>
                                    <p> Empowering Tech Innovators through Incubation & Mentorship in Hyderabad’s Entrepreneurial Ecosystem.</p>
                                    <button className="discover-buttonedcell" onClick={() => navigate('/vjhub')}>Discover VJHUB</button>
                                </div>
                                <div className="card-imageedcell">
                                    <img src={img11} alt="Vintage Classics" />
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

            </main>
        </div>
    );
}

export default Edcell;