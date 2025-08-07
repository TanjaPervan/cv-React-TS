import About from './components/about/About';
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
    </div>
  );
}

export default App;
