import React from 'react'
import '../Minesweeper.css'

export function getHtmlEmbellisher (setIsMockDataActivated, isMockDataActivated) {
    return (
        <>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-800 to-blue-200 z-0" />
            <div className='z-50 bg-gradient-to-b from-slate-600 to-slate-400 text-3xl inset-0 absolute w-1/5 h-max text-center justify-center p-2 text-white font-semibold tracking-wider top-24 left-1/4 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>Minesweeper</div>
        </>
    )
}