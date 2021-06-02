import React, {useState} from 'react'
import '../CSS/ArtistNameForm.css'

function ArtistNameForm () {
    const [artistName, setArtistName] = useState('')

    const handleFormSubmit = (event) => {
        event.preventDefault()
        console.log(artistName)
    }
    return <div> 
        <form onSubmit={handleFormSubmit}>
            <label className="m-20">Print the name of the artist</label>
            <input className="m-20" type="text" value={artistName} onChange={e => setArtistName(e.target.value)}></input>
            <button  className="m-20 find-button" type="submit">Find</button>
        </form>
    </div>
}

export default ArtistNameForm