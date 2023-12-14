export class Company{
    public id:number;
    public code:string;
    public description:string;    
    constructor(id:number,code:string,desc:string){
        this.code=code;
        this.description=desc;
        this.id=id;
        
    }
    
}