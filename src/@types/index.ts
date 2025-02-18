type Variant<T> = {
    value: T;
};


type Metadata = {
    "mpris:trackid": Variant<string>;
    "mpris:length": Variant<bigint>;
    "mpris:artUrl": Variant<string>;
    "xesam:album": Variant<string>;
    "xesam:albumArtist": Variant<string[]>;
    "xesam:artist": Variant<string[]>;
    "xesam:autoRating": Variant<number>;
    "xesam:discNumber": Variant<number>;
    "xesam:title": Variant<string>;
    "xesam:trackNumber": Variant<number>;
    "xesam:url": Variant<string>;
};

export interface MPRISProperties {
    PlaybackStatus: Variant<string>;
    LoopStatus: Variant<string>;
    Rate: Variant<number>;
    Shuffle: Variant<boolean>;
    Metadata: Variant<Metadata>;
    Volume: Variant<number>;
    Position: Variant<bigint>;
    MinimumRate: Variant<number>;
    MaximumRate: Variant<number>;
    CanGoNext: Variant<boolean>;
    CanGoPrevious: Variant<boolean>;
    CanPlay: Variant<boolean>;
    CanPause: Variant<boolean>;
    CanSeek: Variant<boolean>;
    CanControl: Variant<boolean>;
}
