import React, { useState } from 'react'

const LoginPage = () => {
    let [ponts, setPonts] = useState(0)

    return (
        <div>
            <h1>login</h1>
            {ponts}
        </div>
    )
}

export default LoginPage