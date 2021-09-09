import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter, Label, Input, FormGroup, Form } from 'reactstrap';


const GamesModal = (props) => {
    const [open, setOpen] = useState(false);
    const [focusAfterClose, setFocusAfterClose] = useState(true);
    const [rating, setRating] = useState('');
    const [review, setReview] = useState('');

    const toggle = () => setOpen(!open);
    const handleSelectChange = ({ target: { value } }) => {
        setFocusAfterClose(JSON.parse(value));
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(props.gameId);
        fetch(`http://localhost:4000/game/${props.gameId}`, {
            method: 'PUT',
            body: JSON.stringify({ game: { rating: rating, review: review } }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => res.json())
            .then((gameData) => {
                console.log(gameData);
                setRating('');
                setReview('');
                props.fetchgames();
            })
    }


    return (
        <div>
            <Button onClick={toggle}>open</Button>
            <Modal returnFocusAfterClose={focusAfterClose} isOpen={open}>
                <ModalBody>
                    <Form inline onSubmit={handleSubmit}>
                        {/* would it need to be onSubmit={handleSubmit} ?? ask tom */}
                        <FormGroup>
                            <Label for="focusAfterClose">Rating</Label>
                            <Input className="rating" type="number" id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
                            </Input>
                            <Label for="focusAfterClose">review</Label>
                            <Input className="review" type="text" id="review" value={review} onChange={(e) => setReview(e.target.value)}>
                            </Input>
                        </FormGroup>
                        <Button color="danger" type='submit'>submit</Button>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    
                    <Button color="primary" onClick={toggle}>Close</Button>
                </ModalFooter>
            </Modal>
        </div>
    )


}

export default GamesModal;