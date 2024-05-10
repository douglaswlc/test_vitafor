import React, { useEffect } from 'react';

const ModalCharacter = ({name, species, image, url, created_at, updated_at}) => {

    return (
        <div className="modal" tabIndex="-1" id=''>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="modalTitle">{name}</h5>
                        <button id="modalCloseButton" type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>Modal body text goes here.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button id="modalSaveButton" type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalCharacter;

