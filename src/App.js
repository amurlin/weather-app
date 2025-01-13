
import { useEffect, useState } from "react";
import { citiesFilter } from "./utils/CitiesFilter";

function App() {
  const [countriesSearct, setCountriesSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cities, setCities] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    await fetch("https://countriesnow.space/api/v0.1/countries")
      .then((response) => response.json())
      .then((result) => {
        const countriesAndCity = citiesFilter(result.data);
        setCities(countriesAndCity);
        setFilteredData(countriesAndCity);
      })
      .catch((error) => {
        console.log("Errpr", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const filterData = () => {
    setFilteredData (
      cities
        .filter((city) => 
          city.toLowerCase().startsWith(countriesSearct.toLowerCase())
        )
        .slice(0, 5)
    );
  };

  useEffect(() => {
    filterData();
  }, [countriesSearct]);

  useEffect(() => {
    console.log("useEffect fetch data worked");
    fetchData();
  }, []);

  const handleChange = (event) => {
    console.log(event.target.value);
    
    setCountriesSearch(event.target.value);
  };

  return (
    <div className="flex flex-row relative bg-[#F3F4F6]">
      <div>
        <span className="absolute" style={{top: '52px', left: '120px'}}>
          <img
            alt="dynamic"
            src="./img/bg-sun.png"
            style={{ width: "176px", height: "176px" }}
          />
        </span>
        <span className="absolute" style={{bottom: '52px', right: '120px'}}>
          <img
            alt="dynamic"
            src="./img/bg-moon.png"
            style={{ width: "176px", height: "176px" }}
          />
        </span>
      </div>
      <div className="z-10 inset-0 flex items-center justify-center absolute">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-300 rounded-full w-[140px] h-[140px] bg-[#F3F4F6]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-300 rounded-full w-[340px] h-[340px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-300 rounded-full w-[540px] h-[540px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-300 rounded-full w-[940px] h-[940px]"></div>
      </div>
      <div className="w-2/4 h-screen bg-[#F3F4F6] flex flex-col items-center justify-center">
        <div>
        {loading && <p>loading</p>}
        <div>
          <input onChange={handleChange} placeholder="Search city"/>
        </div>
        <div>
          {countriesSearct.length > 0 &&
            filteredData.map((country, index) => {
              return <div key={index}>{country}</div>
            })}
        </div>
        </div>
        <div className="z-20 w-[414px] h-3/4 rounded-[48px] bg-white/75  backdrop-blur shadow-lg">
          <img alt="sun" src="./img/icon-sun.png" className="w-[264px]"/>
        </div>
      </div>
      <div className="w-2/4 h-screen bg-[#0F141E] flex items-center justify-center">
        <div className="z-20 w-[414px] h-3/4 rounded-[48px] bg-[#111827]/75 backdrop-blur-md">
          <img alt="moon" src="./img/icon-moon.png" className="w-[264px]"/>
        </div>
      </div>
    </div>
  );
}

export default App;
