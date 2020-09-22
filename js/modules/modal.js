"use strict"

function modal(modalParent, modalCloseParent, modalOpenParent, closemodalkey) {
    let modal = document.querySelector(modalParent),
        modalClose = document.querySelector(modalCloseParent),
        modalOpen = document.querySelector(modalOpenParent);

        modalOpen.addEventListener('click', () => openModal(modal));
        modalClose.addEventListener('click', closeModal);
        window.addEventListener('keydown', event => closeModalonKey(closemodalkey, event.code));
        modal.addEventListener('click', event => getClosedbyPressingOutside(event.target.className));

        function openModal(modal) {
            modal.classList.remove('hide');
            modal.classList.add('show');
            document.body.style.overflow = "hidden";
        }

        function closeModal() {
            modal.classList.remove('show');
            modal.classList.add('hide');
            document.body.style.overflow = "show";
        }

        function closeModalonKey(key, event) {
            if (event === key && modal.classList.contains('show')) {
                closeModal();
            }
        }

        function getClosedbyPressingOutside(className) {
            if (className === "modal") {
                closeModal();
            }
        }

}

export default modal;