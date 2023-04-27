export interface IPhone{
    Generation: string;
    ANumber: string[];
    Bootrom: string[];
    FCCID: string[];
    InterName: string;
    Identifier: string;
    Image: string;
    Models:{
        Color: string;
        Storage: string;
        Model: string[];
    }[];
}