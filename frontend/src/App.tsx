import { //importando rotas com rect-router-dom para setar qual evento segue qual rota
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Listing from 'pages/Listing';
import Form from 'pages/Form';
import Navbar from "components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Listing />} /> {/* setando como o path '/' sendo nossa página inicial */}
        <Route path="/form"> {/* setando que quando tiver o /form vai ser direcionado para o movieId e levar pra pagina form criada */}
          <Route path=":movieId" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
