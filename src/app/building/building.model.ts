import { LocalDate } from 'js-joda';
export class Building {
    public buildingCode: number;
    public buildingId: string;
    public buildingDescription: string;
    public oldNumber: number;
    public validFrom: LocalDate;
    public numberOfFloors: number;
    public profit: string;
    constructor(buildingCode: number, buildingId: string, buildingDescription: string, oldNumber: number,
        validFrom: LocalDate, numberOfFloors: number, profit: string
    ) {
        this.buildingCode = buildingCode;
        this.buildingId = buildingId;
        this.buildingDescription = buildingDescription;
        this.oldNumber = oldNumber;
        this.validFrom = validFrom;
        this.numberOfFloors = numberOfFloors;
        this.profit = profit;
    }

}