import React from 'react';
import { useEffect, useState } from 'react';
import { citiesFilter } from '../utils/CitiesFilter';

export const Search = () => {
    const [countriesSearch, setCountriesSearch] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [cities, setCities] = useState([]);

    const fetchData = async () => {
        setLoading(true);
        try {
          const response = await fetch(
            "https://countriesnow.space/api/v0.1/countries"
          );
    
          const result = await response.json();
          const countriesAndCity = citiesFilter(result.data);
          setCities(countriesAndCity);
          setFilteredData(countriesAndCity);
        } catch {
          console.log("Error");
        }
        setLoading(false)
      };

      const filterData = () => {
        setFilteredData (
          cities
            .filter((city) => 
              city.toLowerCase().startsWith(countriesSearch.toLowerCase())
            )
            .slice(0, 5)
        );
      };

      useEffect(() => {
        filterData();
      }, [countriesSearch]);
    
      useEffect(() => {
        console.log("useEffect fetch data worked");
        fetchData();
      }, []);

      const handleChange = (event) => {
        console.log(event.target.value);
        
        setCountriesSearch(event.target.value);
      };

  return (
    <div className= "w-[100%] z-50 absolute flex justify-center top-[5rem]">
          {loading && <p>loading</p>}
          <input onChange={() => handleChange()} placeholder="Search city" className="w-[500px] h-[48px] rounded-[20px]"/>
          <div>
            {countriesSearch.length > 0 &&
              filteredData.map((country, index) => {
                return <div key={index}>{country}</div>
              })}
          </div>
      </div>
  )
}
