import React from 'react';
import Navbar from './navbar'; 
import './home.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Row, Col, Card, Container } from 'react-bootstrap'; 
import NewsFeatures from './NewsFeatures';
import { motion } from 'framer-motion';

export default function Home() {
    return (
        <>
            <Navbar/>

            {/* Carousel Section */}
            <motion.div
                id="carouselExampleCaptions"
                className="carousel slide"
                data-bs-ride="carousel"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner" style={{height:"500px"}}>
                    <div className="carousel-item active">
                        <img src="/images/car3.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block"></div>
                    </div>
                    <div className="carousel-item">
                        <img src="/images/car7.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="/images/car5.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </motion.div>

            {/* About Section */}
            <motion.div
                className="about"
                id="about-us"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <div className="about-content">
                    <h1>What is Climate Change?</h1>
                    <p>
                        Climate change is the long-term alteration of Earth’s climate due to natural processes and, more significantly, human activities.
                        The burning of fossil fuels, deforestation, and industrial emissions have increased greenhouse gases in the atmosphere, trapping heat and causing global temperatures to rise.
                    </p>
                    <p><b>🌍 "The Earth is changing—rising temperatures, melting glaciers, and extreme weather are warnings we cannot ignore." </b></p>
                </div>

                <motion.div
                    className="gallery"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <img src="/images/img2.jpg" alt="Gallery Image 1" />
                    <img src="/images/img3.jpg" alt="Gallery Image 2" />
                    <img src="/images/img4.jpg" alt="Gallery Image 3" />
                </motion.div>
            </motion.div>

            <NewsFeatures/>

            {/* Key Climate Insights Section */}
            <motion.div
                style={{ width: '100%', backgroundColor: 'black' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
            >
                <h2 style={{ color: 'white', textAlign: 'center', paddingTop: '20px' }}>
                    🌍 "Our Key Climate Insights"
                </h2>
                <Container className="container py-4">
                    <Row xs={1} md={2} className="g-4">
                        <Col>
                            <motion.div whileHover={{ scale: 1. }} transition={{ type: 'spring', stiffness: 300 }}>
                                <Card style={{ backgroundColor: 'black', color: 'white', height:'370px' }}>
                                   
                                    <Card.Link href="/components/Future_Impacts">
                                        <Card.Img variant="top" src="/images/impacts_climate_change.png" style={{ height: '362px' }} />
                                    </Card.Link>
                                </Card>
                            </motion.div>
                        </Col>
                        <Col>
                            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
                                <Card style={{ backgroundColor: 'black', color: 'white', height:'370px'}}>
                                   
                                    <Card.Link href="/components/graph">
                                        <Card.Img variant="top" src="/images/visual_impacts_predictions.png" style={{ height: '362px' }} />
                                    </Card.Link>
                                </Card>
                            </motion.div>
                        </Col>
                    </Row>
                </Container>
            </motion.div>

            {/* Mission Section */}
            <motion.div
                className="about"
                id="about-us"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <div className="about-mission">
                    <h1>Our Mission</h1>
                    <p>Our mission is to raise awareness and educate people about the real-time and long-term effects of climate change through interactive and data-driven visuals.</p>
                    <p style={{fontSize:"24px",textAlign:"center"}}><b>🌍 "Understanding climate change is the first step toward action." 🌍</b></p>
                    <p>We believe in creating a supportive and motivating environment that fosters growth and well-being.</p>
                    <p>With maps, research papers, and predictive models, our tool makes complex climate data accessible, engaging, and impactful.
                    By empowering individuals, educators, and policymakers, we aim to drive informed decisions and encourage meaningful climate action</p>
                </div>
            </motion.div>
        </>
    );
}
