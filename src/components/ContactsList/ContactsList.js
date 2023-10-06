
export const ContactsList = ({ contacts, pushName }) => {
      if (contacts.length !== 0) {
        console.log(contacts)
        return <ul>
            {contacts.map(contact => { return <li key={contact.id}> {contact.name}: {contact.number} </li> })
            }
        </ul>
    }
}

