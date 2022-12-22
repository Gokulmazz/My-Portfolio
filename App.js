import Mid from './Components/Mid/Midpart';
import Top from './Components/Head/Toppart';
import Pro from './Components/secondmid/project';
import Certifys from './Components/thirdsec/certify';
import Action from './Components/contact/contact';
import Endpart from'./Components/End/media';
import './App.css';


function App() {
  return (
      <div class="app-function">
         <Top />
         <Mid />
         <Pro />
         <Certifys />  
         <Action />
         <Endpart />
      </div>
  );
};

export default App;
