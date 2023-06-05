// popup modal referenced from: https://youtu.be/LyLa7dU5tp8

import React from "react";
import { CardButton } from "./styles/CardButton.styled";

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'snow',
    padding: '50px',
    zIndex: 1000
}

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .6)',
    zIndex: 1000
}

export default function Modal({open, children, onClose}) {
    // use open prop to decide when to open the modal
    if (!open) return null
    return (
        <>
            <div style={OVERLAY_STYLES}>

            </div>
            <div style={MODAL_STYLES}>
                {children}
                <CardButton onClick={onClose}>Close</CardButton>
            </div>
        </>
        
    )
}