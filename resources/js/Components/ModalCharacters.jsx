import React from 'react';

const ModalCharacter = (name, species, image, url, created_at, updated_at) => {
    return (
        <div class="modal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{name}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p>{species}</p>
                    <img src={image} className="card-img-top" alt={name} />
                    <p>{url}</p>
                    <p>{created_at}</p>
                    <p>{updated_at}</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ModalCharacter;

