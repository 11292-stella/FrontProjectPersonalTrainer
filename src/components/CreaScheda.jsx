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
import { useState, useEffect } from "react"
import { fetchScheda } from "../redux/action/schedaActions"
import { useDispatch, useSelector } from "react-redux"
import {
  saveScheda,
  fetchSchedeSalvate,
} from "../redux/action/saveSchedaAction"
import { fetchSchedePubbliche } from "../redux/action/schedaActions"
import { deleteScheda } from "../redux/action/deleteSchedaActions"
import { FaTrash } from "react-icons/fa"
import { postFeedback, fetchFeedbacks } from "../redux/action/feedBackActions"

const CreaScheda = function () {
  const dispatch = useDispatch()
  const esercizi = useSelector((state) => state.scheda.esercizi)
  console.log("Esercizi ricevuti:", esercizi)
  const saving = useSelector((state) => state.saveScheda.saving)
  const schedePubbliche = useSelector(
    (state) => state.schedePubbliche?.listaPubbliche || []
  )
  const [selectedSchedaPubblica, setSelectedSchedaPubblica] = useState(null)
  const [showModalPubblica, setShowModalPubblica] = useState(false)
  const [commento, setCommento] = useState("")
  const [voto, setVoto] = useState(5)
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

  const handleDeleteScheda = (id) => {
    if (window.confirm("Vuoi davvero eliminare questa scheda?")) {
      dispatch(deleteScheda(id))
    }
  }

  const [selectedIds, setSelectedIds] = useState([])
  const savedScheda = useSelector(selectSavedScheda)
  console.log("Schede salvate:", savedScheda)
  const feedbacks = useSelector((state) => state.feedback.feedbacks)

  const handleCheckboxChange = (id) => {
    console.log("Checkbox cliccata, ID:", id)
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    )
  }

  const handleOpenSchedaPubblica = (idx) => {
    setSelectedSchedaPubblica(idx)
    setShowModalPubblica(true)
  }
  const handleCloseModal = () => {
    setShowModal(false)
    setSelectedScheda(null)
  }

  const handleSaveScheda = () => {
    dispatch(saveScheda(esercizi))
    dispatch(fetchSchedeSalvate())
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (selectedIds.length > 0) {
      dispatch(fetchScheda(selectedIds))
    }
  }

  useEffect(() => {
    if (esercizi.length > 0) {
      setSchedaAttiva(esercizi)
    }
  }, [esercizi])

  useEffect(() => {
    dispatch(fetchSchedePubbliche())
  }, [dispatch])

  useEffect(() => {
    if (selectedSchedaPubblica !== null) {
      const idScheda = schedePubbliche[selectedSchedaPubblica].id
      dispatch(fetchFeedbacks(idScheda))
    }
  }, [selectedSchedaPubblica])

  const handleSubmitFeedback = () => {
    const idScheda = schedePubbliche[selectedSchedaPubblica].id
    dispatch(postFeedback({ commento, voto, schedaId: idScheda }))
    setCommento("")
    setVoto(5)
  }

  return (
    <>
      <div className="d-flex flex-column min-vh-100 creascheda-background">
        <Container className="flex-grow-1 py-5">
          <Row className="justify-content-center">
            <Col xs={12} md={10} lg={8} className="text-center">
              <h1 className="h1-reg  text-warning">
                Il tuo allenamento, a modo tuo!
              </h1>
              <p className="mt-3 primop  text-warning">
                Siamo pronti? Ora inizia il vero divertimento! Scatena la tua
                creatività e costruisci le tue schede personalizzate: scegli i
                muscoli che vuoi allenare e dai vita al tuo percorso unico. La
                palestra è tua!
              </p>
            </Col>
          </Row>

          {/* FORM */}
          <Row className="justify-content-center mb-4">
            <Col xs={12} sm={10} md={8} lg={6}>
              <Form onSubmit={handleSubmit}>
                <div className="d-flex flex-wrap align-items-center gap-2 mb-2 justify-content-center">
                  <Dropdown>
                    <Dropdown.Toggle
                      className="bottone-p"
                      id="dropdown-muscoli"
                    >
                      Seleziona muscoli
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      style={{
                        maxHeight: "300px",
                        overflowY: "auto",
                        minWidth: "250px",
                        backgroundColor: "rgb(68, 3,8)",
                        color: "white",
                        fontFamily: "monospace",
                      }}
                    >
                      {muscoli.map((muscolo) => {
                        console.log("Rendering muscolo:", muscolo)
                        return (
                          <Form.Check
                            key={muscolo.id}
                            type="checkbox"
                            label={muscolo.nome}
                            checked={selectedIds.includes(muscolo.id)}
                            onChange={() => handleCheckboxChange(muscolo.id)}
                            className="ps-5"
                          />
                        )
                      })}
                    </Dropdown.Menu>
                  </Dropdown>

                  <Button
                    type="submit"
                    className="bottone-p"
                    disabled={saving}
                    style={{ minWidth: "150px" }}
                  >
                    {saving ? "" : "Genera scheda"}
                  </Button>

                  {esercizi.length > 0 && (
                    <Button
                      type="button"
                      className=" bottone-p  mt-2 mt-lg-0"
                      style={{ minWidth: "180px" }}
                      onClick={handleSaveScheda}
                    >
                      Salva scheda
                    </Button>
                  )}
                </div>
              </Form>
            </Col>
          </Row>
          {/* FINE FORM  */}
          {/**Genera scheda */}
          <Col xs={12} md={12} className="mt-5">
            {schedaAttiva && schedaAttiva.length > 0 && (
              <>
                <h2 className="text-center  text-warning mb-4">
                  La tua scheda personalizzata
                </h2>
                <Row className="g-4 justify-content-center mb-2">
                  <Col xs={12} sm={10} md={8} lg={6} xl={5}>
                    <Card className="text-light shadow ">
                      <Card.Header className="h4 scheda-p  text-center">
                        Scheda Personalizzata
                      </Card.Header>
                      <Card.Body className="scheda-b">
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
          </Col>
          {/**fine genera scheda  */}

          {/* Schede salvate */}
          {savedScheda.length > 0 && (
            <>
              <h2 className="text-center   text-warning mt-5">
                Le tue schede salvate
              </h2>
              <Row className="g-3 justify-content-center">
                {savedScheda.map((scheda, idx) => {
                  console.log("Scheda ricevuta nel frontend:", scheda)
                  return (
                    <Col xs={12} sm={6} md={4} lg={3} xl={2} key={idx}>
                      <Card
                        className=" text-light small-card"
                        style={{
                          cursor: "pointer",
                          width: "100%",
                        }}
                        onClick={() => {
                          setSelectedScheda(idx)
                          setShowModal(true)
                        }}
                      >
                        <Card.Header className="scheda-p d-flex justify-content-between align-items-center">
                          <span>Scheda {idx + 1}</span>

                          {scheda.id !== undefined && (
                            <Button
                              variant="link"
                              className="text-danger p-0"
                              onClick={(e) => {
                                e.stopPropagation()
                                handleDeleteScheda(scheda.id)
                              }}
                            >
                              <FaTrash size={18} />
                            </Button>
                          )}
                        </Card.Header>
                        <Card.Body className="scheda-b">
                          <p className="text-light text-center mb-2">
                            Creata da:{" "}
                            <strong>
                              {scheda.nomeUtente || "Utente sconosciuto"}
                            </strong>
                          </p>
                          <p className="text-truncate">
                            {Array.isArray(scheda.esercizi)
                              ? scheda.esercizi
                                  .map((es) => es.nomeEsercizio)
                                  .join(", ")
                              : "Scheda vuota"}
                          </p>
                        </Card.Body>
                      </Card>
                    </Col>
                  )
                })}
              </Row>

              <Modal
                show={showModal}
                onHide={() => {
                  setShowModal(false)
                  setSelectedScheda(null)
                }}
                centered
                size="lg"
                className="modal-scheda"
              >
                <Modal.Header closeButton className=" text-white">
                  <Modal.Title>Scheda selezionata</Modal.Title>
                </Modal.Header>

                <Modal.Body className="bg-dark text-white">
                  {selectedScheda !== null &&
                    Array.isArray(savedScheda[selectedScheda]?.esercizi) &&
                    savedScheda[selectedScheda].esercizi.map((es, i) => (
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
          {/**fine schede salvate */}
          {/* Schede pubbliche */}
          {schedePubbliche.length > 0 && (
            <>
              <h2 className="text-center text-warning mt-5">
                Schede condivise dagli altri utenti
              </h2>
              <Row className="g-3 justify-content-center">
                {schedePubbliche.map((scheda, idx) => (
                  <Col
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    xl={2}
                    key={`pubblica-${idx}`}
                  >
                    <Card
                      className="bg-secondary text-light small-card"
                      style={{ cursor: "pointer", width: "100%" }}
                      onClick={() => handleOpenSchedaPubblica(idx)}
                    >
                      <Card.Header className="text-center scheda-p fw-bold">
                        Scheda pubblica {idx + 1}
                      </Card.Header>
                      <Card.Body className="scheda-b">
                        <p className="mb-2">
                          <strong>Autore:</strong>{" "}
                          {scheda.nomeUtente || "Utente sconosciuto"}
                        </p>
                        <p className="text-truncate">
                          {Array.isArray(scheda.esercizi)
                            ? scheda.esercizi
                                .map((es) => es.nomeEsercizio)
                                .join(", ")
                            : "Scheda vuota"}
                        </p>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>

              <Modal
                show={showModalPubblica}
                onHide={() => setShowModalPubblica(false)}
                centered
                size="lg"
                className="modal-scheda"
              >
                <Modal.Header closeButton>
                  <Modal.Title>Scheda pubblica selezionata</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  {selectedSchedaPubblica !== null &&
                    schedePubbliche[selectedSchedaPubblica]?.esercizi.map(
                      (es, i) => (
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
                      )
                    )}

                  <hr />
                  <h5>Feedback degli utenti:</h5>
                  {feedbacks.length === 0 && <p>Nessun feedback ancora.</p>}
                  <ul>
                    {feedbacks.map((fb, i) => (
                      <li key={i}>
                        <strong>{fb.autore}</strong> ({fb.voto}/5):{" "}
                        {fb.commento}
                        <br />
                        <small>{new Date(fb.data).toLocaleString()}</small>
                      </li>
                    ))}
                  </ul>

                  <hr />
                  <h5>Lascia un tuo feedback:</h5>
                  <Form.Group>
                    <Form.Label>Commento</Form.Label>
                    <Form.Control
                      as="textarea"
                      value={commento}
                      onChange={(e) => setCommento(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mt-2">
                    <Form.Label>Voto (1-5)</Form.Label>
                    <Form.Control
                      type="number"
                      min={1}
                      max={5}
                      value={voto}
                      onChange={(e) => setVoto(parseInt(e.target.value))}
                    />
                  </Form.Group>

                  <Button
                    variant="success"
                    className="mt-3"
                    onClick={handleSubmitFeedback}
                  >
                    Invia feedback
                  </Button>
                </Modal.Body>
              </Modal>
            </>
          )}
          {/* fine schede pubbliche */}
        </Container>
      </div>
    </>
  )
}

export default CreaScheda
