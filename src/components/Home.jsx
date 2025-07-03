import { Container, Row, Col, Image, Form, Button } from "react-bootstrap"
import "../styles/home.css"

const Home = function () {
  return (
    <>
      <div className="min-vh-100 d-flex flex-column home-background">
        <main className="flex-grow-1">
          <Container className="my-5">
            <Row>
              <Col md={5}>
                <Image
                  src="/imgprinc.jpeg"
                  alt="Descrizione immagine"
                  fluid
                  rounded
                  className="home-img"
                />
              </Col>
              <Col
                md={6}
                className="d-flex flex-column mt-md-0 mt-3 justify-content-center text-light "
              >
                <h2 className="textCit">
                  "Non è importante quanto colpisci forte. <br /> <br />È
                  importante quanto sai resistere ai colpi, e se hai la forza di
                  andare avanti. <br /> <br />È così che si vince!"
                </h2>
              </Col>
            </Row>
          </Container>

          {/**contenuto testuale con immagini */}

          <Container className="my-5">
            <Row>
              <Col
                md={8}
                className="d-flex flex-column mt-md-0 mt-3 justify-content-center text-light "
              >
                <p className="text-p">
                  🔥{" "}
                  <span className="spanText1">
                    Benvenuto in Sneaky Workout: L'Arena dove Conquisti Te
                    Stesso.
                  </span>{" "}
                  <br />
                  Se sei qui, è perché non ti accontenti della mediocrità. Sai
                  che dentro di te c'è una forza inespressa, un potenziale che
                  aspetta solo di essere liberato. <br /> Su Sneaky Workout,
                  trasformiamo ogni ostacolo in una pietra miliare e spingiamo i
                  tuoi limiti oltre ogni immaginazione. <br /> Questo non è solo
                  un sito di allenamento; è la tua palestra personale, il tuo
                  campo di battaglia quotidiano.
                </p>
              </Col>
              <Col md={4}>
                <Image
                  src="/1img.jpeg"
                  alt="Descrizione immagine"
                  fluid
                  rounded
                  className="home-img"
                />
              </Col>
            </Row>
          </Container>

          <Container className="my-5">
            <Row>
              <Col md={4}>
                <Image
                  src="/2img.jpeg"
                  alt="Descrizione immagine"
                  fluid
                  rounded
                  className="home-img"
                />
              </Col>
              <Col
                md={8}
                className="d-flex flex-column mt-md-0 mt-3 justify-content-center text-light "
              >
                <p className="text-p">
                  Qui si tratta di ben più che sollevare pesi o correre
                  chilometri. <br /> Si tratta di forgiare la tua disciplina,
                  temprare la tua volontà e dominare ogni aspetto della tua
                  vita. <br /> Ti offriamo le strategie per vincere le tue
                  battaglie: <br /> sia che si tratti di superare la fatica
                  fisica, di affrontare le sfide mentali che ti tengono
                  bloccato, o di trovare la forza per imporsi nel mondo sociale.
                </p>
              </Col>
            </Row>
          </Container>

          <Container className="my-5">
            <Row>
              <Col
                md={8}
                className="d-flex flex-column mt-md-0 mt-3 justify-content-center text-light "
              >
                <p className="text-p">
                  Sei un neofita che cerca una guida solida e motivante? <br />{" "}
                  O sei già un veterano dell'allenamento in cerca di quel
                  qualcosa in più per superare il plateau? <br />{" "}
                  Indipendentemente dal tuo livello, su Sneaky Workout troverai
                  accesso esclusivo a programmi di allenamento all'avanguardia,
                  risorse didattiche approfondite e una motivazione inossidabile
                  per non mollare mai.
                </p>
              </Col>
              <Col md={4}>
                <Image
                  src="/3img.jpeg"
                  alt="Descrizione immagine"
                  fluid
                  rounded
                  className="home-img"
                />
              </Col>
              <h2 className="textCit h1-reg text-light mt-5  text-center">
                Il tuo percorso verso la grandezza inizia qui. <br />
              </h2>
            </Row>
          </Container>

          {/**contenuto testuale con immagini */}

          <h1 className="h1-reg text-center mb-5">Registrati subito !!</h1>
          {/**Form  */}
          <Container className="form-text">
            <Row>
              <Col
                md={12}
                className=" d-flex justify-content-center text-light "
              >
                <Form>
                  <Row className="mb-3">
                    <Form.Group as={Col}>
                      <Form.Label>Nome</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter first name"
                      />
                    </Form.Group>

                    <Form.Group as={Col}>
                      <Form.Label>Cognome</Form.Label>
                      <Form.Control type="text" placeholder="Enter last name" />
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3 align-items-end">
                    <Col md={8}>
                      <Form.Group controlId="formGridUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter username"
                        />
                      </Form.Group>
                    </Col>

                    <Col md={4} xs={4}>
                      <Button
                        variant="primary"
                        type="submit"
                        className="w-100 mt-md-0 mt-2 button-css "
                      >
                        Submit
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </main>
      </div>
    </>
  )
}

export default Home
