import React from "react";
import Card from "../Card";

export default function Body() {
    const data = [
        {
            url: "https://sm.ign.com/ign_latam/screenshot/default/porungadragondbk_s497.png",
            name: "shenlong",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            url: "https://depor.com/resizer/Xu0TiJz0kmGAxH_Q-Aa2IylY3Xg=/980x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/ZQ4SJGIXHNGEBNJFT543NO4REE.jpg",
            name: "shenlong2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            url: "https://cdn.alfabetajuega.com/wp-content/uploads/2020/09/dragones-780x405.jpg",
            name: "shenlong3",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        }
    ]

    return (
        <div className="flex flex-col m-5">
            <div className="flex flex-row justify-center">
                <div className="m-5  w-2/5">
                    <h2 className="text-3xl font-semibold hover:text-red-500">Aqui un Titulo2</h2>
                    <p className="text-justify  mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam nulla voluptate beatae eos necessitatibus deserunt quo possimus pariatur! Magnam dolor sint tempora, ipsa alias beatae hic iure? Incidunt, molestias obcaecati!</p>
                </div>

                <div className="m-5 w-2/5 ml-32">
                    <h2 className="text-3xl font-semibold hover:text-red-500">Aqui un Titulo3</h2>
                    <p className="text-justify  mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam nulla voluptate beatae eos necessitatibus deserunt quo possimus pariatur! Magnam dolor sint tempora, ipsa alias beatae hic iure? Incidunt, molestias obcaecati!</p>
                </div>
            </div>

            <div className="flex flex-row">
                <Card data={data}/>
            </div>

        </div>
    )
}