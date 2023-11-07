import {useState, useEffect} from'react'

const useField = ({type, maxlength, toCompare}) => {
    maxlength = maxlength == undefined ? 30 : maxlength
    const [maxLength, setMaxLength] = useState(maxlength)
    const [value, setValue] = useState('')
    const [className, setClassName] = useState('')
    const [error, setError] = useState(false)
    useEffect(() => {
        var errorToSet = false;
        var classNameToSet = '';
        if (value.length === 0) {
            classNameToSet = 'inputError'
            errorToSet = true
        }
        else {
            if (value.length > maxLength) setValue(value.substring(0, maxLength))
            if (toCompare != undefined) {
                if (value.includes(toCompare.value) && toCompare.value.length > 0) {
                    classNameToSet = 'inputError'
                    errorToSet = true
                }
            }
        }
        setError(errorToSet)
        setClassName(classNameToSet)
    }, [value])
    const refresh = () => {
        var errorToSet = false;
        var classNameToSet = '';
        if (value.length === 0) {
            classNameToSet = 'inputError'
            errorToSet = true
        }
        else {
            if (value.length > maxLength) setValue(value.substring(0, maxLength))
            if (toCompare != undefined) {
                if (value.includes(toCompare.value) && toCompare.value.length > 0) {
                    classNameToSet = 'inputError'
                    errorToSet = true
                }
            }
        }
        setError(errorToSet)
        setClassName(classNameToSet)
    }
    const onChange = (e) => {
        setValue(e.target.value.toUpperCase())
    }
    const clearValue = () => setValue('')
    return {
        type,
        value,
        onChange,
        clearValue,
        maxLength,
        className,
        error,
        refresh
    }
}
export default useField