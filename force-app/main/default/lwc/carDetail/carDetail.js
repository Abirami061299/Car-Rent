import { api, LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class CarDetail extends NavigationMixin(LightningElement) {
    @api carDetail;

    fullDetails(){
        this[NavigationMixin.Navigate]({
            type: "standard__recordPage",
            attributes :{
                recordId : this.carDetail.data.fields.Id.value,
                objectApiName : "Car__c",
                actionName : "view",
            }
        });

    }

    get carName(){
        try{
            return this.carDetail.data.fields.Name.value;
        }catch(error){
            return 'NA';
        }
    }

    get ownerName(){
        try{
          return this.carDetail.data.fields.Contact__r.value.fields.Name.value;
        } catch(error){
          return 'NA';
        }
      }
    
      get type(){
        try{
          return this.carDetail.data.fields.Car_Type__r.value.fields.Name.value;
        } catch(error){
          return 'NA';
        }
      }
    
      get buildYear(){
        try{
          return this.carDetail.data.fields.Build_Year__c.value;
        } catch(error){
          return 'NA';
        }
      }
    
      get perDayRent(){
        try{
          return this.carDetail.data.fields.Per_Day_Rent__c.value;
        } catch(error){
          return 'NA';
        }
      }
    
      get mileage(){
        try{
          return this.carDetail.data.fields.Mileage__c.value;
        } catch(error){
          return 'NA';
        }
      }
    
      get pictureUrl(){
        try{
          return this.carDetail.data.fields.Picture__c.value;
        } catch(error){
          return 'NA';
        }
      }
}