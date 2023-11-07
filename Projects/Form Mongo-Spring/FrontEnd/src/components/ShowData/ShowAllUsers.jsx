import { useState } from "react";
import { UserInfo } from "../UserInfo/UserInfo";

import "./ShowAllUsers.css";

export function ShowAllUsers({ InfoName, BackgroundImgSrc }) {
    const [data, setData] = useState([]);

    fetch('http://localhost:9001/api/usuarios/todos').then(response => {
        if (response.status === 200) {
            return response.json();
        } else throw new Error('Error al obtener la lista de usuarios');
    }).then(Data => {
        setData(Data)
    }).catch(error => {
        console.error('Hubo un error:', error);
    });

    BackgroundImgSrc = (BackgroundImgSrc != undefined) ? BackgroundImgSrc : "https://static.vecteezy.com/system/resources/previews/013/099/022/non_2x/rain-drops-on-window-with-blurred-background-rainy-day-water-drop-on-glass-feeling-lonely-concept-free-photo.jpg"
    return (
        <>
            <div className='UserFormBackground'>
                <img src={BackgroundImgSrc} />
            </div>
            <div className="UserInfo">
                <h1>{InfoName}</h1>
                <table className="allUsers">
                    <tbody>
                        {data &&
                            data.map((element, index, allUsers) => {
                                if (index % 2 == 0) return (<tr className="userTR" key={index + "lol"}>
                                    <td className="userTD" key={index}><UserInfo Name={allUsers[index].personal.name}
                                        Surname={allUsers[index].personal.surname}
                                        Username={allUsers[index].username}
                                        Country={allUsers[index].personal.country}
                                        Id={allUsers[index].personal.dni} /></td>
                                    {
                                        allUsers[index + 1] && <td className="userTD" key={index + 1}>
                                            <UserInfo Name={allUsers[index + 1].personal.name}
                                                Surname={allUsers[index + 1].personal.surname}
                                                Username={allUsers[index + 1].username}
                                                Country={allUsers[index + 1].personal.country}
                                                Id={allUsers[index + 1].personal.dni} /></td>
                                    }
                                </tr>
                                )
                                return null
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}