import React, { useEffect, useState } from 'react'
import './Formulario.css'
import useInput from '../../customHooks/useInput'
import * as IDservice from '../../services/IDservice'
import { Input } from '../Inputs/Input'
import { FormErrors } from '../FormErros/FormErrors'
import { FormInfo } from '../FormInfo/FormInfo'
import { Toast } from '../Toast/Toast'

export function Formulario({ FormName, BackgroundImgSrc }) {
    BackgroundImgSrc = (BackgroundImgSrc != undefined) ? BackgroundImgSrc : "https://static.vecteezy.com/system/resources/previews/013/099/022/non_2x/rain-drops-on-window-with-blurred-background-rainy-day-water-drop-on-glass-feeling-lonely-concept-free-photo.jpg"
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)
    const Inputs = [
        useInput({ Type: 'text', Name: 'Name', Placeholder: 'Enter your name', TestID: 'Name' }),
        useInput({ Type: 'text', Name: 'Username', Placeholder: 'Javaman', TestID: 'Username', MaxLength: 10 }),
        useInput({ Type: 'text', Name: 'Surname', Placeholder: 'Enter your surname', TestID: 'Surname' }),
        useInput({ Type: 'selector', Name: 'Country', SelectorOptions: ["Select your country", "Spain", "Argentina"], TestID: 'Countries' }),
        useInput({ Type: 'text', Name: 'Id', Placeholder: '12345678Z', TestID: 'Id' }),
    ]
    const IName = { Name: 0, Username: 1, Surame: 2, Country: 3, Id: 4 }
    const clearButtons = () => {
        for (var input = 0; input < Inputs.length; input++) Inputs[input].clearData()
    }
    useEffect(() => {

        if (Inputs[IName.Name].Value.includes(Inputs[IName.Username].Value)
            && Inputs[IName.Username].Value.length > 0) {
            Inputs[IName.Name].addErrorMessage("the username cant contain the name.")
        } else Inputs[IName.Name].cleanError("the username cant contain the name.")

    }, [Inputs[IName.Name]], [Inputs[IName.Username]])
    useEffect(() => {

        if (Inputs[IName.Id].Value.length > 0
            && IDservice.checkIsWellTheId(Inputs[IName.Country].Value, Inputs[IName.Id].Value) == false
            && Inputs[IName.Country].SelectorOptions[0] != Inputs[IName.Country].Value) {
            Inputs[IName.Id].addErrorMessage("the introduced id is not valid.")
        } else Inputs[IName.Id].cleanError("the introduced id is not valid.")

        if (Inputs[IName.Id].Value.length > 0
            && Inputs[IName.Country].SelectorOptions[0] == Inputs[IName.Country].Value) {
            Inputs[IName.Country].addErrorMessage("you must select a country.")
        } else Inputs[IName.Country].cleanError("you must select a country.")

    }, [[Inputs[IName.Id]], [Inputs[IName.Country]]])
    const canSubmitTheForm = () => {

        var canSubmit = true
        for (var input = 0; input < Inputs.length; input++) if (Inputs[input].errorMessage.length > 0
            || Inputs[input].Value.length == 0) canSubmit = false
        return canSubmit
    }
    const handleOnSubmit = (e) => {
        if (isFormSubmitted == false) {
            const url = 'http://localhost:9001/api/usuarios/crear';
            const nuevoUsuario = {
                username: Inputs[IName.Username].Value,
                personal: {
                    name: Inputs[IName.Name].Value,
                    surname: Inputs[IName.Surame].Value,
                    country: Inputs[IName.Country].Value.toUpperCase(),
                    dni: Inputs[IName.Id].Value
                }
            };
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(nuevoUsuario)
            })
            .then(response => {
                if (response.ok) {
                    setIsFormSubmitted(true)
                    return response.json();
                } else throw new Error('Error al crear el usuario');
            })
            e.preventDefault()
        }
    }
    return (
        <>
            <div className='UserFormBackground'>
                <img src={BackgroundImgSrc} />
            </div>
            <div data-testid="UserForm" className='UserForm'>
                <form onSubmit={handleOnSubmit}>
                    <h1>{FormName}</h1>
                    <div className='FormInputs'>
                        {isFormSubmitted == false && Inputs.map(element => { return <Input key={element.Name} Format={element} /> })}
                        {isFormSubmitted && Inputs.map(element => { return <FormInfo key={element.Name} Format={element} /> })}
                    </div>
                    <div className='buttonsDiv'>
                        {
                            isFormSubmitted == false &&
                            <>
                                <button data-testid="ClearButton" id='clearButton' type='button' onClick={clearButtons} disabled={isFormSubmitted}>Clear</button>
                                {canSubmitTheForm() && <button data-testid="SubmitButton" id='toSubmit' type='submit' onClick={handleOnSubmit} disabled={false}>Submit</button>}
                                {!canSubmitTheForm() && <button data-testid="SubmitButton" type='submit' onClick={handleOnSubmit} disabled={true}>Submit</button>}

                            </>
                        }
                    </div>
                </form>
            </div>
            <div>

            </div>
            <FormErrors Inputs={Inputs} Name={undefined} />
            {isFormSubmitted && <Toast message={FormName + " Introduced Succesfully !"} errorToast={false} time={3} />}
        </>
    )
}