import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchCarrello } from "../redux/action/fetchVociCarrelloAction"
import { Card, Spinner, Alert, Button, Row, Col } from "react-bootstrap"
import { deleteVoceCarrello } from "../redux/action/deleteVoceCarrello"
import prodottiImg from "../prodottiImg.json"
import fetchProdotti from "../redux/action/prodottiActions"

const PaginaCarrello = () => {
  const dispatch = useDispatch()
  const { voci, loading, error } = useSelector((state) => state.carrello)
  const prodotti = useSelector((state) => state.prodotti.prodotti)

  useEffect(() => {
    console.log(
      "PaginaCarrello useEffect: Dispatching fetchCarrello e fetchProdotti"
    )
    dispatch(fetchCarrello())
    dispatch(fetchProdotti())
  }, [dispatch])

  const handleDelete = (voceCarrelloId) => {
    if (
      window.confirm(
        "Sei sicuro di voler eliminare questo prodotto dal carrello?"
      )
    ) {
      console.log(
        "PaginaCarrello: Chiamata deleteVoceCarrello con id:",
        voceCarrelloId
      )
      dispatch(deleteVoceCarrello(voceCarrelloId))
    }
  }

  const handleCheckout = () => {
    window.alert("Pagamento avvenuto!")
  }

  const vociDettagliate = voci.map((voce) => {
    const prodottoIdToFind = voce.prodottoId || voce.prodotto?.id
    const prodottoCorrispondente = prodotti.find(
      (p) => p.id === prodottoIdToFind
    )

    return {
      ...voce,
      nomeProdotto:
        voce.nomeProdotto ||
        prodottoCorrispondente?.nome ||
        "Prodotto non trovato",
      descrizioneProdotto:
        voce.descrizioneProdotto || prodottoCorrispondente?.descrizione || "",
      prezzoUnitario:
        voce.prezzoUnitario || prodottoCorrispondente?.prezzo || 0,
      totale:
        (voce.prezzoUnitario || prodottoCorrispondente?.prezzo || 0) *
        voce.quantita,
      prodottoId: prodottoIdToFind,
    }
  })

  const totaleCarrello = vociDettagliate.reduce(
    (acc, voce) => acc + voce.totale,
    0
  )

  if (loading) return <Spinner animation="border" />
  if (error) return <Alert variant="danger"> {error} </Alert>

  return (
    <div className="container mt-4">
      <h2>Il tuo carrello</h2>
      {vociDettagliate.length === 0 ? (
        <p>Il carrello è vuoto</p>
      ) : (
        <>
          {vociDettagliate.map((voce) => (
            <Card key={voce.id} className="mb-3">
              <Card.Body>
                <Row className="align-items-center">
                  <Col xs={12} md={4} className="text-center mb-3 mb-md-0">
                    <Card.Img
                      src={prodottiImg[voce.prodottoId] || "/img/default.png"}
                      alt={voce.nomeProdotto}
                      style={{
                        maxWidth: "150px",
                        height: "auto",
                        borderRadius: "8px",
                      }}
                    />
                  </Col>
                  <Col xs={12} md={8}>
                    <Card.Title className="h5">{voce.nomeProdotto}</Card.Title>
                    <Card.Text>{voce.descrizioneProdotto}</Card.Text>
                    <p className="mb-1">
                      Quantità: <strong>{voce.quantita}</strong>
                    </p>
                    <p className="mb-1">
                      Prezzo unitario: <strong>{voce.prezzoUnitario} €</strong>
                    </p>
                    <p className="fw-bold">Totale: {voce.totale} €</p>
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(voce.id)}
                    >
                      Rimuovi
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))}
          <Card className="mt-4 mb-3">
            <Card.Body>
              <h4>Totale carrello: {totaleCarrello} €</h4>
              <Button variant="success" onClick={handleCheckout}>
                Procedi al pagamento
              </Button>
            </Card.Body>
          </Card>
        </>
      )}
    </div>
  )
}

export default PaginaCarrello
