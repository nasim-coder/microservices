import './App.css';
import Header from './components/header/Header'
import Footer from './components/footer/Footer';
import Middle from './components/middlecomp/Middle';
function App() {
  const heading = "THE FLASH DRIVE FOR YOUR TRULY MOBILE LIFESTYLE";
  const text = "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available"
  return (
    <div className="App">
      <Header />
      <Middle heading={heading} text={text} />
      <Footer />
    </div>
  )
}

export default App;
