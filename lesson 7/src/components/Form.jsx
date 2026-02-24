import { useState } from "react";

export default function Form({ moviesearch }) {

  const [formData, setFormData] = useState({
    searchterm: ""
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    moviesearch(formData.searchterm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="searchterm"
        value={formData.searchterm}
        onChange={handleChange}
        placeholder="Search for a movie"
      />
      <input type="submit" value="Search" />
    </form>
  );
}