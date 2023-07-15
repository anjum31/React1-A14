

import './App.css';
import HeaderSection from './component/Header';
import FooterSection from './component/Footer';
import ContentSection from './component/Content';


function App() {
  return (
    <div>
      <HeaderSection title="Welcome To My First React Webpage"/>
      <ContentSection/>
      <FooterSection footer="Let your success bigger than your dream" />
    </div>
  );
}
export default App;
