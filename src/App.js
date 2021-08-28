import { Switch, Route } from 'react-router-dom' 
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import About from './pages/About'
import Services from './pages/Services'
import Store from './pages/Store'
import Contact from './pages/Contact'



function App() {
  return (
    <div className="body">
      <Header />

      <br />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/store" component={Store} />
        <Route path="/contact" component={Contact} />


      </Switch>
      <br />

      <Footer />

    </div>
  );
}

export default App;
