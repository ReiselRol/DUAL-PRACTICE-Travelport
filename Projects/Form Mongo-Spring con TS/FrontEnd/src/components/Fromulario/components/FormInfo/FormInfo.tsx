import './FormInfo.css'
import React from 'react'

export function FormInfo({Format}) {
    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <td className='tdLefted'><font>{Format.Name}:</font></td>
                        <td className='tdRighted'>{Format.Value.toUpperCase()}</td>
                    </tr>
                </tbody>
            </table>
        </>
        
    )
}