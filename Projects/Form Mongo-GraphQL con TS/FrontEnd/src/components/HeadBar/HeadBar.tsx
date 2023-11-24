import React from 'react'
import './HeadBar.css'
export function HeadBar({HeadBarBehaivor}) {
    return (
        <div className="HeadBar">
            <table className='HeadBarTable'>
                <tr className='HeadBarTableTr'>
                    <td className='HeadBarTableTd' onClick={HeadBarBehaivor.setLoginOption}>User Form</td>
                    <td className='HeadBarTableTd' onClick={HeadBarBehaivor.setShowInfo}>User Info</td>
                </tr>
            </table>
        </div>
    )
}