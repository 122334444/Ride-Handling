import React from "react";

const LocationSearchPanel = (props) => {
    console.log(props);

    //sample array for location
    const locations=[
        "24B, Near Kapoor's cafe, Sheryians Coding School, Bhopal",
        "23B, Near Vikrant's cafe, Sheryians Coding School, Bhopal",
        "22B, Near Malhotra's cafe, Sheryians Coding School, Bhopal",
        "21B, Near anand's cafe, Sheryians Coding School, Bhopal"

    ]
    return (
        <div>
            {/* it just a sample data */}

            {
                locations.map(function(elem){
                    return <div onClick={()=>{
                        props.setVehiclePanel(true);
                    }} className="flex gap-4  border-2 p-3 rounded-xl active:border-black items-center my-2 justify-start">
                    <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
                    <i className="ri-map-pin-fill"></i>
                    </h2>
                    <h4 className="font-medium">{elem}</h4>
                </div>
                })
            }
  
            
        </div>

    );
}

export default LocationSearchPanel;