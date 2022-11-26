import React, { useState, useContext } from "react";
import Input from "../components/input";
import Button from "../components/Button";
import axios from "axios";
import { toast } from "react-hot-toast";
import { UserContext } from "../context"

const Register = ({ history }) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // context
    const [state, setState] = useContext(UserContext);

    const handleClick = async (e) => {
        console.log(name, email, password);
        try {
            e.preventDefault();
            const { data } = await axios.post("http://localhost:8000/api/register", {
                name,
                email,
                password
            });
            console.log(data)
            if (data.error) {
                toast.error(data.error);
            } else {
                setName("");
                setEmail("");
                setPassword("");
                toast.success('Registration successful. Please login.');
            }
            setState(data)
            localStorage.setItem('auth', JSON.stringify(data));
            history.push("/");
            
            
        } catch (err) {
            console.log(err)
            toast.error("Something went wrong, Try again")
        }
    };

    return (
        <div className="d-flex justify-content-center" style={{height: '80vh'}}>
            <div className="container align-items-center d-flex">
                <div className="row col-md-6 offset-md-3 text-center">
                    <h1 className="pt-5 fw-bold">Lets get started</h1>
                    <p className="lead pb-4">
                        Sign up for free no credit card required.
                    </p>

                    <div className="form-group">
                        <Input label="Name" value={name} setValue={setName} />
                        <Input label="Email" type="email" value={email} setValue={setEmail} />
                        <Input label="Password" type="password" value={password} setValue={setPassword} />

                        <div>
                        <Button
                            handleClick={handleClick} 
                           
                            text="login"
                            size="sm"
                        />
                        </div>
                        
                    </div>
                </div>

               
            </div>
        </div>
    )
}

export default Register;