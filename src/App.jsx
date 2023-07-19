import "./App.css";
import MainBody from "./Components/Body/MainBody";
import Header from "./Components/Header/Header";
import Review from "./Components/Review/Review";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Touch from "./Components/Get In Touch/Touch";
import Indexi from "./Components/Charts/Index";
import FirebaseForm from "./Components/FireBase/FirebaseForm";
import Form from "./Components/Login/Login";
import SignUp from "./Components/SignUp/signup";
import LoginPage from "./Components/SignUp/loginPage";
import Trialjs from "./Components/Get In Touch/trial";
import StockList from "./Components/StockList/stocklist";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<MainBody />} />
            <Route path="review" element={<Review />} />
            <Route path="getintouch" element={<Touch />}>
              <Route path="trialjs" element={<Trialjs/>}/>
            </Route>
            <Route path="/getintouch/stocklist" element={<StockList/>} />

            <Route path="indexi" element={<Indexi />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="signUp" element={<SignUp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
