import React, { useState } from 'react'

const LoginPage = () => {
    let [ponts, setPonts] = useState(0)

    return (
        <div className='main-cont'>
            <h1>login</h1>
            <h2> ponts: {ponts}</h2>
            <button onClick={() => setPonts(ponts +1)}>+</button>
        </div>
    )
}

export default LoginPage