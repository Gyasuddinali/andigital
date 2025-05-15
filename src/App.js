
import './App.css';
import Master from './components/Master';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Service from './components/Service';
import T from './components/T';
import NavBar  from './components/NavBar';
import OnPageSEO from "./components/seo/OnPageSEO"
import OffPageSEO from "./components/seo/OffPageSEO";
import TechnicalSEO from "./components/seo/TechnicalSEO";
import LocalSEO from "./components/seo/LocalSEO";

import FacebookMarketing from "./components/smo/FacebookMarketing";
import InstagramMarketing from "./components/smo/InstagramMarketing";
import TwitterMarketing from "./components/smo/TwitterMarketing";
import LinkedInMarketing from "./components/smo/LinkedInMarketing";

import SEOServices from "./components/services/SEOServices";
import WebDevelopment from "./components/services/WebDevelopment";
import ContentMarketing from "./components/services/ContentMarketing";
import PPCManagement from "./components/services/PPCManagement";
import AllPage from './components/AllPage';

import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
    
    <Master></Master>

<Routes>
 <Route path='/' element={<AllPage></AllPage>}></Route> 
  <Route path="/service" element={<Service></Service>} />
  <Route path="/seo/on-page" element={<OnPageSEO ></OnPageSEO>} />
        <Route path="/seo/off-page" element={<OffPageSEO ></OffPageSEO>} />
        <Route path="/seo/technical" element={<TechnicalSEO></TechnicalSEO>} />
        <Route path="/seo/local" element={<LocalSEO />} />

        {/* SMO Routes */}
      <Route path="/smo/facebook" element={<FacebookMarketing />} />
      <Route path="/smo/instagram" element={<InstagramMarketing />} />
      <Route path="/smo/twitter" element={<TwitterMarketing />} />
      <Route path="/smo/linkedin" element={<LinkedInMarketing />} />


      <Route path="/services/seo" element={<SEOServices />} />
<Route path="/services/web-development" element={<WebDevelopment />} />
<Route path="/services/content-marketing" element={<ContentMarketing />} />
<Route path="/services/ppc" element={<PPCManagement />} />
</Routes>

<Footer></Footer>

    
    </div>
  );
}

export default App;
