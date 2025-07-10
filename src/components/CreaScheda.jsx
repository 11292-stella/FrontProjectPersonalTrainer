import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Dropdown,
  Card,
} from "react-bootstrap"
import "../styles/creascheda.css"
import { useState } from "react"
import { fetchScheda } from "../redux/action/schedaActions"
import { useDispatch, useSelector } from "react-redux"

const CreaScheda = function () {
  const dispatch = useDispatch()
  const esercizi = useSelector((state) => state.scheda.esercizi)
  const loading = useSelector((state) => state.scheda.loading)
  const error = useSelector((state) => state.scheda.error)

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

  const [selectedIds, setSelectedIds] = useState([])

  const handleCheckboxChange = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (selectedIds.length > 0) {
      dispatch(fetchScheda(selectedIds))
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
                  </div>
                </Form>
              </Col>

              {/* Visualizzazione scheda */}
              <Col md={12} className="mt-5">
                {loading && (
                  <p className="text-light text-center">Caricamento...</p>
                )}
                {error && (
                  <p className="text-danger text-center">Errore: {error}</p>
                )}
                {esercizi.length > 0 && (
                  <>
                    <h2 className="text-center text-light mb-4">
                      La tua scheda personalizzata
                    </h2>
                    <Row className="g-4 justify-content-center">
                      <Col xs={12} md={10} lg={8} xl={6}>
                        <Card className="mt-4 mb-3 scheda-p shadow-lg bg-dark text-light">
                          <Card.Header className="h4 text-center">
                            Scheda Personalizzata
                          </Card.Header>
                          <Card.Body>
                            {esercizi.map((esercizio, index) => (
                              <div
                                key={index}
                                className="mb-4 border-bottom pb-2"
                              >
                                <h5 className="text-center">
                                  {esercizio.nomeEsercizio}
                                </h5>
                                <h6 className="text-light ">
                                  Muscolo: {esercizio.muscolo}
                                </h6>
                                <p>
                                  {" "}
                                  <strong>Esercizio:</strong>{" "}
                                  {esercizio.descrizione}
                                </p>
                              </div>
                            ))}
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  </>
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
