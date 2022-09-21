import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';

function App() {
  console.log('hola esto esta funcionando');
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={'Bienvenidos a By Marga'} />
    </>
  );
}

export default App;
