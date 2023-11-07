import {useState, useEffect} from'react'

const useErrorField = ({field, cantContain, fieldName, cantContainName}) => {
    const [totalError, setTotalError] = useState(0)
    const [errorMessage, setErrorMessage] = useState('')
    const [extraErrorMessage, setExtraErrorMessage] = useState('')
    useEffect(() => {
        var executionUseStateErrors = 0
        if (field.value.length === 0) {
            setErrorMessage(fieldName + ': El campo no puede estar vacío.')
            executionUseStateErrors ++
            
        }
        else setErrorMessage('')
        if (cantContain != undefined) {
            if (field.value.includes(cantContain.value) && cantContain.value.length > 0) {
                setExtraErrorMessage(fieldName + ': No puede contener el texto del campo ' + cantContainName + '.')
                executionUseStateErrors ++
            }
            else setExtraErrorMessage('')
        }
        setTotalError(executionUseStateErrors);
    },[field.value,field.className])
    return {
        errorMessage,
        totalError,
        extraErrorMessage
    }
}
export default useErrorField