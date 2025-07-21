import { Modal, Button, Badge, ListGroup } from "react-bootstrap"
import { FaShoppingCart } from "react-icons/fa"
import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import { fetchCarrello } from "../redux/action/fetchVociCarrelloAction"
import { useDispatch, useSelector } from "react-redux"
import fetchProdotti from "../redux/action/prodottiActions"

const IconaCarrello = () => {
  const [show, setShow] = useState(false)
  const carrello = useSelector((state) => state.carrello.voci || [])
  const prodotti = useSelector((state) => state.prodotti.prodotti || [])

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProdotti())
  }, [dispatch])

  useEffect(() => {
    if (show) {
      dispatch(fetchCarrello())
    }
  }, [show, dispatch])

  const totaleProdotti = carrello.reduce((acc, voce) => acc + voce.quantita, 0)

  const carrelloDettagliato = carrello.map((voce) => {
    const prodottoIdToFind = voce.prodottoId || voce.prodotto?.id
    const prodotto = prodotti.find((p) => p.id === prodottoIdToFind)

    return {
      ...voce,
      nomeProdotto:
        voce.nomeProdotto || prodotto?.nome || "Prodotto non trovato",
      descrizioneProdotto:
        voce.descrizioneProdotto || prodotto?.descrizione || "",
      prezzoUnitario: voce.prezzoUnitario || prodotto?.prezzo || 0,
      totale: (voce.prezzoUnitario || prodotto?.prezzo || 0) * voce.quantita,
      prodottoId: prodottoIdToFind,
    }
  })

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button
        variant="outline-light"
        onClick={handleShow}
        className="d-flex align-items-center ms-3"
      >
        <FaShoppingCart size={20} />
        {totaleProdotti > 0 && (
          <Badge bg="danger" pill className="ms-2">
            {totaleProdotti}
          </Badge>
        )}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="scheda-p" closeButton>
          <Modal.Title>Il tuo carrello</Modal.Title>
        </Modal.Header>
        <Modal.Body className="scheda-b">
          {carrelloDettagliato.length === 0 ? (
            <p>Il carrello è vuoto</p>
          ) : (
            <ListGroup>
              {carrelloDettagliato.map((voce) => (
                <ListGroup.Item className=" bg-warning" key={voce.id}>
                  {voce.nomeProdotto} - Quantità: {voce.quantita} - Prezzo
                  totale: €{voce.totale}
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Modal.Body>
        <Modal.Footer className="scheda-p">
          <Button variant="secondary" onClick={handleClose}>
            Chiudi
          </Button>
          <Button
            as={NavLink}
            to="/carrello"
            variant="success"
            onClick={() => {
              dispatch(fetchCarrello())
              handleClose()
            }}
          >
            Vai al carrello completo
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default IconaCarrello
