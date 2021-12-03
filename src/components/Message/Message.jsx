import React from 'react'

const titleStyling = {
    width: "fit-content",
    margin: "auto",
    color: "white",
}

export const Message = ({loading}) => {

    return (
        <div>
            <h1 style={titleStyling}>{loading ? <h1>Loading...</h1> : <h1>No Games Were Found</h1>}</h1>
        </div>
    )
}
