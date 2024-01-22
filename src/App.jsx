import { useEffect, useState } from "react";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

import React from "react";
import Title from "./Title";

const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const removeTours = (id) => {
    const newTours = tours.filter((item) => item.id !== id);
    setTours(newTours);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
      setLoading(false);
      console.log(tours);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <main>
        <div className="loading"></div>
      </main>
    );
  }

  if (tours.length < 1) {
    return (
      <main>
        <Title title="Our Tours" />
        <button
          type="button"
          className="btn refresh"
          onClick={() => fetchData()}
        >
          Refresh
        </button>
      </main>
    );
  }

  return (
    <main>
      <Title title="Our Tours" />
      <Tours tours={tours} removeTours={removeTours} />
    </main>
  );
};

export default App;
