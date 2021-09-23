export const NAME_PATTERN = /^[A-Za-z][A-Za-z0-9_]+(?:[ _.-][A-Za-z0-9]+)*$/m;
export const TEL_PATTERN = /^\+?\d+(-\d+)*$/m;

export const MAX_NAME_LENGTH = 64;

export const MIN_TEL_LENGTH = 2;
export const MAX_TEL_LENGTH = 30;

export const REQUEST_DELAY = 1000;

// MESSAGES
export const LOADING_MSG = '/* Loading... */';
export const ADDING_MSG = '/* Adding... */';
export const SAVING_MSG = '/* Saving... */';
export const REMOVING_MSG = '/* Removing... */';

// ERROR_MESSAGES
export const ERROR_NAME_MSG = 'Incorrect name filed';
export const ERROR_TEL_MSG = 'Incorrect tel filed';
