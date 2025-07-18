import { Modal, Button, Badge, ListGroup } from "react-bootstrap"
import { FaShoppingCart } from "react-icons/fa"
import { useState } from "react"
import { NavLink } from "react-router-dom"
import { fetchCarrello } from "../redux/action/fetchVociCarrelloAction"
import { useDispatch, useSelector } from "react-redux"

const IconaCarrello = () => {
  const [show, setShow] = useState(false)
  const carrello = useSelector((state) => state.carrello.voci || [])
  const prodotti = useSelector((state) => state.prodotti.prodotti || [])

  const totaleProdotti = carrello.reduce((acc, voce) => acc + voce.quantita, 0)

  const carrelloDettagliato = carrello.map((voce) => {
    const prodotto = prodotti.find((p) => p.id === voce.prodottoId)
    return {
      ...voce,
      nomeProdotto: prodotto?.nome || "Prodotto non trovato",
      descrizioneProdotto: prodotto?.descrizione || "",
      prezzoUnitario: prodotto?.prezzo || 0,
      totale: (prodotto?.prezzo || 0) * voce.quantita,
    }
  })

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const dispatch = useDispatch()

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
              {carrelloDettagliato.map((voce, idx) => (
                <ListGroup.Item className=" bg-warning" key={idx}>
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
