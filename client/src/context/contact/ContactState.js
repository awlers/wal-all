import React, {useReducer} from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types';

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id:1,
                name: 'Jill Johnson',
                email: 'j@gmail.com',
                phone: '111-111-111',
                type: 'personal'
            
            },
            {
                id:2,
                name: 'Sara Watson',
                phone: '222-111-111',
                email: 'S@gmail.com',
                type: 'personal'
            
            },
            {
                id:3,
                name: 'Harry White',
                phone: '333-111-111',
                email: 'H@gmail.com',
                type: 'professional'
            
            }
        ]
    };

const [state, dispatch] = useReducer(contactReducer, initialState)

// Add Contact 


// Delete Contact 

// Set current Contact 


// Clear current contact

//Update Contact


// Filter Contacts 

//clear Filter 

return (
    <ContactContext.Provider
    
    value={{
        contacts: state.contacts
    }}
    
    >

        {props.children}
    </ContactContext.Provider>
)

}

export default ContactState;