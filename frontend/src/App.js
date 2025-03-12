import React, { useEffect, useState } from 'react';
import axios from 'axios';

axios.defaults.withCredentials = true;

const App = () => {
  const [csrfToken, setCsrfToken] = useState("");

  useEffect(() => {
    axios.get('http://localhost:5000/csrf-token')
      .then(response => {
        setCsrfToken(response.data.csrfToken);
      })
      .catch(error => {
        console.error("Erreur lors de la récupération du token CSRF", error);
      });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    data._csrf = csrfToken;

    try {
      const response = await axios.post('http://localhost:5000/submit', data);
      alert(response.data);
    } catch (error) {
      console.error("Erreur lors de la soumission du formulaire", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="hidden" name="_csrf" value={csrfToken} />

      <div>
        <label htmlFor="username">Nom d'utilisateur :</label>
        <input type="text" id="username" name="username" required />
      </div>

      <div>
        <label htmlFor="password">Mot de passe :</label>
        <input type="password" id="password" name="password" required />
      </div>

      <button type="submit">Soumettre</button>
    </form>
  );
};

export default App;
