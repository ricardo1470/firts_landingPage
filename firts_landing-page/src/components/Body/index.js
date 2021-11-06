import React from "react";
import Card from "../Card";

export default function Body() {
    const data = [
        {
            url: "https://th.bing.com/th/id/R.e1e6c0172e31dc5562ebf67f4137d6a3?rik=VzXDIuW3%2byAUhg&pid=ImgRaw&r=0",
            name: "Cat Name",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            url: "https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/59c4f5655bafe82c692a7052/gato-marron_0.jpg",
            name: "Cat Name2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            url: "https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/594a1ced5bafe85dfd3c9869/gato-romano_0.jpg",
            name: "Cat Name3",
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