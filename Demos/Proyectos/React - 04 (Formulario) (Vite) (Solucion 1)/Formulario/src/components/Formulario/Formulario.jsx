import React, { useState, useEffect } from 'react'
import './Formulario.css'
import {FormErrors} from './FormErrors/FormErrors'
import useField from '../../customHooks/useField'
import useLocalization from '../../customHooks/useLocalization'
import * as IDservice from '../../Services/Formulario/IDservice'

export function Formulario () {

    const [disabledSubmit, setDisabledSubmit] = useState(false)
    const name = useField({type: 'text'})
    const username = useField({type: 'text', maxlength: 10, toCompare: name})
    const surname = useField({type: 'text'})
    const id = useField({type: 'text'})
    const localization = useLocalization({localizationToSet:'None'})

    useEffect(() => {
        if ((name.error + username.error + surname.error + id.error) === 0
             && localization.localization !== 'None') setDisabledSubmit(false)
        else setDisabledSubmit(true)
    },[name.error, username.error, surname.error, id.error, localization.localization])

    const handleClearButton = () => {
        username.clearValue()
        name.clearValue()
        surname.clearValue()
        id.clearValue()
        localization.setLocalization('None')
    }

    const handleSubmitButton = () => {
        console.log(IDservice.checkIsWellTheId(localization.localization, id.value))
    }
    return (
        <>
        <div data-testid="formulario">
            <div className="formulario">
                <h2>User Form</h2>
                    <form>
                    <table>
                    <tbody>
                        <tr>
                            <td><label htmlFor="user">User:</label> &nbsp;&nbsp;</td>
                            <td className='textBoxInputs'><input type={username.type}
                                                                 value={username.value}
                                                                 onChange={(e) => {
                                                                    username.onChange(e)
                                                                 }}
                                                                 className={username.className}
                                                                 id="user"
                                                                 name="user"
                                                                 maxLength={username.maxLength}
                                                                 required 
                                                                 data-testid="User"/></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="name">Name:</label> &nbsp;&nbsp;</td>
                            <td className='textBoxInputs'><input type={name.type}
                                                                 value={name.value}
                                                                 onChange={(e) => {
                                                                    name.onChange(e)
                                                                    username.refresh()
                                                                 }}
                                                                 className={name.className}
                                                                 id="name"
                                                                 name="name"
                                                                 required
                                                                 data-testid="Name"/></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="surname">Surname:</label> &nbsp;&nbsp;</td>
                            <td className='textBoxInputs'><input type={surname.type}
                                                                 value={surname.value}
                                                                 onChange={(e) => {
                                                                    surname.onChange(e)
                                                                 }}
                                                                 className={surname.className}
                                                                 id="surname"
                                                                 name="surname"
                                                                 required
                                                                 data-testid="Surname"/></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="country">Country:</label> &nbsp;&nbsp;</td>
                            <td><select id="country" data-testid="Country" name="country" value={localization.localization} onChange={(e) =>localization.onClick(e.target.value)}>
                                <option value="None" data-testid="NoneOption">Select country</option>
                                <option value="Spain" data-testid="SpainOption">Spain</option>
                                <option value="Argentina" data-testid="ArgentinaOption">Argentina</option>
                            </select></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="id">ID:</label> &nbsp;&nbsp;</td>
                            <td className='textBoxInputs'><input type={id.type}
                                                                 value={id.value}
                                                                 onChange={(e) => {
                                                                    id.onChange(e)
                                                                 }}
                                                                 className={id.className}
                                                                 id="id"
                                                                 name="id"
                                                                 required
                                                                 data-testid="ID"/></td>
                        </tr>
                        <tr>
                            <td className='buttonBox'><button type="button" disabled={disabledSubmit} onClick={handleSubmitButton} data-testid="SubmitButton">Submit</button></td>
                            <td className='buttonBox'><button type="button" onClick={handleClearButton} data-testid="ClearButton">Clear</button></td>
                        </tr>
                    </tbody>
                    </table>
                </form>
            </div>
        </div>
        <FormErrors userField={username} nameField={name} surnameField={surname} idField={id}/>
        </>
    )
}