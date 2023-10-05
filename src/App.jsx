import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {

  return (
    <>
      <NavBar background={'transparent'} />
      <ItemListContainer greeting="¡Hola, bienvenido a nuestra tienda en línea!" />
    </>

  )
}

export default App






