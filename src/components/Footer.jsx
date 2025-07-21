import { Container, Row, Col } from "react-bootstrap"
import "../styles/footer.css"

const Footer = function () {
  return (
    <>
      <Container fluid className="bg-dark text-light mt-auto py-2 footer-css">
        <Row>
          <Col className="text-center text-secondary">
            <p>🇮🇹 Italia | English (UK)</p>
            <p>
              Copyright © {new Date().getFullYear()} Sneaky Workout – Tutti i
              diritti riservati.
            </p>
            <p>
              P.IVA 01234567890 | <a>Termini e condizioni</a> |{" "}
              <a>Privacy e cookie</a> | <a>Lascia un feedback</a>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Footer
