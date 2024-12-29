import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const AddExamp: React.FC = () => {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [college, setCollege] = useState("");
  const [level, setLevel] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);

  const navigate = useNavigate();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImageFile(event.target.files[0]);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    try {
      if (!number || !name || !college || !level || !specialization) {
        throw new Error("Please fill all fields");
      }

      const examp = {
        id: Date.now(),
        number,
        name,
        college,
        level,
        specialization,
        imageFile,
      };

      AddExamp(examp);
      alert("examp added successfully!");
      navigate("/examps");
    } catch (error) {
      console.error("Error adding examp:", error);
    }
  };

  return (
    <div>
      <Header page="Add Examp" />
      <form onSubmit={handleSubmit} className="p-4 flex flex-col gap-4">
        <input
          type="text"
          placeholder="Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="border p-2 rounded-lg"
        />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded-lg"
        />
        <input
          type="text"
          placeholder="College"
          value={college}
          onChange={(e) => setCollege(e.target.value)}
          className="border p-2 rounded-lg"
        />
        <input
          type="text"
          placeholder="Level"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          className="border p-2 rounded-lg"
        />
        <input
          type="text"
          placeholder="Specialization"
          value={specialization}
          onChange={(e) => setSpecialization(e.target.value)}
          className="border p-2 rounded-lg"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="border p-2 rounded-lg"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddExamp;
