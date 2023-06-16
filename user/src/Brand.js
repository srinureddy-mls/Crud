import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [data, setData] = useState({
    brandname: '',
    brandcost: '',
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:3000/addbrands', data)
      .then((res) => {
        console.log(res.data); // Handle the response data
      })
      .catch((error) => {
        console.error(error); // Handle any error that occurred
      });
  };

  return (
    <div>
      <section>
       <h1>Add Brands </h1>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div>
            <input
              type="text"
              placeholder="Name"
              name="brandname"
              value={data.brandname}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Cost"
              name="brandcost"
              value={data.brandcost}
              onChange={handleChange}
              required
            />
          </div>
          <input type="submit" className="btn btn-primary" value="submit" />
        </form>
      </section>
    </div>
  );
};

export default Register;
