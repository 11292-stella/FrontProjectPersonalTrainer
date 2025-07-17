import { Col, Container, Row, Button, Card } from "react-bootstrap"
import "../styles/prodotti.css"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import fetchProdotti from "../redux/action/prodottiActions"
import { FaShoppingCart } from "react-icons/fa"

const Prodotti = function () {
  const prodotti = useSelector((state) => state.prodotti.prodotti)
  const loading = useSelector((state) => state.prodotti.loading)
  const error = useSelector((state) => state.prodotti.error)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProdotti())
  }, [dispatch])

  return (
    <>
      <div className="d-flex flex-column min-vh-100 prodotti-background">
        <Container className="flex-grow-1 py-5">
          <Row className="justify-content-center">
            <Col xs={12} md={10} lg={8} className="text-center">
              <h1 className="h1-reg text-warning">
                Integrazione: La Chiave per un Allenamento al Top
              </h1>
              <p className="mt-3 primop  text-warning">
                Per ottenere il massimo dai tuoi allenamenti e supportare al
                meglio il tuo corpo, la giusta integrazione è fondamentale. Ecco
                una lista di prodotti utili a darti la marcia in più di cui hai
                bisogno!
              </p>
            </Col>
          </Row>
          {/*Card prodotti */}
          <Row className="g-3 justify-content-center align-items-stretch">
            {prodotti.map((prodotto) => (
              <Col xs={12} sm={6} md={4} lg={3} xl={2} key={prodotto.id}>
                <Card className="small-card h-100">
                  <Card.Header className="scheda-p">
                    {prodotto.nome}
                  </Card.Header>
                  <Card.Img variant="top" src="imvg2.npg" />
                  <Card.Body className="scheda-b text-light text-center">
                    <Card.Text>{prodotto.descrizione}</Card.Text>
                    <Card.Text>{prodotto.prezzo} €</Card.Text>
                  </Card.Body>
                  <Button className="bottone-p ">
                    <FaShoppingCart className="me-2 " /> Acquista
                  </Button>
                </Card>
              </Col>
            ))}
          </Row>

          {/*fine Card prodotti */}
        </Container>
      </div>
    </>
  )
}

export default Prodotti
