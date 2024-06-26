import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import ContactForm from "./components/ContactForm";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactList from "./components/ContactList";

function App() {
  return (
    <div className="App">
      <h3 className="title">연락처</h3>
      <Container>
        <Row>
          <Col>
            <ContactForm />
          </Col>
          <Col>
            <ContactList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
