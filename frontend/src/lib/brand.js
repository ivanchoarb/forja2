// Forja's own addresses, set at build time. Empty means "not published yet" and hides what needs them.
// VITE_SOURCE_URL: the public repository of THIS fork. The AGPL requires offering the modified source
// to everyone who uses the app over a network, so set it before opening the app to anyone.
// VITE_UPDATE_REPO: "owner/repo" whose GitHub releases carry the Android APK; empty turns the check off.
export const SOURCE_URL = import.meta.env.VITE_SOURCE_URL || ''
export const UPDATE_REPO = import.meta.env.VITE_UPDATE_REPO || ''
export const UPSTREAM_URL = 'https://github.com/DuarteSantos8/openGym'
