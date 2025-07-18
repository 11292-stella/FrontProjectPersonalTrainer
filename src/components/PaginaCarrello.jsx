import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchCarrello } from "../redux/action/fetchVociCarrelloAction"
import { Card, Spinner, Alert, Button } from "react-bootstrap"
import { deleteVoceCarrello } from "../redux/action/deleteVoceCarrello"
import prodottiImg from "../prodottiImg.json"
import fetchProdotti from "../redux/action/prodottiActions"

const PaginaCarrello = () => {
  const dispatch = useDispatch()
  const { voci, loading, error } = useSelector((state) => state.carrello)
  const prodotti = useSelector((state) => state.prodotti.prodotti || [])

  useEffect(() => {
    dispatch(fetchCarrello())
  }, [dispatch])

  useEffect(() => {
    dispatch(fetchProdotti())
  }, [dispatch])

  const handleDelete = (voceCarrelloId) => {
    console.log("Chiamata deleteVoceCarrello con id:", voceCarrelloId)
    dispatch(deleteVoceCarrello(voceCarrelloId))
  }

  const vociDettagliate = voci.map((voce) => {
    console.log("Voce carrello:", voce)
    const prodotto =
      voce.prodotto || prodotti.find((p) => p.id === voce.prodottoId)
    return {
      ...voce,
      nomeProdotto: prodotto?.nome || "Prodotto non trovato",
      descrizioneProdotto: prodotto?.descrizione || "",
      prezzoUnitario: prodotto?.prezzo || 0,
      totale: (prodotto?.prezzo || 0) * voce.quantita,
    }
  })

  const totaleCarrello = vociDettagliate.reduce(
    (acc, voce) => acc + voce.totale,
    0
  )

  if (loading) return <Spinner animation="border" />
  if (error) return <Alert variant="danger">{error}</Alert>

  return (
    <div className="container mt-4">
      <h2>Il tuo carrello</h2>
      {vociDettagliate.length === 0 ? (
        <p>Il carrello è vuoto</p>
      ) : (
        <>
          {vociDettagliate.map((voce, index) => (
            <Card key={index} className="mb-3">
              <Card.Body>
                <Card.Img
                  variant="top"
                  src={prodottiImg[voce.prodottoId] || "/img/default.png"}
                  className="card-img-fissa"
                />

                <Card.Title>{voce.nomeProdotto}</Card.Title>
                <Card.Text>{voce.descrizioneProdotto}</Card.Text>
                <p>Quantità: {voce.quantita}</p>
                <p>Prezzo unitario: {voce.prezzoUnitario}€</p>
                <p>Totale: {voce.totale}€</p>

                <Button variant="danger" onClick={() => handleDelete(voce.id)}>
                  Rimuovi
                </Button>
              </Card.Body>
            </Card>
          ))}

          <Card className="mt-4">
            <Card.Body>
              <h4>Totale carrello: {totaleCarrello}€</h4>
              <Button variant="success">Procedi al pagamento</Button>
            </Card.Body>
          </Card>
        </>
      )}
    </div>
  )
}

export default PaginaCarrello
