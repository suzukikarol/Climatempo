export class ModelResponse {
    
    public city_name:string;
    public temp:number;
    public rh:any;   
    public app_temp:number;
    public wind_spd:number;
    

    constructor(city_name: string, temp: number,rh:any,app_temp:number,wind_spd:number){
        this.city_name=city_name;
        this.temp=temp;
        this.rh = rh;
        this.app_temp = app_temp;
        this.wind_spd = wind_spd;
    
        
    }
}
