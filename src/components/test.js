export const test = 'test1';

const testFN = () => {
  fetch(`http://www.omdbapi.com/?apikey=3a575722&s=Rim&page=6`)
    .then(response => response.json())
    .then(data => console.log(data));
}

testFN();

async function start() {
  return await Promise.resolve('async is working')
}

start().then(console.log)
