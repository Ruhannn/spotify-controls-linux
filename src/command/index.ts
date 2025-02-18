import { commands } from 'vscode';
import controlSpotify from '../utils/controlSpotify';
import toast from '../utils/toast';

export const playNext = commands.registerCommand(
    "spotify-controls-linux.playNext",
    async () => {
        try {
            controlSpotify.next();
        } catch (e) {
            toast.error("failed to play next track", (e as Error).message);
        }
    }
);

export const playPrevious = commands.registerCommand(
    "spotify-controls-linux.playPrevious",
    async () => {
        try {
            controlSpotify.previous();
        } catch (e) {
            toast.error("failed to play next track", (e as Error).message);
        }
    }
);

export const playPause = commands.registerCommand(
    "spotify-controls-linux.playPause",
    async () => {
        try {
            controlSpotify.playPause();
        } catch (e) {
            toast.error("failed to play/Pause", (e as Error).message);
        }
    }
);
