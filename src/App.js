import '../src/styles/App.css';
import Navbar from './components/Navbar';
import Ledger from './components/Ledger'
import Card from './components/Card';
// Images only works if inside src folder, won't work if public
// import domestic from '../images/domestic.jpg'
// import kitty from '../images/kitty.jpg'
// import posh from '../images/posh.jpg'
// import tabby from '../images/tabby.jpg'
import Data from './data'

function App() {

  const cards = Data.map((item) => {
    return (
      <Card
        key={item.id}
        // if the size is small, pass down individually, else...
        // spots={item.openSpots}
        // img={item.img}
        // item={item} // This takes in all the items 
        {...item} // Too lazy, might miss what has been passed in
      />
    )
  })

  return (
    <div className="App">
      <Navbar/>
      <Ledger/>
      <section className='cards'>
        {cards}
      </section>
    </div>
  );
}

export default App;