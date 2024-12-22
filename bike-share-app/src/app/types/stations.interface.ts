export interface Station {
    schemeId: number;
    schemeShortName: string;
    stationId: number;
    name: string;
    nameIrish: string;
    docksCount: number;
    bikesAvailable: number;
    bikesAvailableTypeOne: number;
    bikesAvailableTypeTwo: number;
    docksAvailable: number;
    status: number;
    latitude: number;
    longitude: number;
    dateStatus: string;
}