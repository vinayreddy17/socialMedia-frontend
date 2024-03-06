import React from 'react';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import Footer from '../components/Footer';
import './Home.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <Container>
        {/* <Row className="justify-content-center">
          <Col md={8}>
            <h1>Welcome to FinNews</h1>
            <p>
              FinNews is your one-stop destination for the latest financial news, updates, and insights.
            </p>
            <p>
              Stay informed about market trends, investment strategies, economic insights, personal finance, and industry updates.
            </p>
            <Button variant="primary" href="/register">Explore Now</Button>
          </Col>
        </Row> */}
         <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h1>Welcome to FinNews</h1>
          <p>
            FinNews is your one-stop destination for the latest financial news, updates, and insights. Stay informed about market trends, investment strategies, economic insights, personal finance, and industry updates.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <Button variant="primary" href="/register">Explore Now</Button>
        </Col>
      </Row>
        <Row className="mt-5">
          <Col>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://www.globalmarketingguide.com/wp-content/uploads/2020/12/New-Project-13-1.jpg"
                  alt="First slide"
                  style={{ width: '800px', height: '400px', objectFit: 'cover' }}
                />
                <Carousel.Caption>
                  <h3>Market Trends</h3>
                  <p>Stay updated on the latest trends shaping the financial markets.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://www.canarahsbclife.com/content/dam/choice/blog-inner/images/what-is-investment-strategy.jpg"
                  alt="Second slide"
                  style={{ width: '800px', height: '400px', objectFit: 'cover' }}
                />
                <Carousel.Caption>
                  <h3>Investment Strategies</h3>
                  <p>Discover effective investment strategies for maximizing your returns.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://tse1.mm.bing.net/th?id=OIP.zN1Ok_HygX-NAYjMwET7bwHaEb&pid=Api&P=0&h=220"
                  alt="Third slide"
                  style={{ width: '800px', height: '400px', objectFit: 'cover' }}
                />
                <Carousel.Caption>
                  <h3>Economic Insights</h3>
                  <p>Gain valuable insights into the economic landscape and its impact on financial markets.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://www.oberlo.com/media/1603897592-personal-finance.png?w=1824&fit=max"
                  alt="Fourth slide"
                  style={{ width: '800px', height: '400px', objectFit: 'cover' }}
                />
                <Carousel.Caption>
                  <h3>Personal Finance</h3>
                  <p>Learn practical tips and advice for managing your personal finances and investments.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="http://sonnymerryman.com/wp-content/uploads/2022/01/Industry-Update-Thumbnail.png"
                  alt="Fifth slide"
                  style={{ width: '800px', height: '400px', objectFit: 'cover' }}
                />
                <Carousel.Caption>
                  <h3>Industry Updates</h3>
                  <p>Stay informed about the latest developments and updates in various industries.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default HomePage;
