import React from "react";
import { ListButton } from "./styles/ListButton.styled";

export default function Modal({open, children, onClose}) {
    // use open prop to decide when to open the modal
    if (!open) return null
    return (
        <div>
            <ListButton onClick={onClose}>Close</ListButton>
            {children}
        </div>
    )
}