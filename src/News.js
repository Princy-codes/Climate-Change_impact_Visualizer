import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import './News.css'
import { useEffect } from 'react';
import Navbar from './navbar';


function News() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 

  const curr = new Date;
  const lastday = new Date(curr.setDate(curr.getDate() - curr.getDay()-6));
  const today = new Date(curr.getDate());

  
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
    <>
     
    <div className='bg-dark text-white fluid' style={{width:"100%",position:"absolute", top:"0", left:"0"}} fluid>
    <Navbar/>
    <div className='sticky-top bg-dark text-white m-0'style={{ position: "sticky", marginTop:"50px", zIndex: 10, }}>
        <h1 className='text-center' >News</h1>
    </div>
    
    <div className='fluid bg-dark text-white' style={{background:"black", color:"White", height:"100%", marginBottom:"0", overflow:"hidden"}} >
      <div className='bg-dark text-white'>
          {data?.articles?.map((article, index) => (
              <Row>
                <Card className='d-flex justify-content-center bg-dark text-white mb-2' style={{ width: "100%", display: 'flex', flexWrap: 'wrap', alignItems: "baseline", height: "150px", justifyContent:"space-between"}}>
                  <div className="d-flex justify-content-between" style={{ alignItems: "baseline"}}>
                    <Col>
                    <div className="flex-item headimg " style={{position:"absolute", top:"0"}}>
                      <Card.Img className='img e-card-image ' variant='top' style={{ height: "150px", position: "relative" }} src={article.urlToImage || "/Image/steptodown.com414751.jpg"} />
                    </div>
                    </Col>
                    <Col>
                    <div className="flex-item" style={{position:"absolute", display:"block", top:"0", right:"0", marginBlockStart:"0", paddingBlockStart:"0"}}>
                      <Card.Body>
                        <div className='cbody pt-2 ms-0 ps-0'>
                        <Card.Title style={{ fontSize: "25px", overflow:"hidden", textOverflow:"ellipsis" }}>{article.title}</Card.Title>
                        <Card.Text style={{ fontSize: "20px" }}>
                          <div className='txt'> 
                        <p style={{textAlign:"start", overflow:"hidden", textOverflow:"ellipsis"}}>{article.description} <br/></p> 
                        <p className='pe-4' style={{textAlign:"end"}}><a href={article.url} target="_blank" > more</a></p>
                        </div>
                        </Card.Text>
                        </div>
                      </Card.Body>
                    </div>
                    </Col>
                  </div>
                  </Card>
                  </Row>
                ))}
            </div>
        </div>
    </div>
  </>
  );
}

export default News;
