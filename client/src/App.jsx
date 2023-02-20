import { NavBar, Welcome, Footer, Services, Transactions, Packages } from './components';

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <NavBar />
        <Welcome />
      </div>
      <Transactions />
      <Footer />
    </div>
  )
}


export default App;
