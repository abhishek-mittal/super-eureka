import React from 'react';
import './scss/internal.scss';


export const Image = ({ src, ...rest }: React.ImgHTMLAttributes<{ src: string }>) => {

    try {
        const imgSrc = require('./../../../' + src);
        return <img src={imgSrc} alt="" {...rest} />
    } catch (error) {
        return <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTT-qZRxxQzGjRwsJKjCieAhXeCiXaDr0fxmIVdJ4gj7_eXRl5WyjqSiUx6T4dTIaeCPkpwBbBgh2X19dLaG8AYgozQpDiugazYFYwZ&usqp=CAU&ec=45682162" alt="" {...rest} />
    }

}

export const Loading = () => {
    return (
        <div className="loading-wrapper">
            loading...
        </div>
    )
}

export const Padded = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="padded-wrapper">
            {children}
        </div>
    )
}