import React, { useEffect, useState } from 'react'
import './FormErrors.css'

export function FormErrors({ Name, Inputs }) {
    const [errorCount, setErrorCount] = useState(0)

    useEffect(() => {
        var totalErrors = 0;
        for (var input = 0; input < Inputs.length; input++) totalErrors += Inputs[input].errorMessage.length;
        if (totalErrors !== errorCount) setErrorCount(totalErrors)
    }, [Inputs])

    return (
        <>
        {
            errorCount > 0 &&
            <div className='FormErrors' data-testid="FormErrors">
                {Inputs.map((input, index) => {
                    return (
                        <p key={input.Name + index}>
                            {input.errorMessage.map(error => {
                                return <span data-testid={"E:" + input.Name} key={error}>{error}</span>;
                            })}
                        </p>
                    );
                })}
            </div>

        }
        </>
    )
}