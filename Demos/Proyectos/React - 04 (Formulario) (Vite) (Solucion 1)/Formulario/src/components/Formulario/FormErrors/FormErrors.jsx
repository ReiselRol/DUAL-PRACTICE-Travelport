import React from 'react'
import './FormErrors.css'
import useErrorField from '../../../customHooks/useErrorFields'

export function FormErrors ({userField, nameField, surnameField, idField}) {
    const userErrors = useErrorField({field: userField, cantContain: nameField, fieldName: 'Username', cantContainName: 'Name'})
    const nameErrors = useErrorField({field: nameField, fieldName: 'Name'})
    const surnameErrors = useErrorField({field: surnameField, fieldName: 'Surame'})
    const idErrors = useErrorField({field: idField, fieldName: 'ID'})
    const totalErrors = () => {
        return userErrors.totalError + nameErrors.totalError + surnameErrors.totalError + idErrors.totalError
    }
    return (
        <>
            {totalErrors() > 0 && <div className='formularioErrors' data-testid="formularioErrors">
                {userErrors.errorMessage} {userErrors.errorMessage.length > 0 && <br />}
                {userErrors.extraErrorMessage} {userErrors.extraErrorMessage.length > 0 && <br />}
                {nameErrors.errorMessage} {nameErrors.errorMessage.length > 0 && <br />}
                {surnameErrors.errorMessage} {surnameErrors.errorMessage.length > 0 && <br />}
                {idErrors.errorMessage} {idErrors.errorMessage.length > 0 && <br />}
            </div>}
        </>
    )
}