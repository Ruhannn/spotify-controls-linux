import dbus from 'dbus-next';
const serviceName = 'org.mpris.MediaPlayer2.spotify';
const objectPath = '/org/mpris/MediaPlayer2';
export const playerInterfaceName = 'org.mpris.MediaPlayer2.Player';
export const propertiesInterfaceName = 'org.freedesktop.DBus.Properties';
export const sessionBus = dbus.sessionBus();

async function getProxyObject() {
    return await sessionBus.getProxyObject(serviceName, objectPath);
}

export async function getPlayerInterface(): Promise<dbus.ClientInterface> {
    const proxyObject = await getProxyObject();
    const playerInterface = proxyObject.getInterface(playerInterfaceName);
    return playerInterface;
}

export async function getPlayerPropertiesInterface(): Promise<dbus.ClientInterface> {
    const proxyObject = await getProxyObject();
    const propertiesInterface = proxyObject.getInterface(propertiesInterfaceName);
    return propertiesInterface;
}
