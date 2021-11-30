import React, {useReducer} from 'react';
import { v4 as uuidv4 } from 'uuid';
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
        ],
        current: null, 
        filtered: null
    };

const [state, dispatch] = useReducer(contactReducer, initialState)

// Add Contact 

const addContact  = contact => {
    contact.id = uuidv4();
    dispatch ({type: ADD_CONTACT, payload: contact})
}; 

// Delete Contact 

const deleteContact  = id => {
  
    dispatch ({type: DELETE_CONTACT, payload: id})
}; 



// Set current Contact 

const setCurrent  = contact => {
  
    dispatch ({type: SET_CURRENT, payload: contact})
}; 


// Clear current contact

const clearCurrent  = () => {
  
    dispatch ({ type: CLEAR_CURRENT })
}; 

//Update Contact

const updateContact  = contact => {
  
    dispatch ({type: UPDATE_CONTACT, payload: contact})
}; 


// Filter Contacts 

const filterContacts  = text => {
  
    dispatch ({type: FILTER_CONTACTS, payload: text})
}; 

//clear Filter 

const clearFilter  = () => {
  
    dispatch ({ type: CLEAR_FILTER })
}; 

return (
    <ContactContext.Provider
    
    value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered, 
        addContact,
        deleteContact, 
        setCurrent, 
        clearCurrent,
        updateContact, 
        filterContacts, 
        clearFilter
    }}
    
    >

        {props.children}
    </ContactContext.Provider>
)

}

export default ContactState;