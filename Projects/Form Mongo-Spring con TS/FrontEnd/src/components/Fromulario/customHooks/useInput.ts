import {useState, useEffect} from'react'
import * as Engine from '../engine/engine'

const useInput = ({Type, InitialValue, Name, Placeholder, MaxLength, TestID, SelectorOptions}) => {

    TestID = (TestID!= undefined) ? TestID : ''
    MaxLength = (MaxLength!= undefined) ? MaxLength : 100
    Placeholder = (Placeholder != undefined) ? Placeholder : ''

    const [Value, setValue] = useState((InitialValue != undefined) ? InitialValue : ((Type == 'text') ? '' : SelectorOptions[0]))
    const [isInitialized, setIsInitialized] = useState(false)
    const [className, setClassName] = useState('')
    const [errorMessage, setErrorMessage] = useState([])

    const haveTheError = (errorToFind) => {
        var encontrada = false
        for (var i = 0; i < errorMessage.length; i++) if (errorMessage[i].includes(errorToFind)) encontrada = true
        return encontrada
    }
    const handleTextErrors = (newErrorMessages) => {
        var changed = false
        if (Value.length === 0) {
            if (haveTheError(Name +': This Field cant be empty') == false) {
                changed = true
                newErrorMessages.push(Name +': This Field cant be empty')
            }
        } else if ((haveTheError(Name +': This Field cant be empty') == true)) {
            changed = true
            newErrorMessages = Engine.getArrayExceptIncluded(newErrorMessages, 'This Field cant be empty')
        }
        if (Value.length > MaxLength) setValue(Value.substring(0, MaxLength))
                
        return [changed, newErrorMessages]
    }
    const handleSelectorErrors = (newErrorMessages) => {
        var changed = false
        if (Value == SelectorOptions[0]) {
            if (haveTheError(Name +': This Field cant be selected as a ' + Name) == false) {
                changed = true
                newErrorMessages.push(Name +': This Field cant be selected as a ' + Name)
            }
        } else if (haveTheError(Name +': This Field cant be selected as a ' + Name) == true){
                changed = true
                newErrorMessages = Engine.getArrayExceptIncluded(newErrorMessages, 'This Field cant be selected')
        } 
        return [changed, newErrorMessages]
    }
    const handleErrors = () => {
        if (isInitialized) {
            var newErrorMessages = [...errorMessage];
            var newClassName = ''
            var changedErrorMessages = false
            if (Type == 'text') [changedErrorMessages, newErrorMessages] = handleTextErrors(newErrorMessages)
            else if (Type == 'selector') [changedErrorMessages, newErrorMessages] = handleSelectorErrors(newErrorMessages)
            newClassName = (newErrorMessages.length > 0) ? 'inputError' : ''
            setClassName(newClassName)
            if (changedErrorMessages) setErrorMessage(newErrorMessages)
        }
    }

    useEffect(() => {
        handleErrors()
    }, [Value, errorMessage, isInitialized])

    const refresh = () => {
        handleErrors()
    }

    const onChange = (e) => {
        if (Type == 'text')  setValue(e.target.value.toUpperCase())
        else if (Type == 'selector') setValue(e.target.value)
        setIsInitialized(true);
    }
    const addErrorMessage = (error) => {
        if (haveTheError(error) == false){
            var newErrorMessages = [...errorMessage]
            newErrorMessages.push(Name + ": " + error)
            setErrorMessage(newErrorMessages)
            if (className.length == 0) setClassName('inputError')
        }
    }

    const setNewErrorMessage = (array) => {
        setErrorMessage(array)
        setClassName('inputError')
    }
    const clearData = () => {
        setIsInitialized(false);
        if (Type == 'text') setValue('')
        else if (Type == 'selector') setValue(SelectorOptions[0])
        setClassName('')
        setErrorMessage([])
    }

    const cleanError = (errorToClean) => {
        if (haveTheError(errorToClean)) setNewErrorMessage(Engine.getArrayExceptIncluded(errorMessage, errorToClean))
    }

    return {
        Type,
        Name,
        Value,
        Placeholder,
        MaxLength,
        isInitialized,
        className,
        TestID,
        SelectorOptions,
        errorMessage,
        onChange,
        refresh,
        addErrorMessage,
        haveTheError,
        setNewErrorMessage,
        clearData,
        cleanError
    }
    
}
export default useInput