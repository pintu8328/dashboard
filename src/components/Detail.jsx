import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


function Detail({ match }) {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    // Make a GET request using Axios to fetch data based on the ID from the URL
    axios
      .get(`http://127.0.0.1:8080/api/user/dashboard/${id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <iframe
      title="PDF Viewer"
      src={data.url}
      width="100%"
      height="500px"
    >
      <p>Your browser does not support iframes.</p>
    </iframe>
  );
}

export default Detail;
