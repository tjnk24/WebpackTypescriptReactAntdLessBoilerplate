import {EnhancedStore} from '@reduxjs/toolkit';

export interface RendererOptions {
    styles: string;
    scripts: string;
    html: string;
    store: EnhancedStore;
}
