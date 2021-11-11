import React from "react";

export default function Conditions() {
    let name =  "Ricardo";
    let language = "es";

    /*if(language === "en"){
        return (
            <div>
                <h1>Hello {name}</h1>
                <p>Welcome to the React Course</p>
            </div>
        );
    } else if(language === "es"){
        return (
            <div>
                <h1>Hola {name}</h1>
                <p>Bienvenido al curso de React</p>
            </div>
        );
    }*/

    return (
    <div>
        <div>
        {
            language === "en" && <h1>Hello {name}</h1>
        }
        {
            language === "es" && <h1>Hola {name}</h1>
        }
        </div>

        <div>
        {
            language === "en" ? <h1>Hello {name}</h1> : <h1>Hola {name}</h1>
        }
        </div>

    </div>

    )
}
