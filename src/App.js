import "./Header.css";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from "./component/Header";
import HomePage from "./component/homePage/HomePage";
import TollList from './component/homePage/TollList'

function App() {
  return (
    <>
    <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/tolllist" element={<TollList />}></Route>
        </Routes>
      </BrowserRouter>
    </>
    //   <>
    //   <Header/>

    //  </>
  );
}

export default App;
