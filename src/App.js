import { Route, Routes } from "react-router-dom";
import "./App.css";
import ParentComp from "./Components/Props/ParentComp";
import ParentComp2 from "./Components/Props/ParentComp2";
import FormComp from "./Components/FormComp";
import Homepage from "./Components/Homepage";
import StateComp from "./Components/StateComp";
import ControlledComponent from "./Components/Forms/ControlledComponent";
import UncontrolledComponent from "./Components/Forms/UncontrolledComponent";
import ContextComp from "./Components/Auth/ContextComp";
import Create from "./Components/CRUDoperation/Create";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Read from "./Components/CRUDoperation/Read";
import Update from "./Components/CRUDoperation/Update";

const App = () => {
  return (
    <div className="w-full h-auto flex justify-center items-center">
      <ContextComp>
        <Routes>
          //Initial component Route creation
          <Route index element={<Read />} />
          //Page not found component creation
          <Route path="*" element={<h1>not found page</h1>} />
          //Dynamic route creation
          <Route path="/addform" element={<Create />} />
          <Route path="/editform/:id" element={<Update />} />
          <Route path="/cardview/:objectId" element={<FormComp />} />
          //Nested Route creation
          <Route path="/homepage" element={<Homepage />}>
            //normal component route creation
            <Route path="parentcomp2" element={<ParentComp2 />} />
            <Route path="statecomp" element={<StateComp />} />
          </Route>
        </Routes>
      </ContextComp>
      <ToastContainer />
    </div>
  );
};

export default App;
