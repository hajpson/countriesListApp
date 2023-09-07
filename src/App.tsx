import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainPage } from './pages/MainPage'
import { CountriesDataProvider } from './hooks/CountriesDataContext'
import { DetailsPage } from './pages/DetailsPage'

export const App = () => {

  return (
    <CountriesDataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/countryDetails" element={<DetailsPage />} />
        </Routes>
      </BrowserRouter>
    </CountriesDataProvider>
  )
}
