import React, { useState } from 'react';
import Contact from './Contact';

interface IContact {
    name: string,
    email: string
}

const Contacts = () => {
    const [contact, setContact] = useState<IContact>({} as IContact)
    const [contactList, setContactList] = useState<IContact[]>([]);
    const onclick = () => {
        setContactList([...contactList, contact])
        setContact({
            name: "",
            email: ""
        })
    }

    const handleRemove = (email: string) => {
        const newContact = contactList.filter(c => c.email !== email)
        setContactList(newContact)
    }
    console.log("contact", contactList);


    return (
        <div>
            <h1>Contact List</h1>
            <div className="form">
                <input
                    value={contact.name}
                    onChange={(e) => setContact({...contact, [e.target.name]: e.target.value})}
                    type="text"
                    name="name"
                    placeholder="Contact Name" />

                <input
                    value={contact.email}
                    onChange={(e) => setContact({...contact, [e.target.name]: e.target.value})}
                    type="text"
                    name="email"
                    placeholder="Contact Name" />
                <button onClick={onclick}>Add</button>

            </div>
            {
                contactList.map((con) => <Contact 
                key={con.name} 
                name={con.name}
                email={con.email}
                handleRemove={handleRemove}
                ></Contact>)
            }

        </div>
    );
};

export default Contacts;