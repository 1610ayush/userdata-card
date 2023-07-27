import React, { useState } from "react";

const Form = ({ onSubmit }) => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [professionalBio, setProfessionalBio] = useState("");
  const [hobbies, setHobbies] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ image, name, designation, professionalBio, hobbies });
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md p-4 bg-gray-100 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="image" className="block font-semibold text-gray-700">Upload Image:</label>
          <input type="file" id="image" onChange={handleImageChange} className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block font-semibold text-gray-700">Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" />
        </div>
        <div className="mb-4">
          <label htmlFor="designation" className="block font-semibold text-gray-700">Designation:</label>
          <input type="text" value={designation} onChange={(e) => setDesignation(e.target.value)} className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" />
        </div>
        <div className="mb-4">
          <label htmlFor="professionalBio" className="block font-semibold text-gray-700">Professional Bio:</label>
          <textarea value={professionalBio} onChange={(e) => setProfessionalBio(e.target.value)} className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" />
        </div>
        <div className="mb-4">
          <label htmlFor="hobbies" className="block font-semibold text-gray-700">Hobbies:</label>
          <textarea value={hobbies} onChange={(e) => setHobbies(e.target.value)} className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" />
        </div>
        <button type="submit" className="block w-full p-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring focus:border-blue-300">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
