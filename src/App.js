import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
// import { Search } from './components/Search';

function App() {
  

  return (
    <div className="flex flex-row relative overflow-hidden" >
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
      {/* Background  {{{ 1140 deer ajillahgui !!}}} */}
      <div className="z-10 inset-0 flex items-center justify-center absolute box-border">  
        <div className="absolute w-[140px] h-[243px] bg-[#F3F4F6] flex flex-col items-end justify-between ">
          <div className='w-[70px] h-[70px] bg-[#0F141E] ml-[0px] mb-[0px] pl-[70px] rounded-bl-[100%]'></div>
          <div className="w-[70px] h-[70px] bg-[#0F141E] ml-[0px] mb-[0px] pl-[70px] rounded-tl-[100%]"></div>
          <div className='w-[35px] h-[240px] bg-[#0F141E] absolute'></div>
        </div>
        <div className="w-[140px] h-[140px] border border-[#888888] bg-[#F3F4F6] border-opacity-10 rounded-full ] box-border flex flex-row justify-center z-10 items-center gap-3">
            <img alt="logo-1" src="./img/logo-left.png" style={{width: "43px", height: "86px"}}/>
            <img alt="logo-2" src="./img/logo-right.png" style={{width: "43px", height: "86px"}}/>
        </div>
        <div className="w-[340px] h-[340px] border border-[#888888] border-opacity-10 rounded-[50%] absolute"></div>
        <div className="w-[540px] h-[540px] border border-[#888888] border-opacity-10 rounded-[50%] absolute"></div>
        <div className="w-[940px] h-[940px] border border-[#888888] border-opacity-10 rounded-[50%] absolute"></div>
        <div className="w-[1340px] h-[1340px] border border-[#888888] border-opacity-10 rounded-[50%] absolute"></div>
        <div className="w-[1740px] h-[1740px] border border-[#888888] border-opacity-10 rounded-[50%] absolute"></div>
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
            <div className="bg-gradient-to-t from-[#676775] to-[#222230] text-9xl font-bold inline-block text-transparent bg-clip-text text">-10.6</div>
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
            <div className="bg-gradient-to-t from-[#515151] to-[#dbdbdb] text-9xl font-bold inline-block text-transparent bg-clip-text text">-20.6</div>
            <div className="text-[#777CCE] h-6">Clear</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
