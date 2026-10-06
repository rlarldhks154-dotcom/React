import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import Library from './chapter_03/Library.jsx';
import Clock from './chapter_04/Clock.jsx';
import CommentList from './chapter_05/CommentList.jsx';
import Accommodate from './chapter_07/Accommodate.jsx';
import ConfirmButton from './chapter_08/ConfirmButton.jsx';
import LandingPage from './chapter_09/LandingPage.jsx';
import AttendanceBook from './chapter_10/AttendanceBook.jsx';
import SignUp from './chapter_11/SignUp.jsx';
import Calculator from './chapter_12/Calculator.jsx';
import ProfileCard from './chapter_13/ProfileCard.jsx';
import PandaCard from './chapter_13/PandaCard.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PandaCard />
    <br />
    <ProfileCard />
  </StrictMode>,
)
