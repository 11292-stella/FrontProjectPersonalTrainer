import {
  Container,
  Row,
  Col,
  Image,
  Form,
  Button,
  Alert,
  Modal,
} from "react-bootstrap"

import muscleImages from "../muscleImages.json"

import { useDispatch, useSelector } from "react-redux"
import { openModal, closeModal } from "../redux/action/modalActions"
import { useEffect } from "react"
import { fetchMuscles } from "../redux/action/muscleActions"
import { fetchEsercizi } from "../redux/action/esercizioAction"

import "../styles/homeLogin.css"

const HomeLogin = function () {
  const dispatch = useDispatch()
  const { isOpen, selectedMuscle } = useSelector((state) => state.modal)
  const imageSrc = muscleImages[selectedMuscle]
  const { muscles, loading, error } = useSelector((state) => state.muscles)
  const token = useSelector((state) => state.authLog.token)
  const esercizi = useSelector((state) => state.esercizi.exercise)

  useEffect(() => {
    console.log("Token in HomeLogin useEffect:", token)

    if (token) {
      dispatch(fetchMuscles())
    }
  }, [token, dispatch])

  useEffect(() => {
    if (token) {
      dispatch(fetchEsercizi())
    }
  }, [token, dispatch])
  const selectedMuscleData = Array.isArray(muscles)
    ? muscles.find(
        (muscle) => muscle.nome.toLowerCase() === selectedMuscle?.toLowerCase()
      )
    : undefined

  const selectedEsercizi = esercizi.filter(
    (es) => es.muscolo?.id === selectedMuscleData?.id
  )

  console.log("selectedMuscle:", selectedMuscle)
  console.log("muscles:", muscles)
  console.log("selectedMuscleData:", selectedMuscleData)

  return (
    <>
      <div className="min-vh-100 d-flex justify-content-center align-items-center home-background">
        <main className="flex-grow-1">
          <Container>
            <Row className="justify-content-center">
              <h1 className="text-center mt-5">
                Dall'Anatomia all'Allenamento: <br /> La Tua Guida Definitiva ai
                Muscoli e agli Esercizi
              </h1>

              <div className="primop text-center">
                <h2 className="text-center mt-3 mb-4">
                  Costruisci la tua forza, <br /> un muscolo alla volta
                </h2>{" "}
                Ogni grande trasformazione inizia con la consapevolezza. <br />{" "}
                In questo viaggio esploreremo la parte superiore del corpo: la
                sede della tua potenza,
                <br /> della tua postura e della tua determinazione. <br />{" "}
                <br /> Scoprirai i muscoli che ti permettono di sollevare,
                spingere, tirare e abbracciare il mondo con più forza. Per ogni
                gruppo muscolare ti guideremo con: una spiegazione semplice e
                chiara; <br /> gli esercizi più efficaci per scolpire il tuo
                corpo e superare i tuoi limiti. <br /> Il tuo corpo è il tuo
                strumento. <br /> Impara a conoscerlo, allenalo con intenzione,
                e diventa la versione più forte di te stesso. <br /> <br />{" "}
                <span className="citazioni">
                  {" "}
                  “La forza non nasce solo nei muscoli, ma nella volontà di
                  usarli per sollevare te stesso ogni giorno, dentro e fuori la
                  palestra.”
                </span>
              </div>

              <Col
                md={8}
                className="d-flex justify-content-center align-items-center mt-5"
              >
                <div className="img1 ">
                  <Button
                    variant="outline-info py-0"
                    className="muscle-btn-pettorale"
                    onClick={() => dispatch(openModal("pettorale"))}
                  >
                    pettorale
                  </Button>
                  <Button
                    variant="outline-info py-0"
                    className="muscle-btn-deltoide"
                    onClick={() => dispatch(openModal("deltoide"))}
                  >
                    deltoide
                  </Button>
                  <Button
                    variant="outline-info py-0"
                    className="muscle-btn-trapezio"
                    onClick={() => dispatch(openModal("trapezio"))}
                  >
                    trapezio
                  </Button>
                  <Button
                    variant="outline-info py-0"
                    className="muscle-btn-bicipite"
                    onClick={() => dispatch(openModal("bicipite"))}
                  >
                    bicipite
                  </Button>
                  <Button
                    variant="outline-info py-0"
                    className="muscle-btn-brachioradiale"
                    onClick={() => dispatch(openModal("brachioradiale"))}
                  >
                    brachio <br />
                    radiale
                  </Button>
                  <Button
                    variant="outline-info py-0"
                    className="muscle-btn-obliquo-esterno"
                    onClick={() => dispatch(openModal("obliquo esterno"))}
                  >
                    obliquo <br /> esterno
                  </Button>
                  <Button
                    variant="outline-info py-0"
                    className="muscle-btn-retto-addome"
                    onClick={() => dispatch(openModal("retto addome"))}
                  >
                    retto <br />
                    addome
                  </Button>
                  <Button
                    variant="outline-info py-0"
                    className="muscle-btn-trasverso-addome"
                    onClick={() => dispatch(openModal("trasverso addome"))}
                  >
                    trasverso <br />
                    addome
                  </Button>
                  <Button
                    variant="outline-info py-0"
                    className="muscle-btn-estensori-mano"
                    onClick={() => dispatch(openModal("estensori mano"))}
                  >
                    estensori <br />
                    mano
                  </Button>
                </div>

                <Modal show={isOpen} onHide={() => dispatch(closeModal())}>
                  <Modal.Header closeButton>
                    <Modal.Title>
                      {selectedMuscleData?.nome || selectedMuscle}
                    </Modal.Title>
                  </Modal.Header>

                  <Modal.Body>
                    <img
                      src={`/muscoli/${selectedMuscle}.png`}
                      alt={selectedMuscle}
                      style={{ width: "100%", borderRadius: "10px" }}
                    />
                    <p className="mt-3 descrizioni">
                      {selectedMuscleData?.descrizione ||
                        "Descrizione non disponibile."}
                    </p>

                    {selectedEsercizi.length > 0 ? (
                      <>
                        <h5 className="mt-4 descrizioni">
                          Esercizi consigliati:
                        </h5>
                        <ul className="ps-3">
                          {selectedEsercizi.map((esercizio, index) => (
                            <li key={index} className="mb-2 descrizioni">
                              <strong>{esercizio.nome}</strong>:{" "}
                              {esercizio.descrizione}
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <p className="text-muted  mt-3">
                        Nessun esercizio disponibile per questo muscolo.
                      </p>
                    )}
                  </Modal.Body>

                  <Modal.Footer>
                    <Button
                      variant="secondary"
                      onClick={() => dispatch(closeModal())}
                      className="button-css"
                    >
                      Chiudi
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Col>

              {/**Seconda img */}

              <div className="primop text-center mt-5">
                <h2 className="mb-3">
                  La forza parte da terra: esplora la parte inferiore del corpo{" "}
                </h2>{" "}
                La vera potenza non si costruisce solo con le braccia, ma si
                radica nelle fondamenta: <br /> gambe forti, glutei attivi,
                stabilità incrollabile. <br />
                In questa sezione ci immergeremo nell’anatomia della parte
                inferiore del corpo <br /> <br />
                la struttura che ti sostiene, ti spinge avanti e ti permette di
                affrontare ogni sfida con slancio. <br /> Scoprirai i muscoli
                che ti permettono di camminare, correre, saltare e restare
                saldo, anche quando la vita ti mette alla prova. <br /> Per ogni
                gruppo muscolare ti guideremo con: <br /> una spiegazione
                semplice e chiara; <br /> gli esercizi più efficaci per
                rafforzare le gambe, i glutei e il core, scolpendo il tuo corpo
                e superando i tuoi limiti. <br /> Il tuo corpo è il tuo
                strumento. <br /> Costruisci la forza che parte da dentro… e da
                terra. <br /> <br />{" "}
                <span className="citazioni">
                  “Non puoi costruire un grattacielo su fondamenta fragili.
                  Allena le tue basi, e tutto il resto si eleverà con te.”
                </span>
              </div>
              <Col
                md={8}
                className="d-flex justify-content-center align-items-center mt-5"
              >
                <div className="img2">
                  <Button
                    variant="outline-info py-0"
                    className="muscle-btn-retto-femorale"
                    onClick={() => dispatch(openModal("retto femorale"))}
                  >
                    retto <br />
                    femorale
                  </Button>

                  <Button
                    variant="outline-info py-0"
                    className="muscle-btn-vasto-mediale"
                    onClick={() => dispatch(openModal("vasto mediale"))}
                  >
                    vasto
                    <br />
                    mediale
                  </Button>
                  <Button
                    variant="outline-info py-0"
                    className="muscle-btn-vasto-laterale"
                    onClick={() => dispatch(openModal("vasto laterale"))}
                  >
                    vasto
                    <br />
                    laterale
                  </Button>
                  <Button
                    variant="outline-info py-0"
                    className="muscle-btn-sartorio"
                    onClick={() => dispatch(openModal("sartorio"))}
                  >
                    sarorio
                  </Button>
                  <Button
                    variant="outline-info py-0"
                    className="muscle-btn-medio-gluteo"
                    onClick={() => dispatch(openModal("medio gluteo"))}
                  >
                    medio
                    <br />
                    gluteo
                  </Button>
                  <Button
                    variant="outline-info py-0"
                    className="muscle-btn-tibiale-anteriore"
                    onClick={() => dispatch(openModal("tibiale anteriore"))}
                  >
                    tibiale
                    <br />
                    anteriore
                  </Button>
                  <Button
                    variant="outline-info py-0"
                    className="muscle-btn-soleo"
                    onClick={() => dispatch(openModal("soleo"))}
                  >
                    soleo
                  </Button>
                </div>
              </Col>

              {/**terza img */}
              <p className="primop text-center mt-5">
                Dopo aver esplorato la parte inferiore del corpo, è il momento
                di volgere lo sguardo alla parte posteriore: <br /> la struttura
                che ti sorregge, ti stabilizza e ti accompagna in ogni
                movimento. <br /> <br /> Molti dei muscoli coinvolti <br /> come
                glutei e bicipiti femorali <br />
                li abbiamo già incontrati, ma qui li vedremo nel contesto più
                ampio della catena posteriore, <br /> insieme ai dorsali e ad
                altri stabilizzatori fondamentali. <br /> <br /> Allenare ciò
                che sta dietro significa costruire forza autentica, equilibrio e
                resistenza. <br /> Perché è proprio ciò che non si vede a
                determinare quanto lontano puoi arrivare. <br /> <br />{" "}
                <span className="citazioni">
                  {" "}
                  “La stabilità non si conquista con l’apparenza, ma con la
                  forza silenziosa che lavora dietro ogni passo.”
                </span>
              </p>
              <Col
                md={8}
                className="d-flex justify-content-center align-items-center mt-5"
              >
                <div className="img3">
                  <Button
                    variant="outline-info py-0"
                    className="muscle-btn-grande-dorsale"
                    onClick={() => dispatch(openModal("grande dorsale"))}
                  >
                    grande <br /> dorsale
                  </Button>
                  <Button
                    variant="outline-info py-0"
                    className="muscle-btn-sotto-spinato"
                    onClick={() => dispatch(openModal("sottospinato"))}
                  >
                    sotto <br /> spinato
                  </Button>
                  <Button
                    variant="outline-info py-0"
                    className="muscle-btn-tricipite"
                    onClick={() => dispatch(openModal("tricipite"))}
                  >
                    tricipite
                  </Button>
                  <Button
                    variant="outline-info py-0"
                    className="muscle-btn-grande-gluteo"
                    onClick={() => dispatch(openModal("grande gluteo"))}
                  >
                    grande <br /> gluteo
                  </Button>
                  <Button
                    variant="outline-info py-0"
                    className="muscle-btn-bicipite-femorale"
                    onClick={() => dispatch(openModal("bicipite femorale"))}
                  >
                    bicipite <br /> femorale
                  </Button>
                  <Button
                    variant="outline-info py-0"
                    className="muscle-btn-grande-adduttore"
                    onClick={() => dispatch(openModal("grande adduttore"))}
                  >
                    grande <br /> adduttore
                  </Button>
                  <Button
                    variant="outline-info py-0"
                    className="muscle-btn-gastrocnemio"
                    onClick={() => dispatch(openModal("gastrocnemio"))}
                  >
                    gastrocnemio
                  </Button>
                  <Button
                    variant="outline-info py-0"
                    className="muscle-btn-peroneo-breve"
                    onClick={() => dispatch(openModal("peroneo breve"))}
                  >
                    peroneo <br /> breve
                  </Button>
                </div>
              </Col>
              {/**Fine img */}
              <div className="primop text-center mt-5">
                <h2>Ci siamo!!</h2>
                Ora che hai esplorato i muscoli di tutte le parti del corpo e
                compreso come allenarli, <br />
                sei pronto a portare il tuo percorso di fitness al livello
                successivo. <br /> <br />
                Per continuare a divertirti e sperimentare con il tuo
                allenamento, crea la tua scheda di allenamento personalizzata.{" "}
                <br /> <br /> È un modo divertente per mettere in pratica ciò
                che hai imparato e scoprire nuove combinazioni di esercizi!
              </div>

              <a className="text-center mb-4 link-crea " href="">
                Crea la tua scheda!
              </a>
            </Row>
          </Container>
        </main>
      </div>
    </>
  )
}

export default HomeLogin
