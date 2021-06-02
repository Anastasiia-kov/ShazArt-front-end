import React from 'react'
import ArtItem from './ArtItem'

function ArtList (props) {
    return(
        <div>
            {props.artsId.map((art) => {
                return <ArtItem
                    key={art}
                    art={art}
                ></ArtItem>
            })}
        </div>
)
}

export default ArtList