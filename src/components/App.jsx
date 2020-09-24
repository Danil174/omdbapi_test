import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const testFN = () => {
  fetch(`http://www.omdbapi.com/?apikey=3a575722&s=Rim&page=6`)
    .then(response => response.json())
    .then(data => console.log(data));
};

async function start() {
  return await Promise.resolve('async is working');
}

const App = () => {
  useEffect(() => {
    testFN();
    start().then(console.log);
  }, []);
  return (
    <>
      <h1>Film app</h1>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </>
  );
};

export default App;
