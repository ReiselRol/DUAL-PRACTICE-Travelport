import {useState} from'react'

const useLocalization = ({localizationToSet}) => {
    const [localization, setLocalization] = useState(localizationToSet)
    const onClick = (newLocalization) => {
        setLocalization(newLocalization)
    }
    return {
        localization,
        onClick,
        setLocalization
    }
}
export default useLocalization