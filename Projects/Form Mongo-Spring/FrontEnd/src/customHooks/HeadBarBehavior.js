import {useState, useEffect} from'react'

export const HeadBarBehavior = () => {
    const [isLoginOption, setIsLoginOption] = useState(true)
    const [isShowInfo, setIsShowInfo] = useState(false)
    const setLoginOption = () => {
        if (isLoginOption == false) {
            setIsLoginOption(true)
            setIsShowInfo(false)
        }
    }
    const setShowInfo = () => {
        if (isShowInfo == false) {
            setIsShowInfo(true)
            setIsLoginOption(false)
        }
    }
    return {
        isLoginOption,
        isShowInfo,
        setLoginOption,
        setShowInfo
    }
}
export default HeadBarBehavior