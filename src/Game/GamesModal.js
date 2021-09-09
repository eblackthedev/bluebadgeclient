import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter, Label, Input, FormGroup, Form } from 'reactstrap';


const GamesModal = (props) => {
    const [open, setOpen] = useState(false);
    const [focusAfterClose, setFocusAfterClose] = useState(true);
    const [rating, setRating] = useState('');
    const [review, setReview] = useState('');

    const toggle = () => {
        setOpen(!open);
    }
    const handleSelectChange = ({ target: { value } }) => {
        setFocusAfterClose(JSON.parse(value));
    }
   
   if(props.isModalOpen!=open){
    setOpen(props.isModalOpen)
   }
        const handleSubmit = (e) => {
            e.preventDefault();
            fetch('http://localhost:4000/game/:id', {
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
                <Modal returnFocusAfterClose={focusAfterClose} isOpen={open}>
                    <ModalBody>
                        <Form inline onSubmit={(e) => e.preventDefault()}>
                            {/* would it need to be onSubmit={handleSubmit} ?? ask tom */}
                            
                            <FormGroup>
                                <Label for="focusAfterClose">Focus After Close</Label>
                                <Input className="rating" type="number" id="rating" onChange={handleSelectChange}>
                                    </Input>
                                    <Input className="review" type="text" id="review" onChange={handleSelectChange}>
                                    </Input>
                            </FormGroup>
                            {/* <Button color="danger" type='submit'>submit</Button>*/}
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={toggle}>Close</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    

}

export default GamesModal