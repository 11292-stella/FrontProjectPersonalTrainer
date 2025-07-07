import {
  Container,
  Row,
  Col,
  Image,
  Form,
  Button,
  Alert,
} from "react-bootstrap"

import "../styles/homeLogin.css"

const HomeLogin = function () {
  return (
    <>
      <div className="min-vh-100 d-flex justify-content-center align-items-center home-background">
        <main className="flex-grow-1">
          <Container>
            <Row className="justify-content-center">
              <h1 className="text-center mt-4">
                Dall'Anatomia all'Allenamento: <br /> La Tua Guida Definitiva ai
                Muscoli e agli Esercizi
              </h1>

              <Col
                md={8}
                className="d-flex justify-content-center align-items-center mt-5"
              >
                <div className="img1">
                  <Button
                    variant="outline-info"
                    className="muscle-btn-pettorale"
                  >
                    pettorale
                  </Button>
                  <Button
                    variant="outline-info"
                    className="muscle-btn-deltoide"
                  >
                    deltoide
                  </Button>
                  <Button
                    variant="outline-info"
                    className="muscle-btn-trapezio"
                  >
                    trapezio
                  </Button>
                  <Button
                    variant="outline-info"
                    className="muscle-btn-bicipite"
                  >
                    bicipite
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </main>
      </div>
    </>
  )
}

export default HomeLogin
