/*Mini ecommerce frontend con React Router

Creiamo il frontend del nostro mini e-commerce e le sue pagine principali! Useremo Dummy JSON products come API per simulare i dati fittizi dei prodotti. https://dummyjson.com/docs/products

    Installiamo React Router: pnpm add react-router

    Creiamo almeno 3 pagine principali:
        Homepage (con un messaggio di benvenuto o immagine promozionale)
        Chi siamo
        Prodotti (pagina che mostrerà la lista dei prodotti prendendoli dalla API)

    Implementiamo il menu con i link di navigazione, visibile in tutte le pagine per navigare tra di esse. Centralizziamo il menu usando un componente. Qui vi aiuta il componente <Outlet> di React Router per mostrare il contenuto delle pagina attiva.

    Nella pagina Prodotti:
        Utilizzando il seguente endpoint https://dummyjson.com/products ottenere e mostrare in pagina i prodotti
        Ogni prodotto deve avere un link che ci porti alla pagina di dettaglio del prodotto (usa <Link>)

    Configuriamo la rotta dinamica con il parametro :id da usare per la pagina di dettaglio del prodotto

    Aggiungiamo la pagina di dettaglio per ogni prodotto, con le informazioni prese dal seguente endpoint dell'API https://dummyjson.com/products/1 (l'1 sarà dinamico al momento della chiamata AJAX).

Per leggere l'id passato alla pagina di dettaglio del prodotto usiamo useParams() di React Router.

Bonus

    Aggiungiamo una pagina 404 per la gestione delle rotte non esistenti
    Aggiungiamo una navigazione programmatica che riporti alla pagina di archivio prodotti se viene cercato un prodotto che non esiste;
    Aggiungiamo un loading per caricamento dati nelle pagine dell'archivio e dettaglio prodotti.
    Gestiamo la classe active per i link di navigazione nell'header*/
import Homepage from "./components/pages/HomePage";
import ChiSiamo from "./components/pages/ChiSiamo";
import Prodotti from "./components/pages/Prodotti";
import { BrowserRouter, Routes, Route } from "react-router";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/chi-siamo" element={<ChiSiamo />} />
        <Route path="/prodotti" element={<Prodotti />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
