import React from 'react';


export default function InitBanner() {
    return (
        <div className="flex flex-row m-5 justify-center">
            <div className="mx-5 w-2/5">
                <img src="https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=jpg/path/s289c874394285dd0/image/i33c82816e874fc32/version/1554896753/image.jpg" alt="test"/>
            </div>

            <div className="m-5 w-2/5">
                <h2 className="text-3xl font-semibold hover:text-red-500">Aqui un Titulo</h2>
                <p className="text-justify  mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam nulla voluptate beatae eos necessitatibus deserunt quo possimus pariatur! Magnam dolor sint tempora, ipsa alias beatae hic iure? Incidunt, molestias obcaecati!</p>
                <div className="m-5 w-2/5">

                </div>
            </div>
        </div>
    )
}