import React, { Suspense, lazy } from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom"
// import Home from "./Home"
// import About from "./About"
// import Contact from "./Contact"
// import Layout from "./components/Layout";

const REACT_VERSION = React.version;
import Footer from './shared/Footer';
import Navbar from './component/bootstrap/NavBar';
import './App.scss';

const Dashboard = lazy(() => import('./container/Table.jsx'));
const BootstrapTable = lazy(() => import('./container/BootstrapTable.jsx'));

import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
ModuleRegistry.registerModules([AllCommunityModule]);

export default function App() {

  const todos = [
    {
      id: 1,
      task: 'Pick up kids from school',
      isCompleted: false
    },
    {
      id: 2,
      task: 'Prepare for presentation',
      isCompleted: true
    },
    {
      id: 3,
      task: 'Print Statements',
      isCompleted: false
    },
    {
      id: 4,
      task: 'Create invoice',
      isCompleted: false
    },
    {
      id: 5,
      task: 'Call John',
      isCompleted: true
    },
    {
      id: 6,
      task: 'Meeting with Alisa',
      isCompleted: false
    }
  ];

  let footerComponent = <Footer version={REACT_VERSION}/>
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route element={<Navbar />} >
              <Route exact path="/" element={<Dashboard todos={todos} />} />
              <Route path="about" element={<BootstrapTable todos={todos} />} />
           <Route path="contact" element={<Dashboard todos={todos} />} />
            </Route>
          </Routes>
          {footerComponent}
        </BrowserRouter>
      </div>
    </Suspense>
  );
}
