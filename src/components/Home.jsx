import {
  Container,
  Row,
  Col,
  Image,
  Form,
  Button,
  Alert,
} from "react-bootstrap"
import "../styles/home.css"
import { useDispatch, useSelector } from "react-redux"
import { loginUser } from "../redux/action/authActions"
import { useState, useEffect } from "react"
import { registerUser } from "../redux/action/registerActions"
import { useNavigate } from "react-router-dom"
import { FaDumbbell } from "react-icons/fa"
import { FaTachometerAlt } from "react-icons/fa"
import { FaCompass } from "react-icons/fa"

const Home = function () {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [nome, setNome] = useState("")
  const [cognome, setCognome] = useState("")
  const [email, setEmail] = useState("")

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {
    loading: registerLoading,
    error: registerError,
    user: registeredUser,
  } = useSelector((state) => state.register)

  const { loading, error, token, isLoggedIn } = useSelector(
    (state) => state.authLog
  )

  const [showLoginAlert, setShowLoginAlert] = useState(false)
  const [showRegisterAlert, setShowRegisterAlert] = useState(false)

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/homeLogin")
    }
  }, [isLoggedIn, navigate])

  useEffect(() => {
    if (registeredUser) {
      setShowRegisterAlert(true)
      const timer = setTimeout(() => setShowRegisterAlert(false), 3000)
      return () => clearTimeout(timer)
    }
  }, [registeredUser])

  const submit = (e) => {
    e.preventDefault()
    const credentials = { username, password, nome, cognome, email }
    dispatch(loginUser(credentials))
  }

  const submitRegister = (e) => {
    e.preventDefault()
    const credentials = { username, password, nome, cognome, email }
    dispatch(registerUser(credentials))
  }

  return (
    <>
      <div className="min-vh-100 d-flex flex-column home-background">
        <main className="flex-grow-1">
          <Container className="my-5">
            <Row>
              <Col md={5}>
                <Image
                  src="/img1.png"
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
                <h2 className="textCit text-danger">
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
                  {" "}
                  <FaDumbbell className="me-2 text-danger " />
                  <span className="spanText1 text-warning">
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
                  src="/imvg2.png"
                  alt="Descrizione immagine"
                  fluid
                  rounded
                  className="imgv2"
                />
              </Col>
            </Row>
          </Container>

          <Container className="my-5">
            <Row>
              <Col md={4}>
                <Image
                  src="/imgv3.png"
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
                  <FaTachometerAlt className="me-2 text-danger" />
                  <span className="text-warning spanText1 ">
                    {" "}
                    Qui si tratta di ben più che sollevare pesi o correre
                    chilometri.{" "}
                  </span>
                  <br /> Si tratta di forgiare la tua disciplina, temprare la
                  tua volontà e dominare ogni aspetto della tua vita. <br /> Ti
                  offriamo le strategie per vincere le tue battaglie: <br /> sia
                  che si tratti di superare la fatica fisica, di affrontare le
                  sfide mentali che ti tengono bloccato, o di trovare la forza
                  per imporsi nel mondo sociale.
                </p>
              </Col>
            </Row>
          </Container>

          <Container className="my-5">
            <Row>
              <Col
                md={8}
                className="d-flex flex-column mt-md-0 mt-3 justify-content-center text-light order-2 order-md-1"
              >
                <p className="text-p">
                  <FaCompass className="me-2 text-danger" />{" "}
                  <span className="text-warning spanText1">
                    Sei un neofita che cerca una guida solida e motivante? O sei
                    già un veterano dell'allenamento in cerca di quel qualcosa
                    in più per superare il plateau?{" "}
                  </span>{" "}
                  <br /> Indipendentemente dal tuo livello, su Sneaky Workout
                  troverai accesso esclusivo a programmi di allenamento
                  all'avanguardia, risorse didattiche approfondite e una
                  motivazione inossidabile per non mollare mai.
                </p>
              </Col>
              <Col md={4} className="order-1 order-md-2">
                <Image
                  src="/imgv4.png"
                  alt="Descrizione immagine"
                  fluid
                  rounded
                  className="home-img"
                />
              </Col>
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
                <Form onSubmit={submit}>
                  <Row className="mb-3">
                    <Form.Group as={Col}>
                      <Form.Label>Nome</Form.Label>
                      <Form.Control
                        type="text"
                        value={nome}
                        placeholder="Enter first name"
                        onChange={(e) => setNome(e.target.value)}
                      />
                    </Form.Group>

                    <Form.Group as={Col}>
                      <Form.Label>Cognome</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter last name"
                        value={cognome}
                        onChange={(e) => setCognome(e.target.value)}
                      />
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3 align-items-end">
                    <Col md={8}>
                      <Form.Group controlId="formGridUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </Form.Group>
                    </Col>

                    <Row className="mb-3">
                      <Col xs={6}>
                        <Button
                          variant="success"
                          type="submit"
                          className="w-100 button-css mt-3"
                          disabled={loading}
                        >
                          {loading ? "Caricamento..." : "Accedi"}
                        </Button>
                        {showLoginAlert && (
                          <Alert variant="success" className="mt-3 button-css">
                            Login effettuato con successo!
                          </Alert>
                        )}
                      </Col>

                      <Col xs={6}>
                        <Button
                          variant="success"
                          type="button"
                          onClick={submitRegister}
                          disabled={registerLoading}
                          className="w-100 button-css mt-3"
                        >
                          {registerLoading
                            ? "Registrazione in corso..."
                            : "Registrati"}
                        </Button>

                        {showRegisterAlert && (
                          <Alert variant="success" className="mt-3 button-css">
                            Registrazione avvenuta con successo!
                          </Alert>
                        )}
                      </Col>
                    </Row>
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
