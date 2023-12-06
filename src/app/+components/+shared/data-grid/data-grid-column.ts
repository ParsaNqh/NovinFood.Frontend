export class DataGridColumn{
    field:string='';
    title:string='';
    type:string='';

    constructor() {
        if (this.type==null) {
            this.type='text'     
        }  
    }
}