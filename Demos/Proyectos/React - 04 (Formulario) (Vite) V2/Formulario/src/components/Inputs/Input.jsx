import React from 'react'

export function Input({Format}) {

    return (
        <>
            <table>
                <tbody>
                    <tr>
                        <td className='tdLefted'><font>{Format.Name}:</font></td>
                        {
                            Format.Type == 'text' &&
                            <td className='tdRighted'>
                                <input className={Format.className}
                                       type={Format.Type}
                                       placeholder={Format.Placeholder}
                                       maxLength={Format.MaxLength}
                                       onChange={Format.onChange}
                                       data-testid={Format.TestID}
                                       value={Format.Value}/>
                            </td>
                        }
                        {
                            Format.Type == 'selector' &&
                            <td className='tdRighted'>
                                <select className={Format.className}
                                        data-testid={Format.TestID}
                                        onChange={Format.onChange}
                                        value={Format.Value}>
                                            {Format.SelectorOptions.map(element => {
                                                return <option key={element} value={element} data-TestID={element}>{element}</option>
                                            })}

                                </select>
                            </td>
                        }
                    </tr>
                </tbody>
            </table>
        </> 
    )
}