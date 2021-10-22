import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import ContactsList from './ContactList/ContactsList';
import Filter from './Filter/Filter';
import Form from './Forms/AddContactForm';
import Container from 'components/Container/Container';
import './App.css';
import AppBar from 'components/AppBar/AppBar';
import LoginView from './views/LoginView';
import RegView from './views/RegView';
import authOperations from './Redux/auth/auth-operation';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

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
          <RegView />
        </Route>
        <Route path="/login">
          <LoginView />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
