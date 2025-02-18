import * as vscode from 'vscode';
import { fetchSpotifyData } from './utils/fetchSpotifyData';
import { next, playPauseBtn, previous, refetchBtn, songInfo } from './statusItems';
import { playNext, playPause, playPrevious } from './command';

export async function activate(context: vscode.ExtensionContext) {
	refetchBtn.text = "$(sync)";
	refetchBtn.command = "workbench.action.reloadWindow";
	refetchBtn.show();

	await fetchSpotifyData();
	// fetch every 5 mins
	setTimeout(async () => {
		await fetchSpotifyData();
	}, 1000 * 60 * 5);
	context.subscriptions.push(next, playPauseBtn, previous, songInfo, playNext, playPrevious, playPause);
}

export function deactivate() { }
