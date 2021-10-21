import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ContactsList from './ContactList/ContactsList';
import Filter from './Filter/Filter';
import Form from './Forms/AddContactForm';
import Container from 'components/Container/Container';
import './App.css';
import AppBar from 'components/AppBar/AppBar';

function App() {
  return (
    <Container>
      <AppBar />
      <Switch>
        <Route path="/contacts" exact>
          <div className="container">
            <div className="formsContainer">
              <Form />
            </div>
            <div className="contactsContainer">
              <div className="contacts">
                <h2>Contacts</h2>
                <Filter />
                <ContactsList />
              </div>
            </div>
          </div>
        </Route>
        <Route path="/register" exact>
          <div>Registration</div>
        </Route>
        <Route path="/login">
          <div>Login</div>
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
