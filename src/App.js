import React from "react";
import "./App.css";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Home from "./ProjectMar4/Home";
import About from "./ProjectMar4/About";
import GoogleMap from "./ProjectMar4/GoogleMap";
import Employe from "./ProjectMar4/Employe";
const App = () => {
  return (
    <div className="App">
      <h1>Car Rental Company Website</h1>
      <BrowserRouter>
      <div style={{background:"grey",border:"2px solid black"}}>
        <Link to="/home">Home</Link><br/>
        <Link to="/about">About</Link><br/>
        <Link to="/contact">contact</Link><br/>
        <Link to="/Employee">Show All Employees</Link>

        </div>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<GoogleMap />}></Route>
          <Route path="/Employee" element={<Employe />}></Route>

        </Routes>
      </BrowserRouter>
      
  </div>
  );
}
export default App;

{/*<TodoUseContext.Provider value={todoUse}>
        <TodosApp/>
  </TodoUseContext.Provider>*/}

{/*<BrowserRouter>
        <Link to="/bettercounter1">Better Link Counter</Link><br />
        <Link to="/hobbies">Better Link Hobbies</Link><br />
        <Link to="/show/bhargavi/21">Show Name And Age</Link><br />
        <Link to="/bettercounter1/todo">Todo as child</Link><br />
        <Link to="/forum/add">Add as child</Link><br />
        <Link to="/showprod/Realme7/16,000Rs">Show Product And Price</Link><br />

        <Routes>
          <Route path="/bettercounter1" element={<BetterCounter1 />}>
            <Route path="todo" element={<TodoApp />} />
          </Route>

          <Route path="/forum" element={<Forum />}>
            <Route path="add" element={<Add />} />
          </Route>

          <Route path="/hobbies" element={<Hobbies />} />

          <Route path="/show/:name/:age" element={<ShowNameAndAge />} />

          <Route path="/showprod/:name/:price" element={<ShowProductAndPrice />} />
        </Routes>
      </BrowserRouter>
      <BrowserRouter>
<Link to="/show/bhargavi/21/Hyderabad">Show Employee Details</Link><br />
<Routes>
<Route path="/show/:name/:age/:city" element={<ShowEmployee />} />
</Routes>
</BrowserRouter>
      <Add></Add>
      <BrowserRouter>
      
      <Link to="/hobbies">Better Link Hobbies</Link><br />
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route element={<ProtectedRouter />}>
            <Route path="/hobbies" element={<Hobbies />} />
          </Route>

        </Routes>
      </BrowserRouter>
      <BrowserRouter>
      <Link to='/registerr' >Register Component</Link><br/>
      <Link to='/loginr'>Login Component</Link><br/>
      <Link to='/membersr'>All Details</Link>  
      <Routes>
        <Route path='/registerr' element={<RegisterComponent />} />
        <Route path='/loginr' element={<LoginComponent/>} />
        <Route path='/membersr' element={<MembersComponent />} />
      </Routes>
</BrowserRouter>
*/}