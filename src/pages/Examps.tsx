import React from "react";
import { useNavigate } from "react-router-dom";
import { ExampContext } from "../context/ExampContext";
import ExampEntityPage from "./ExampEntityPage";

const Examps: React.FC = () => {
  const navigate = useNavigate();
  const { examps } = React.useContext(ExampContext);

  const handleAddExamp = () => {
    navigate("/add-examp");
  };

  const handleEditExamp = (name: string) => {
    if (!name) {
      console.error("Invalid examp name.");
      return;
    }
    console.log(`Editing examp: ${name}`);
  };

  const handleDeleteExamp = (name: string) => {
    if (!name) {
      console.error("Invalid examp name.");
      return;
    }
    console.log(`Deleting examp: ${name}`);
  };

  const handleSearchExamp = (query: string) => {
    if (!query) {
      console.error("Invalid search query.");
      return;
    }
    console.log(query);
  };

  return (
    <ExampEntityPage
      page="Examp"
      entities={
        examps.map((examp) => ({ ...examp, date: examp.date.toISOString() })) ||
        []
      }
      onAdd={handleAddExamp}
      onSearch={handleSearchExamp}
      onEdit={handleEditExamp}
      onDelete={handleDeleteExamp}
    />
  );
};

export default Examps;
