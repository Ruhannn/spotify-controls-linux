import { Variant } from 'dbus-next';
import { MPRISProperties } from '../@types';
import { getPlayerInterface, getPlayerPropertiesInterface, playerInterfaceName } from './spotifyDbusPlayer';

class ControlSpotify {
    private playerInterface: any;
    private propertiesInterface: any;
    private properties!: MPRISProperties;
    constructor() {
        this.playerInterface = null;
    }

    async initializePlayerInterface(): Promise<void> {
        try {
            if (!this.playerInterface) {
                this.playerInterface = await getPlayerInterface();
            }

            if (!this.playerInterface) {
                throw new Error("Failed to initialize player interface.");
            }

            if (!this.propertiesInterface) {
                this.propertiesInterface = await getPlayerPropertiesInterface();
            }

            if (!this.propertiesInterface) {
                throw new Error("Failed to initialize properties interface.");
            }

            this.properties = await this.propertiesInterface.GetAll(playerInterfaceName);

        } catch (error) {
            throw error;
        }
    }



    async next(): Promise<void> {
        await this.playerInterface.Next();
    }

    async previous(): Promise<void> {
        await this.playerInterface.Previous();
    }

    async playPause(): Promise<void> {
        await this.playerInterface.PlayPause()
    }
    async pause(): Promise<void> {
        await this.playerInterface.Pause();
    }

    async play(): Promise<void> {
        await this.playerInterface.Play();
    }
    async increaseVolume(): Promise<void> {
        await this.propertiesInterface.Set(playerInterfaceName, 'Volume', new Variant('d', this.properties.Volume.value + 0.05));
    }
    async decreaseVolume(): Promise<void> {
        await this.propertiesInterface.Set(playerInterfaceName, 'Volume', new Variant('d', this.properties.Volume.value - 0.05));
    }
}

const controlSpotify = new ControlSpotify();

export default controlSpotify;
