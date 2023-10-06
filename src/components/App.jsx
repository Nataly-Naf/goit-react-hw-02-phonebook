import { nanoid } from "nanoid";
import { ContactsList } from "./ContactsList/ContactsList";
import { NameForm } from "./NameForm/NameForm";
import { Component } from "react";

export class App extends Component {
    state = {
      contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  name: '',
  number: ''

  }
  
  addName = contact => {
    this.setState(prevState => {
 
      return {
        contacts: prevState.contacts.concat({ name: contact.name, id: contact.id, number: contact.phone })
      }
    })
  }
  render() { 
    return <div >
      <NameForm pushName={this.addName} />
      <ContactsList contacts={this.state.contacts} pushName={this.addName} />
      <input
        type="text"
         onChange={evt => onChangeFilter('topic', evt.target.value)}
        placeholder="Filter by topic..."
      />
    </div>
  
  }
}
