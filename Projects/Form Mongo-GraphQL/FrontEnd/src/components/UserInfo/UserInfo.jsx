import './UserInfo.css'
export function UserInfo ({Name, Username, Surname, Country, Id }) {
    return (
        <>
            <div className='UserInfoT'>
                <table className='allTablePower'>
                    <tbody>
                        {
                            Username && <tr>
                                <td className='UserUsername'>Username :{" " + Username}</td>
                            </tr>
                        }
                        <div className='shadowBG'>
                            {
                                Name && <tr>
                                    <td className='TheUserInfo'>{"Name: " + Name}</td>
                                </tr>
                            }
                            {
                                Surname && <tr>
                                    <td className='TheUserInfo'>{"Surname: " + Surname}</td>
                                </tr>
                            }
                            {
                                Country && <tr>
                                    <td className='TheUserInfo'>{"Country: " + Country}</td>
                                </tr>
                            }
                            {
                                Id && <tr>
                                    <td className='TheUserInfo'>{"ID: " + Id}</td>
                                </tr>
                            }
                        </div>
                    </tbody>
                </table>
            </div>
        </>
    )
}