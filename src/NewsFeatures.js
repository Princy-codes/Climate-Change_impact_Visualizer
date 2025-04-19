import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import './NewsFeatures.css'; 
import { useEffect } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";



const newsData = [
  { title: "1", imgSrc: "/images/img5.jpg", description: "img1." },
  { title: "2", imgSrc: "/images/img6.jpg", description: "img2" },
  { title: "3", imgSrc: "/images/img7.jpg", description: "img3" },
  { title: "4", imgSrc: "/images/img8.jpg", description: "img4" },
  { title: "5", imgSrc: "/images/img9.jpg", description: "img5" },
  { title: "6", imgSrc: "/images/img11.jpg", description: "img6" },
];

const NewsFeatures = () => {
   const [data, setData] = useState(null);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);



       
      useEffect(() => {
      
          const url = `https://newsapi.org/v2/everything?q=climate+change+weather+environment&apiKey=43d2bd65afa0409fa0c4e7cd0807bf53`  
            
          // Fetch data from the API
      
          fetch(url)
            .then(response => response.json())
            .then(data => {
              setData(data);
              console.log(data);
              setLoading(false);
              
            })
            .catch(err => {
              setError('Failed to fetch data');
              setLoading(false);
            });
        }, []);
      
        
        if (loading) {
          return( <><div style={{textAlign:"center"}}>LOading..</div></>);}
        if (error) return <div>{error}</div>;
      
  return (
    <div style={{ backgroundColor: "black", width: "100%", padding: "40px 0" }}>
      <Container className="container text-center">
        <h2 style={{ color: "crimson", textAlign: "center", marginBottom: "20px" }}>
          News and Features
        </h2>
        <Row xs={1} md={3} className="g-4">
        {data?.articles?.slice(0, 6).map((article, index) => (
            <Col key={index}>
              <Card className="news-card" style={{height:'417px'}}>
                <div className="image-container">
                  <Card.Img variant="top" src={article.urlToImage} className="news-img" />
                  <div className="overlay">
                    <p className="hover-text" style={{color:'white'}}>{article.description}</p>
                  </div>
                </div>
                <Card.Body>
                  <Card.Title style={{paddingTop:'20px'}}>{article.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row xs={1} md={6} className="g-4 mt-2" style={{display:"flex",  justifyContent:"end"}} >
          <Link to="/components/news">
            <Button style={{width:"100px"}} type="submit">More</Button>
          </Link>
        </Row>
      </Container>
    </div>
  );
};

export default NewsFeatures;
