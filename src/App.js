import './App.css';
import Header from './components/header/Header';
import AboutContainer from './components/about/AboutContainer';
import SkillContainer from './components/skill/SkillContainer';
import ProjectContainer from './components/projects/ProjectContainer';
import Contact from './components/contact/Contact';


function App() {
  return (
    <div className="App">
      <Header   />
      <AboutContainer/>
      <ProjectContainer/>
      <h1>SKILLS</h1>
      <SkillContainer/>
      <Contact/>  
    </div>
  );
}

export default App;
