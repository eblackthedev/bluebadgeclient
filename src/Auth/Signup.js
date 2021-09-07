import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'; 

    const Signup = (props) => {
        const [username, setUsername] = useState(''); 
        const [email, setEmail] = useState(''); 
        const [password, setPassword] = useState(''); 
        const [errormessage, setErrormessage] = useState('')

         const handleSubmit = (event) => { 
                event.preventDefault();
                if(username.length<4){
                    setErrormessage('username must be atleast 4 characters and least one (1) number or special character.') 
                }
                else if(!email){
                    setErrormessage('Email is required') //to require email/username, it was a challenge on the classnote
                }else{}

                fetch("http://localhost:4000/user/register", { 
                    method: 'POST', 
                    body: JSON.stringify({username: username, email:email, password:password}),
                    headers: new Headers({ 'Content-Type': 'application/json' 
                    })
            }).then(
                (response) => response.json() 
            ).then((data) => {
                props.updateToken(data.sessionToken) 
            })
        }
        return(
            <div>
                <h1>Sign Up</h1>
                <Form onSubmit={handleSubmit}>  
                    <FormGroup>
                    <Label style={{color:"red"}} >{errormessage}</Label>
                    </FormGroup>

                    <FormGroup>
                    
                    <Label htmlFor="username">Username</Label>
                    <Input onChange={(e) => setUsername(e.target.value)} name="username" value={username} /> 
                    {/*<Label style={{color:"red"}} >{errormessage}</Label>*/}
                    </FormGroup>

                    <FormGroup>
                    <Label htmlFor="username">Email</Label>
                    <Input onChange={(e) => setEmail(e.target.value)} name="email" value={email} /> 
                   
                    </FormGroup>
                
                    <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input onChange={(e) => setPassword(e.target.value)} name="password" value={password}/> 
                    </FormGroup>
                    <Button type="submit">Sign Up</Button>
                </Form>
            </div>
        )
}
export default Signup;
