import './App.css';

function App() {
  const helloworld ='helloworld!!!';

  const helloworlds ={
    text:'this is helloworlds!!!!'
  };

  let helloworldLet='let you know why i am so stupid';
  helloworlds.text="but time has change now,why don't you do some study"

  return (
    <div className="App">
      <h2>{helloworld}</h2>
      <h2>{helloworlds.text}</h2>
      <h3>{helloworldLet}</h3>
    </div>
  );
}

export default App;
