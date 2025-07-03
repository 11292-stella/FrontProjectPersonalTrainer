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
              {/* <Col
                md={12}
                className="mt-3 text-light text-start text-lg-center"
              >
                <p className="text-p">
                  🔥{" "}
                  <span className="spanText1">Benvenuto su Sneaky Workout</span>
                  <br /> qui ogni sfida diventa un' opportunità, ogni limite un
                  punto di partenza. <br />
                  Qui non si tratta solo di allenarsi, ma di superare te stesso,
                  giorno dopo giorno. <br /> 💪 Che tu sia all’inizio del tuo
                  percorso o pronto a spingerti oltre, qui troverai gli
                  strumenti, le guide e la motivazione per raggiungere i tuoi
                  obiettivi. <br /> Perché il successo non si ottiene per
                  caso... si conquista con il sudore.
                </p>
              </Col> */}
            </Row>
          </Container>

          {/**sperimento */}

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
                  </span>
                  Se sei qui, è perché non ti accontenti della mediocrità. Sai
                  che dentro di te c'è una forza inespressa, un potenziale che
                  aspetta solo di essere liberato. Su Sneaky Workout,
                  trasformiamo ogni ostacolo in una pietra miliare e spingiamo i
                  tuoi limiti oltre ogni immaginazione. Questo non è solo un
                  sito di allenamento; è la tua palestra personale, il tuo campo
                  di battaglia quotidiano.
                </p>
              </Col>
              <Col md={3}>
                <Image
                  src="/primaImg.png"
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
              <Col md={3}>
                <Image
                  src="/primaImg.png"
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
                  🔥 Qui si tratta di ben più che sollevare pesi o correre
                  chilometri. Si tratta di forgiare la tua disciplina, temprare
                  la tua volontà e dominare ogni aspetto della tua vita. Ti
                  offriamo le strategie per vincere le tue battaglie: sia che si
                  tratti di superare la fatica fisica, di affrontare le sfide
                  mentali che ti tengono bloccato, o di trovare la forza per
                  imporsi nel mondo sociale.
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
                  🔥 Sei un neofita che cerca una guida solida e motivante? O
                  sei già un veterano dell'allenamento in cerca di quel qualcosa
                  in più per superare il plateau? Indipendentemente dal tuo
                  livello, su Sneaky Workout troverai accesso esclusivo a
                  programmi di allenamento all'avanguardia, risorse didattiche
                  approfondite e una motivazione inossidabile per non mollare
                  mai.
                </p>
              </Col>
              <Col md={3}>
                <Image
                  src="/primaImg.png"
                  alt="Descrizione immagine"
                  fluid
                  rounded
                  className="home-img"
                />
              </Col>
              <h2 className="textCit text-light">
                Il tuo percorso verso la grandezza inizia qui. Sei pronto a
                svelare il tuo vero potenziale? Registrati subito a Sneaky
                Workout e inizia a scrivere la tua storia di successo!
              </h2>
            </Row>
          </Container>

          {/**sperimento */}

          <h1 className="h1-reg text-center mb-5">Registrati subito !!</h1>
          {/**Form  */}
          <Container>
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

                    <Col md={4}>
                      <Button variant="primary" type="submit" className="w-100">
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
