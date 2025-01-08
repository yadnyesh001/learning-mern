import React from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

const App = () => {
  return (
    <div className="app">
      <h1>MERN Authentication</h1>
      <UserForm />
      <UserList />
    </div>
  );
};

export default App;
