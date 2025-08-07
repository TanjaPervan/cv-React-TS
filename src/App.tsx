import About from './components/about/About';
import Contact from './components/contact/Contact';
import Header from './components/header/Header';
import Work from './components/portfolio/Work';
import Services from './components/services/Services';
import SkillsTabs from './components/skillsTabs/SkillsTabs';

function App() {
  return (
    <div>
      <Header />
      <About />
      <SkillsTabs />
      <Services />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
