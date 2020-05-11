import React from 'react';
import Grid from '@material-ui/core/Grid';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {

  const people = [
    { firstName: 'Jane', lastName: 'Doe', age: 45, hairColor: 'Black' },
    { firstName: 'John', lastName: 'Smith', age: 88, hairColor: 'Brown' },
    { firstName: 'Fillmore', lastName: 'Millard', age: 50, hairColor: 'Brown' },
    { firstName: 'Maria', lastName: 'Smith', age: 62, hairColor: 'Brown' },

  ]
  return (
    <div className="App">
      <Grid container spacing={3} justify="center">
        <Grid item xs={6} md={3}>
          {people.map(person => <PersonCard firstName={person.firstName} lastName={person.lastName} age={person.age} hairColor={person.hairColor} />)}
        </Grid>
      </Grid>

    </div>
  );
}

export default App;
