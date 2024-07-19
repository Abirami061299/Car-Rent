import { LightningElement, track,wire } from 'lwc';
import getCarTypes from '@salesforce/apex/carSearchFormController.getListOfCarTypes';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import {NavigationMixin} from 'lightning/navigation';

export default class CarSearchForm extends NavigationMixin(LightningElement) {

    @track selectedCarType={label:'All Types',value:''};
     @track carTypes;

     @wire(getCarTypes)
     wiredCarTypes({data,error}){
        if(data){
            this.carTypes=[{label:'All Types',value:''}];
            data.forEach((element)=>{
                const carType={};
                carType.label=element.Name;
                carType.value=element.Id;
                this.carTypes.push(carType);
            })
        }
        else if(error){
            this.showToastEvent("Error",error.body.message,'error')
        }
     }


    handleCarTypeChange(event){
        const carTypeId=event.detail.value;
        const carTypeEvent=new CustomEvent('cartypeselectevent',{detail:carTypeId});
        this.dispatchEvent(carTypeEvent);
    }

    createNewCarType(){
       this[NavigationMixin]({
        type:'standard_objectPage',
        attributes:{
            objectApiName:"Car_Type__c",
            actionName:'new'
        }
       })
    }

    showToastEvent(title,message,variant){
        this.dispatchEvent(new ShowToastEvent({
            title: title,
            message: message,
            variant: variant
        }));

    }
}