import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';


const Dentist = () => {

    // Hooks
    const [dentist, setDentists] = useState([]);

    let history = useHistory();

    useEffect(() => {

        getDentists();
    }, [])

    useEffect(() => {

    })

    const getDentists = async () => {

        try {
            let res = await axios.get('http://localhost:3001/dentist', {
                headers: {
                    'Authorization': `token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MGJkZTM2ZjkwZTBmNzNjY2Q0YzBlMjYiLCJ0b2tlbkNyZWF0aW9uRGF0ZSI6IjIwMjEtMDYtMDlUMTU6MDQ6NDkuOTY5WiIsImlhdCI6MTYyMzI1MTA4OX0.uvsqVDbLPvyA_4wfMlaCDn1qnS5nVL4i4SwfLzbAaco`
                }
            })

            console.log(res.data);
            setDentists(res.data);
        } catch (err) {
            console.log({ message: err.message });
        }
    }

    if (dentist[0]?._id) {
        return (<div>
            {dentist.map((person, index) => (

                <div className="card" key={index}>
                    <p>{person.firstname}</p>
                    <p>{person.lastname}</p>
                    <p>{person.email}</p>
                    <p>{person.specialty}</p>
                </div>

            ))}
        </div>)
    } else {
        return (

            <div>Soy Profile</div>
        )
    }


}

export default Dentist;
