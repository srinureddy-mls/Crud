import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BrandsTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchBrands();
  }, []);

  const fetchBrands = async () => {
    try {
      const response = await axios.get('http://localhost:3000/getall');
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Brands</h1>
      <table style={{ borderCollapse: 'collapse', width: '50%' }}>
        <thead>
          <tr>
        
            <th style={{ border: '1px solid black', padding: '3px' }}>Brand Name</th>
            <th style={{ border: '1px solid black', padding: '3px' }}>Brand Cost</th>
          </tr>
        </thead>
        <tbody>
          {data.map((brand) => (
            <tr key={brand._id}>
              
              <td style={{ border: '1px solid black', padding: '3px' }}>{brand.brandname}</td>
              <td style={{ border: '1px solid black', padding: '3px' }}>{brand.brandcost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BrandsTable;
