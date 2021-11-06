import React from "react";

export default function Card(props) {
    let data = props.data;
    return (
        <>
            {
                data.map((item, index) => (
                    <div className="flex flex-row m-5" key={index}>
                        <div className="mx-5 w-2/5">
                            <img src={item.url} alt="test"/>
                        </div>

                        <div className="m-5 w-2/5">
                            <h2 className="text-3xl font-semibold hover:text-red-500">{item.name}</h2>
                            <p className="text-justify text-xl  mt-2">{item.description}</p>
                            <p className="text-sm text-center">Short Description</p>
                        </div>
                    </div>
                ))
            }
        </>
    )
}
