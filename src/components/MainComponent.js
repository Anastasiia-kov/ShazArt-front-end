import React, { useState } from 'react'
import '../CSS/MainComponent.css'
import Modal from "react-modal";
import ArtistNameForm from './ArtistNameForm'
import CameraUser from './CameraUser';
import PainterPage from './PainterPage'

Modal.setAppElement("#root");
const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        background: "#fffff"
    },
};

function MainCmponent() {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [artistName, setArtistName] = useState(null)

    const closeModal = async () => {
        setIsOpen(false);
    };

    const openForm = async () => {
        setIsOpen(true)
    }

    const handleArtistName = async (artist) => {
        console.log(artist)
        setArtistName(artist)
        setIsOpen(false)
    }

    if(artistName) {
        return <PainterPage />
    } else {
    return (
        <div className="main-div">
            <div className="app-name">ShazArt</div>
            <button className="logo" onClick={openForm}></button>
            <div className="text">Press to find the arts</div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <CameraUser artistName={handleArtistName}/>
                {/* <ArtistNameForm></ArtistNameForm> */}
            </Modal>
        </div>
    )
    }
}

export default MainCmponent