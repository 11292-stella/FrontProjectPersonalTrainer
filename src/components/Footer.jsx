import { Container, Row, Col } from "react-bootstrap"
import "../styles/footer.css"

const Footer = function () {
  return (
    <>
      <Container fluid className="bg-dark text-light mt-auto py-1 footer-css">
        <Row>
          <Col className="text-start text-secondary">
            <p>🇮🇹 Italia | English (UK)</p>
            <p>
              Copyright © {new Date().getFullYear()} Sneaky Workout – Tutti i
              diritti riservati.
            </p>
            <p>
              P.IVA 01234567890 | <a href="/termini">Termini e condizioni</a> |{" "}
              <a href="/privacy">Privacy e cookie</a> |{" "}
              <a href="/contatti">Contatti</a> |{" "}
              <a href="/feedback">Lascia un feedback</a>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Footer
