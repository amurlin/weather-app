import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Search } from './components/Search';

function App() {
  

  return (
    <div className="flex flex-row relative" >
      {/* {weatherLoading && <p>Weather loading ...</p>}
      <Search setSelectedCity={setSelectedCity}/> */}
      {/* <div className= "w-[100%] z-50 absolute flex justify-center top-[5rem]">
          {loading && <p>loading</p>}
          <input onChange={() => handleChange()} placeholder="Search city" className="w-[500px] h-[48px] rounded-[20px]"/>
          <div>
            {countriesSearch.length > 0 &&
              filteredData.map((country, index) => {
                return <div key={index}>{country}</div>
              })}
          </div>
      </div> */}
      {/* Background */}
      <div className="z-10 inset-0 flex items-center justify-center absolute box-border">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[210px] h-[210px] flex flex-col items-center overflow-hidden box-border">
          <div className="top-1/2 left-1/2 bg-[#0F141E] rounded-l-2xl w-[100px] h-[100px] box-border" style={{ clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)"}}></div>
          <div>
          <div className="border border-gray-300 rounded-full w-[140px] h-[140px] bg-[#F3F4F6] box-border flex flex-row justify-center items-center gap-3">
            <img alt="logo-1" src="./img/logo-left.png" style={{width: "43px", height: "86px"}}/>
            <img alt="logo-2" src="./img/logo-right.png" style={{width: "43px", height: "86px"}}/>
          </div>
          </div>
          <div className="bottom-1/2 bg-[#0F141E] rounded-l-2xl w-[100px] h-[100px] box-border"></div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-300 rounded-full w-[340px] h-[340px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-300 rounded-full w-[540px] h-[540px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-300 rounded-full w-[940px] h-[940px]"></div>
      </div>
      {/* Left */}
      <div className="w-[100%] h-screen bg-[#F3F4F6] flex items-center justify-center ">
        <div className="w-[570px] h-4/5 relative flex items-center justify-center">
          <div className="absolute top-0 left-0" >
            <img
              alt="dynamic"
              src="./img/bg-sun.png"
              style={{ width: "176px", height: "176px" }}
            />
          </div>
          <div className="z-20 w-[27rem] h-[50rem] rounded-[48px] bg-white/50  backdrop-blur shadow-lg p-10 pb-20 flex flex-col items-center justify-between">
            <div className="flex flex-row w-[100%] items-center justify-between">
              <div className="flex flex-col">
                <div className="text-gray-400">January 15, 2025</div>
                <div className="text-[#111827] text-5xl font-bold">Ulaanbaatar</div>
              </div>
              <div>
                <FontAwesomeIcon icon={faLocationDot} style={{color: "#4B5563", width: "32px", height: "32px"}}/> 
              </div>
            </div>
            <img alt="sun" src="./img/icon-sun.png" className="w-[264px] drop-shadow-[0_0_30px_orange]"/>
            <div className="text-[#111827] text-9xl font-bold">-10.6</div>
            <div className="text-[#FF8E27] h-6">Bright</div>
          </div>
        </div>
      </div>
      {/* Right */}
      <div className="w-[100%] h-screen bg-[#0F141E] flex items-center justify-center">
        <div className="w-[570px] h-4/5 relative flex items-center justify-center">
          <div className="absolute bottom-0 right-0">
            <img
              alt="dynamic"
              src="./img/bg-moon.png"
              style={{ width: "176px", height: "176px", }}
            />
          </div>
          <div className="z-20 w-[27rem] h-[50rem] rounded-[48px] bg-[#111827]/50 backdrop-blur-md p-10 pb-20 flex flex-col items-center justify-between">
            <div className="flex flex-row w-[100%] items-center justify-between">
              <div className="flex flex-col">
                <div className="text-gray-400">January 15, 2025</div>
                <div className="text-white text-5xl font-bold">Ulaanbaatar</div>
              </div>
              <div>
                <FontAwesomeIcon icon={faLocationDot} style={{color: "#9CA3AF", width: "32px", height: "32px"}}/> 
              </div>
            </div>
            <img alt="moon" src="./img/icon-moon.png" className="w-[264px] drop-shadow-[0_0_30px_white]"/>
            <div className="text-white text-9xl font-bold">-20.6</div>
            <div className="text-[#777CCE] h-6">Clear</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
