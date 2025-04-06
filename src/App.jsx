import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { DrinksProvider } from './utils/DrinksProvider';
import Home from './pages/home/Home';
import PersonalDetails from './pages/personalDetails/PersonalDetails';
import DrinkPurpose from './pages/drinkPurpose/DrinkPurpose';
import DrinkBase from './pages/drinkBase/DrinkBase';
import FlavourProfile from './pages/flavourProfile/FlavourProfile';
import DrinkResultConfirmation from './pages/drinkResultConfirmation/DrinkResultConfirmation';
import DrinkResultLabel from './pages/drinkResultLabel/DrinkResultLabel';
import DrinkResult from './pages/drinkResult/DrinkResult';
import Layout from './components/Layout';


function App() {
  return (
    <DrinksProvider>
       <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/drink-result" element={<DrinkResult />} />
              <Route path="/home" element={<Home />} />
              <Route path="*" element={<Navigate to="/home" />} />
              <Route path="/personal-details" element={<PersonalDetails />} />
              <Route path="/drink-purpose" element={<DrinkPurpose />} />
              <Route path="/drink-base" element={<DrinkBase />} />
              <Route path="/flavour-profile" element={<FlavourProfile />} />
              <Route path="/drink-result-confirmation" element={<DrinkResultConfirmation />} />
              <Route path="/drink-result-label" element={<DrinkResultLabel />}></Route>
            </Routes>
          </Layout>
      </BrowserRouter>
    </DrinksProvider>
  )
}

export default App
