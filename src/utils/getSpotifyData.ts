import { EventEmitter } from 'events';
import { MPRISProperties } from '../@types';
import { getPlayerPropertiesInterface, playerInterfaceName } from './spotifyDbusPlayer';


class SpotifyMPRIS extends EventEmitter {
    private properties: MPRISProperties | null = null;
    private data = {
        isPlaying: false,
        title: '',
        artist: '',
        url: '',
        CanGoNext: false,
        CanGoPrevious: false,
    };

    constructor() {
        super();
        this.init();
    }

    private async init() {

        const propertiesInterface = await getPlayerPropertiesInterface();

        this.updateData(await propertiesInterface.GetAll(playerInterfaceName));

        propertiesInterface.on('PropertiesChanged', (interfaceName: string, changedProperties: MPRISProperties) => {
            if (interfaceName === playerInterfaceName) {
                this.updateData(changedProperties);
            }
        });

    }

    private updateData(newProperties: MPRISProperties) {
        this.properties = { ...this.properties, ...newProperties };

        this.data = {
            isPlaying: this.properties?.PlaybackStatus?.value === 'Playing',
            title: this.properties?.Metadata?.value?.['xesam:title']?.value || '',
            artist: this.properties?.Metadata?.value?.['xesam:artist']?.value?.[0] || '',
            url: this.properties?.Metadata?.value?.['xesam:url']?.value || '',
            CanGoNext: !!this.properties?.CanGoNext,
            CanGoPrevious: !!this.properties?.CanGoPrevious,
        };

        this.emit('update', this.data);
    }

    getData() {
        return this.data;
    }
}

const spotifyMPRIS = new SpotifyMPRIS();

export function getSpotifyData(callback: (data: typeof spotifyMPRIS['data']) => void) {
    callback(spotifyMPRIS.getData());
    spotifyMPRIS.on('update', callback);
}
