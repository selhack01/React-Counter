import "./App.css";

function App() {
  const arttir= () => {
    const sonuc = document.getElementById("sonuc");
    sonuc.innerText = Number(sonuc.innerText)+1;
  }

  const azalt= () => {
    const sonuc = document.getElementById("sonuc");
    sonuc.innerText = Number(sonuc.innerText)-1;
  }

  const sifirla= () => {
    const sonuc = document.getElementById("sonuc");
    sonuc.innerText = 0 ;
  }

  return <div className="App">
    <div className="title">Counter</div>
    <div id="sonuc">0</div>
    <div className="buttons">
    <button onClick={arttir}>+</button>
    <button onClick={sifirla}>0</button>
    <button onClick={azalt}>-</button>
    </div>
  </div>;
}

export default App;
