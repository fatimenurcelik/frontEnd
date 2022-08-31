import React from 'react'
import { useState } from "react";

const initialFormValues = { fullname:"" , phone_number:""};

function Form({ addContact, contacts }) {

    const [form, setForm] = useState( initialFormValues );

    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value});
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if(form.fullname === "" || form.phone_number === ""){
            console.log("eksik alan girdiniz :(");
            return false;
        }
        addContact([ ...contacts, form ]);
        
        //daha cok değişken olması durumlarında daha efektif olacaktır
        setForm(initialFormValues);

        //full name ve phone number alanlarının ekleme yapıldıktan sonra boş olması için 
        //setForm({ fullname:"", phone_number:""}); 
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <input
                    name='fullname'
                    placeholder='Full Name' 
                    onChange={onChangeInput}
                    value={form.fullname}
                />
            </div>
            <div>
                <input 
                    name='phone_number' 
                    placeholder='Phone Number' 
                    onChange={onChangeInput}
                    value={form.phone_number}
                />
            </div>
            <div>
                <button> Add </button> 
            </div>
        </form>
    )
}

export default Form