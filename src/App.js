
import { useEffect, useState } from "react";
import { citiesFilter } from "./utils/CitiesFilter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@awesome.me/kit-KIT_CODE/icons';


function App() {
  const [countriesSearch, setCountriesSearch] = useState("");
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
        console.log("Error", error);
      })
      .finally(() => {
        setLoading(false);
      });
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
    <div className="flex flex-row relative" >
      <div className= "w-[100%] z-50 absolute flex justify-center top-[5rem]">
          {loading && <p>loading</p>}
          <input onChange={() => handleChange()} placeholder="Search city"/>
          <div>
            {countriesSearch.length > 0 &&
              filteredData.map((country, index) => {
                return <div key={index}>{country}</div>
              })}
          </div>
      </div>
      <div className="z-10 inset-0 flex items-center justify-center absolute box-border">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[210px] h-[210px] flex flex-col items-center overflow-hidden box-border">
          <div className="top-1/2 left-1/2 bg-[#0F141E] rounded-full w-[100px] h-[100px] box-border"></div>
          <div>
          <div className="border border-gray-300 rounded-full w-[140px] h-[140px] bg-[#F3F4F6] box-border"></div>
          </div>
          <div className="bottom-1/2 bg-[#0F141E] rounded-full w-[100px] h-[100px] box-border"></div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-300 rounded-full w-[340px] h-[340px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-300 rounded-full w-[540px] h-[540px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-300 rounded-full w-[940px] h-[940px]"></div>
      </div>
      <div className="w-[100%] h-screen bg-[#F3F4F6] flex items-center justify-center ">
        <div className="w-[570px] h-4/5 relative flex items-center justify-center">
          <div className="absolute top-0 left-0" >
            <img
              alt="dynamic"
              src="./img/bg-sun.png"
              style={{ width: "176px", height: "176px" }}
            />
          </div>
          <div className="z-20 w-[27rem] h-[52rem] rounded-[48px] bg-white/50  backdrop-blur shadow-lg p-8">
            <img alt="sun" src="./img/icon-sun.png" className="w-[264px]"/>
          </div>
        </div>
      </div>
      <div className="w-[100%] h-screen bg-[#0F141E] flex items-center justify-center">
        <div className="w-[570px] h-4/5 relative flex items-center justify-center">
          <div className="absolute bottom-0 right-0">
            <img
              alt="dynamic"
              src="./img/bg-moon.png"
              style={{ width: "176px", height: "176px" }}
            />
          </div>
          <div className="z-20 w-[27rem] h-[52rem] rounded-[48px] bg-[#111827]/50 backdrop-blur-md p-8">
            <div className="flex flex-row w-[100%]">
              <div className="flex flex-col">
                <p></p>
                <p></p>
              </div>
              <div>
              <FontAwesomeIcon icon={faLocationDot} />
              </div>
            </div>
            <img alt="moon" src="./img/icon-moon.png" className="w-[264px]"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
