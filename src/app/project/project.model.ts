import { LocalDate } from 'js-joda';
export class Project {
    public projectCode: number;
    public projectId: string;
    public projectDescription: string;
    public validFrom: LocalDate;
    public profit: string;
    
    constructor(projectCode: number, projectId: string, projectDescription: string, validFrom: LocalDate, profit: string
    ) {
        this.projectCode=projectCode;
        this.projectId=projectId;
        this.projectDescription=projectDescription;
        this.validFrom = validFrom;
        this.profit = profit;
    }

}