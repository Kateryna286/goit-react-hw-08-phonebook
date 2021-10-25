import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import ContactsList from './ContactList/ContactsList';
import Filter from './Filter/Filter';
import Form from './Forms/AddContactForm';
import Container from 'components/Container/Container';
import './App.css';
import AppBar from 'components/AppBar/AppBar';
import LoginView from './views/LoginView';
import RegView from './views/RegView';
import authOperations from './Redux/auth/auth-operation';
import PrivatRoute from 'components/navigation/PrivateRoute';
import PublicRoute from 'components/navigation/PublicRoute';
import authSelectors from 'Redux/auth/auth-selectors';

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser,
  );

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <Container>
        <AppBar />

        <Switch>
          <PublicRoute path="/" exact>
            Главная
          </PublicRoute>

          <PrivatRoute path="/contacts" redirectTo="/login">
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
          </PrivatRoute>

          <PublicRoute path="/register" restricted>
            <RegView />
          </PublicRoute>

          <PublicRoute path="/login" redirectTo="/contacts" restricted>
            <LoginView />
          </PublicRoute>
        </Switch>
      </Container>
    )
  );
}

export default App;
