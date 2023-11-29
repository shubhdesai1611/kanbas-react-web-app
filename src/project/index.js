import Signin from "../users/signin";
import { Routes, Route, Navigate } from "react-router-dom";
import ProjectNav from "./ProjectNav";
import Account from "../users/account";
import UserTable from "../users/table";
import Signup from "../users/signup";
import Nav from "../Nav";
function Project() {
  return (
    <div className="container">
      <div className="row">
        <Nav />
      </div>
      <div className="row mt-3">
        <div className="col-2">
          <ProjectNav />
        </div>
        <div className="col-10">
          <Routes>
            <Route path="/" element={<Navigate to="/project/home" />} />
            <Route path="/home" element={<h1>Assignment 6 Home</h1>} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/account" element={<Account />} />
            <Route path="/admin/users" element={<UserTable />} />
            <Route path="/account/:id" element={<Account />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Project;
