import { api, LightningElement, track, wire } from 'lwc';
import getCars from '@salesforce/apex/carSearchResultController.getListOfCars';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class CarSearchResult extends LightningElement {
    @api carTypeId;

    @track cars;
    @track selectedCarId;
    @wire(getCars, { carTypeId: '$carTypeId' })
    wiredCars({data,error}){
        if(data){
            this.cars=data;
        }
        else if(error){
            this.showToastEvent("Error",error.body.message,'error');
        }
    }
    

    showToastEvent(title,message,variant){
        this.dispatchEvent(new ShowToastEvent({
            title: title,
            message: message,
            variant: variant
        }));

    }

    get carsFound(){
        if(this.cars){
            return true;
        }
        return false;
    }

    carSelectHandler(event){
      this.selectedCarId = event.detail;
    }
       
}