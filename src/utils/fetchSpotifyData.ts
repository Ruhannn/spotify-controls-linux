import { next, playPauseBtn, previous, refetchBtn, songInfo } from "../statusItems";
import controlSpotify from "./controlSpotify";
import { getSpotifyData } from "./getSpotifyData";
import toast from "./toast";

export async function fetchSpotifyData() {
    controlSpotify.initializePlayerInterface().then(() => {
        getSpotifyData((data) => {
            songInfo.text = `${data.artist} - ${data.title}`;
            previous.text = '$(chevron-left)';
            next.text = '$(chevron-right)';
            playPauseBtn.text = `${data.isPlaying ? '$(debug-pause)' : '$(play)'}`;

            previous.command = "spotify-controls-linux.playPrevious";
            playPauseBtn.command = "spotify-controls-linux.playPause";
            next.command = "spotify-controls-linux.playNext";

            songInfo.show();
            previous.show();
            playPauseBtn.show();
            next.show();
            refetchBtn.hide();
        });
    }).catch((e) => {
        toast.info("spotify is not running,i will be slapping");
        songInfo.hide();
        previous.hide();
        playPauseBtn.hide();
        next.hide();
    });

}
