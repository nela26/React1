import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; //importación de bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import moz1 from "./assets/img/moz1.jpg";


import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <Container>

      <Header title="2 Desafio REACT">
      </Header>
    
      <hr />
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          {" "}
          <Card
            image={moz1}
            
          />{" "}
        </Col>
      </Row>

      <hr /> 
      <Footer footerText="Todos los derechos reservados" footerDate="2022" /> 
    </Container>


  );
}

export default App;
