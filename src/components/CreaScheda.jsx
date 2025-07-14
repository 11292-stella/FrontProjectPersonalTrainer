import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Dropdown,
  Card,
  Modal,
} from "react-bootstrap"
import "../styles/creascheda.css"
import { useState } from "react"
import { fetchScheda } from "../redux/action/schedaActions"
import { useDispatch, useSelector } from "react-redux"
import { saveScheda } from "../redux/action/saveSchedaAction"

const CreaScheda = function () {
  const dispatch = useDispatch()
  const esercizi = useSelector((state) => state.scheda.esercizi)
  console.log("Esercizi ricevuti:", esercizi)

  const loading = useSelector((state) => state.scheda.loading)
  const error = useSelector((state) => state.scheda.error)
  const selectSavedScheda = (state) => state.saveScheda?.savedScheda || []
  const [selectedScheda, setSelectedScheda] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [schedaAttiva, setSchedaAttiva] = useState(null)
  const [muscoli, setMuscoli] = useState([
    { id: 4, nome: "pettorale" },
    { id: 5, nome: "deltoide" },
    { id: 6, nome: "bicipite" },
    { id: 7, nome: "brachioradiale" },
    { id: 8, nome: "obliquo esterno" },
    { id: 9, nome: "retto addome" },
    { id: 10, nome: "trasverso addome" },
    { id: 11, nome: "trapezio" },
    { id: 12, nome: "estensori mano" },
    { id: 13, nome: "medio gluteo" },
    { id: 14, nome: "retto femorale" },
    { id: 15, nome: "vasto mediale" },
    { id: 16, nome: "vasto laterale" },
    { id: 17, nome: "soleo" },
    { id: 18, nome: "tibiale anteriore" },
    { id: 19, nome: "tricipite" },
    { id: 20, nome: "sottospinato" },
    { id: 21, nome: "grande dorsale" },
    { id: 22, nome: "grande gluteo" },
    { id: 23, nome: "sartorio" },
    { id: 24, nome: "bicipite femorale" },
    { id: 25, nome: "grande adduttore" },
    { id: 26, nome: "gastrocnemio" },
    { id: 27, nome: "peroneo breve" },
  ])

  const handleSelectScheda = (scheda) => {
    setSelectedScheda(scheda)
    setShowModal(true)
  }

  const [selectedIds, setSelectedIds] = useState([])
  const savedScheda = useSelector(selectSavedScheda)

  const handleCheckboxChange = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    )
  }
  const handleCloseModal = () => {
    setShowModal(false)
    setSelectedScheda(null)
  }

  const handleSaveScheda = () => {
    dispatch(saveScheda(esercizi))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (selectedIds.length > 0) {
      dispatch(fetchScheda(selectedIds)).then(() => {
        setSchedaAttiva(esercizi)
      })
    }
  }

  return (
    <>
      <div className="min-vh-100 d-flex justify-content-center  creascheda-background">
        <main className="flex-grow-1">
          <Container>
            <Row>
              <h1 className="text-center h1-reg mt-5">
                Il tuo allenamento, a modo tuo!
              </h1>
              <p className=" mt-2 primop text-center">
                Siamo pronti? Ora inizia il vero divertimento! Scatena la tua
                creatività e costruisci le tue schede personalizzate: scegli i
                muscoli che vuoi allenare e dai vita al tuo percorso unico. La
                palestra è tua!
              </p>
              <Col
                md={12}
                className=" d-flex justify-content-center mt-3 text-light "
              >
                <Form onSubmit={handleSubmit}>
                  <div className="d-flex align-items-center gap-2 mb-">
                    <Dropdown>
                      <Dropdown.Toggle
                        className="button-css"
                        id="dropdown-muscoli"
                      >
                        Seleziona muscoli
                      </Dropdown.Toggle>

                      <Dropdown.Menu
                        style={{
                          maxHeight: "300px",
                          overflowY: "auto",
                          minWidth: "250px",
                          backgroundColor: "rgb(68, 3, 8)",
                          color: "white",
                          fontFamily: "monospace",
                        }}
                      >
                        {muscoli.map((muscolo) => (
                          <Form.Check
                            key={muscolo.id}
                            type="checkbox"
                            label={muscolo.nome}
                            checked={selectedIds.includes(muscolo.id)}
                            onChange={() => handleCheckboxChange(muscolo.id)}
                            className="ps-5  "
                          />
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>

                    <Button type="submit" className="button-css">
                      Genera scheda
                    </Button>
                    {esercizi.length > 0 && (
                      <Button
                        type="button"
                        className="button-css"
                        onClick={() => handleSaveScheda()}
                      >
                        salva scheda
                      </Button>
                    )}
                  </div>
                </Form>
              </Col>

              {/* Visualizzazione scheda */}
              <Col md={12} className="mt-5">
                {/* Scheda appena generata */}
                {schedaAttiva && schedaAttiva.length > 0 && (
                  <>
                    <h2 className="text-center text-light mb-4">
                      La tua scheda personalizzata
                    </h2>
                    <Row className="g-4 justify-content-center mb-2">
                      <Col xs={12} md={10} lg={12}>
                        <Card className="mt-4 mb-3 scheda-p shadow-lg bg-dark text-light">
                          <Card.Header className="h4 text-center">
                            Scheda Personalizzata
                          </Card.Header>
                          <Card.Body>
                            {schedaAttiva.map((esercizio, index) =>
                              esercizio.nomeEsercizio &&
                              esercizio.descrizione &&
                              esercizio.muscolo ? (
                                <div
                                  key={index}
                                  className="mb-4 border-bottom pb-2"
                                >
                                  <h5 className="text-center">
                                    {esercizio.nomeEsercizio}
                                  </h5>
                                  <h6 className="text-light">
                                    Muscolo:{" "}
                                    {typeof esercizio.muscolo === "string"
                                      ? esercizio.muscolo
                                      : esercizio.muscolo?.nome || "?"}
                                  </h6>
                                  <p>
                                    <strong>Esercizio:</strong>{" "}
                                    {esercizio.descrizione}
                                  </p>
                                </div>
                              ) : null
                            )}
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  </>
                )}

                {/* Schede salvate */}
                {savedScheda.length > 0 && (
                  <>
                    <h2 className="text-center text-light mt-5">
                      Le tue schede salvate
                    </h2>
                    <Row className="g-3 justify-content-center">
                      {savedScheda.map((scheda, idx) => (
                        <Col xs={12} sm={6} md={4} lg={3} xl={2} key={idx}>
                          <Card
                            className="scheda-salvata-card text-light small-card"
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              setSelectedScheda(idx)
                              setShowModal(true)
                            }}
                          >
                            <Card.Header className="text-center fw-bold">
                              Scheda {idx + 1}
                            </Card.Header>
                            <Card.Body>
                              <p className="text-truncate">
                                {scheda
                                  .map((es) => es.nomeEsercizio)
                                  .join(", ")}
                              </p>
                            </Card.Body>
                          </Card>
                        </Col>
                      ))}
                    </Row>

                    <Modal
                      show={showModal}
                      onHide={() => {
                        setShowModal(false)
                        setSelectedScheda(null)
                      }}
                      centered
                      size="lg"
                      className="modale-scheda"
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>Scheda selezionata</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        {selectedScheda !== null &&
                          savedScheda[selectedScheda]?.map((es, i) => (
                            <div key={i} className="mb-3 border-bottom pb-2">
                              <h5>{es.nomeEsercizio}</h5>
                              <small>
                                Muscolo:{" "}
                                {typeof es.muscolo === "string"
                                  ? es.muscolo
                                  : es.muscolo?.nome || "?"}
                              </small>
                              <p>{es.descrizione}</p>
                            </div>
                          ))}
                      </Modal.Body>
                    </Modal>
                  </>
                )}

                {/* Scheda selezionata in card esterna */}
                {selectedScheda !== null && savedScheda[selectedScheda] && (
                  <Card className="mt-5 scheda-p shadow bg-dark text-light">
                    <Card.Header className="text-center h4">
                      Scheda selezionata
                    </Card.Header>
                    <Card.Body>
                      {savedScheda[selectedScheda].map((es, i) => (
                        <div key={i} className="mb-3 border-bottom pb-2">
                          <h5>{es.nomeEsercizio}</h5>
                          <small>
                            Muscolo:{" "}
                            {typeof es.muscolo === "string"
                              ? es.muscolo
                              : es.muscolo?.nome || "?"}
                          </small>
                          <p>{es.descrizione}</p>
                        </div>
                      ))}
                    </Card.Body>
                  </Card>
                )}
              </Col>
            </Row>
          </Container>
        </main>
      </div>
    </>
  )
}

export default CreaScheda
