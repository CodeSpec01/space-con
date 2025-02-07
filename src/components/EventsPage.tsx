import Card from "./Card";
import { allEvents } from "../constants";
import { useState } from "react";

const EventsPage = () => {
  const [selectedTab , setSelectedTab] = useState("All Events")

  const handleTabChange = (event:any)=>{
    setSelectedTab(event.target.value)
    console.log(event.target.value)
  }

  return (
    <>
      <div
        id="main-content"
        className="transition-all duration-1000 -z-50 overflow-x-hidden "
      >
        <h2 className="text-white text-center relative mt-[10vh] md:mt-[13vh] text-[12vw] md:text-[7vw] tracking-wider font-semibold ">
          All Events
        </h2>
        {/* Tabs section  */}
        <div className="flex justify-center items-center mt-5">
            <div>
                      <div>
                        {/* Mobile Dropdown */}
                        <div className="sm:hidden">
                          <label htmlFor="Tab" className="sr-only">Tab</label>
                          <select 
                            id="Tab" 
                            value={selectedTab}
                            onChange={handleTabChange}
                            className="w-full rounded-lg  border-gray-700 bg-black text-gray-300 p-3 outline-none"
                          >
                            <option value="All Events">All Events</option>
                            <option value="Day 1">Day 1</option>
                            <option value="Day 2">Day 2</option>
                            <option value="Day 3">Day 3</option>
                          </select>
                        </div>

                        {/* Desktop */}
                        <div className="hidden sm:block">
                          <nav className="flex gap-6 bg-black p-3 rounded-full shadow-md border border-gray-800" aria-label="Tabs">
                            {["All Events","Day 1", "Day 2", "Day 3"].map((tab, index) => (
                              <a
                                key={index}
                                
                                onClick={()=>{setSelectedTab(tab)}}
                                className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300
                                  ${tab === selectedTab
                                    ? "bg-white text-black shadow-md border border-gray-500"
                                    : "text-gray-400 hover:bg-gray-800 hover:text-white hover:border hover:border-gray-700"
                                  }`}
                              >
                                {tab}
                              </a>
                            ))}
                          </nav>
                        </div>
                      </div>
                    </div>
          </div>


        {/*  */}

        <div className="w-[95%] flex flex-wrap m-auto mt-10 md:justify-around justify-center gap-y-10 text-white ">
          {selectedTab == "All Events" ? allEvents?.map((event, i) => {
            return <Card className="w-[90vw]" data={event} key={i} />
          }) : (null)}
          {allEvents?.map((event,i)=>{
            if(event.Day == selectedTab){
              return <Card className="w-[90vw]" data={event} key={i} />
            }
          })}
        </div>
      </div>
    </>
  );
};

export default EventsPage;
