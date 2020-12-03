import React from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

function ModalForm({ word, definition }) {
  return (
    <div className="modalForm">
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>{word}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{definition}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default ModalForm;
