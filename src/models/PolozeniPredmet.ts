export class PolozeniPredmet {
    ime: string;
    brojESBP: number;
    polozen: boolean;

    constructor(ime:string,brojESBP:number, polozen: boolean = false) {
        this.ime=ime;
        this.brojESBP=brojESBP;
        this.polozen=polozen;
    }
}
