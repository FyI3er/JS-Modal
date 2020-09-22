"use strict"

import modal from './modules/modal.js';
import config from './config.js';

window.addEventListener('DOMContentLoaded', () => {
    
    modal(config.modalparent, config.modalcloseparent, config.modalopenparent, config.closemodalkey);

});