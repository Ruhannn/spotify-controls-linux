import { window, StatusBarAlignment } from 'vscode';

export const songInfo = window.createStatusBarItem(
    StatusBarAlignment.Left,
    100
);

export const previous = window.createStatusBarItem(
    StatusBarAlignment.Left,
    100
);

export const playPauseBtn = window.createStatusBarItem(
    StatusBarAlignment.Left,
    100
);

export const next = window.createStatusBarItem(
    StatusBarAlignment.Left,
    100
);

export const refetchBtn = window.createStatusBarItem(
    StatusBarAlignment.Left,
    100
);
