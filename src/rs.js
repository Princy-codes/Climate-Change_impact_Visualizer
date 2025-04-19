import { Button, Card } from 'react-bootstrap';
import './res.css';
import Navbar from './navbar';

const papers = [
  {
    title: "A review of the global climate change impacts, adaptation, and sustainable mitigation measures",
    authors: "Kashif Abbass, Muhammad Zeeshan Qasim, Huaming Song, Muntasir Murshed, Haider Mahmood, Ijaz Younis",
    journal: "Environmental Science and Pollution Research",
    path: "../ResearchPaper/A review of the global climate change impacts, adaptation, and sustainable mitigation measures.pdf",
  },
  {
    title: "Climate change and its environmental and health effects from 2015 to 2022: A scoping review",
    authors: "Sarah S. Abdul-Nabi, Victoria Al Karaki, Aline Khalil, Tharwat El Zahran",
    journal: "Heliyon",
    path: "../ResearchPaper/Climate change and its environmental and health effects from.pdf",
  },
  {
    title: "Global research trends in Environmental adaptation techniques focusing on climate change through scientometric lens",
    authors: "G. Shyamala, R. Gobinath, B. Hemalatha, DivyaSri Akkalla, S. Shenbaga Ezhil, V. Sathya",
    journal: "Discover Sustainability",
    path: "../ResearchPaper/Global research trends in Environmental adaptation techniques.pdf",
  },
  {
    title: "Climate Change and Heatwaves in India: Review of Impacts on Public Health, Livelihoods, and Policy",
    authors: "Sujata Saunik, Rajib Shaw",
    journal: "International Journal of Environment and Climate Change",
    path: "../ResearchPaper/Climate Change and Heatwaves in.pdf",
  },
  {
    title: "Climate Change and India: Balancing Domestic and International Interests",
    authors: "Subrata K. Mitra, Markus Pauli, Jivanta Schottli",
    journal: "The Journal of Indian and Asian Studies",
    path: "../ResearchPaper/Climate Change and India Balancing.pdf",
  },
  {
    title: "Globally representative evidence on the actual and perceived support for climate action",
    authors: "Peter Andre, Teodora Boneva, Felix Chopra, Armin Falk",
    journal: "Nature Climate Change",
    path: "../ResearchPaper/Globally representative evidence on the actual and perceived support for climate action.pdf",
  },
  {
    title: "Novel marine-climate interventions hampered by low consensus and governance preparedness",
    authors: "Emily M. Ogier, Gretta T. Pecl, Terry Hughes, Sarah Lawless, Cayne Layton, Kirsty L. Nash, Tiffany H. Morrison",
    journal: "Nature Climate Change",
    path: "../ResearchPaper/Novel marine-climate interventions.pdf",
  },
  {
    title: "Emergence of a climate oscillation in the Arctic Ocean due to global warming",
    authors: "Soong-Ki Kim, Soon-Il An",
    journal: "Nature Climate Change",
    path: "../ResearchPaper/Emergence of a climate oscillation in the.pdf",
  }
];

function Research() {
  return (
    <div className='bg-dark'>
      <Navbar/>
    <div className="container bg-dark py-4">
      <h1 className='pb-4' style={{textAlign:"center", color:"rgb(199, 238, 245)", fontFamily:"monospace"}}>|| Research Papers ||</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {papers.map((paper, index) => (
          <div className="col" key={index}>
           <Card className="h-100 shadow-sm border-0 bg-dark text-white rounded-4 overflow-hidden">
            <div className="pdf-preview">
              <iframe
                src={paper.path}
                title={paper.title}
                scrolling="no"
                className="iframe-preview"
              />
            </div>
            <Card.Body className="cbody">
              <Card.Title className="fs-6 fw-bold">{paper.title}</Card.Title><br/>
              <Card.Text className="small">
                <strong>Journal:</strong> {paper.journal}<br />
                <strong>Authors:</strong> {paper.authors}
              </Card.Text>
              <div className="d-flex gap-2">
                <Button className="btn-outline-iceberg fs-6 fw-bold" size="sm" href={paper.path} download>
                  Download
                </Button>
                <Button className="btn-outline-iceberg fs-6 fw-bold" size="sm" href={paper.path} target="_self">
                  Read Full
                </Button>
              </div>
            </Card.Body>
          </Card>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Research;
