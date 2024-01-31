import React from "react";
import { Route, Routes } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";
import ContactDetails from "../components/ContactDetails";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ContactForm />} />
      <Route path="/books" element={<ContactList />} />
      <Route path="/details/:id" element={<ContactDetails />} />
    </Routes>
  );
};

export default MainRoutes;
