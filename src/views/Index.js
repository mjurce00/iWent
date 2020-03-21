import React from "react";

import IndexNavbar from '../components/IndexNavbar';
import IndexHeader from '../components/IndexHeader';
import DarkFooter from '../components/DarkFooter';
import Objekti from "../components/Objekti";
// sections for this page


function Index() {
    React.useEffect(() => {
      document.body.classList.add("index-page");
      document.body.classList.add("sidebar-collapse");
      document.documentElement.classList.remove("nav-open");
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      return function cleanup() {
        document.body.classList.remove("index-page");
        document.body.classList.remove("sidebar-collapse");
      };
    });
    return (
        <>
         <IndexNavbar />
          <div className="wrapper">
           <IndexHeader />
            <div className="main">
              <Objekti />
            
             
            </div>
            <DarkFooter />
          </div>
        </>
      );
    }
    
    export default Index;