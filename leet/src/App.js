import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Featured from "./components/Featured";
import Interview from "./components/Interview";
import Learn from "./components/Learn";

const main = document.querySelector(".main");
console.log(main);

const card = document.createElement('div');
card.classList = 'card';

const movieCard =
<div className="card"> 
        <p>New Card</p>

          <p>In addition to its economic role, India is also a major political and military power. </p>
        </div>;
function App() {
  return (
   <>
   <Navbar/>
   <Header/>
   <Featured/>
   <Interview/>
   <Learn/>
   </>
  );
}

export default App;
