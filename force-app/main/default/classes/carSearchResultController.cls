public with sharing class carSearchResultController {
   
    @AuraEnabled(cacheable=true)
    public static List<Car__c> getListOfCars(String carTypeId){
        try {

            if(String.isEmpty(carTypeId)){
                return [SELECT Id, Name, Picture__c, Contact__r.Name,
                Geolocation__latitude__s, Geolocation__longitude__s FROM Car__c WHERE Available_For_Rent__c = true ];
            }
            else{
                return [SELECT Id, Name, Picture__c, Contact__r.Name,
                Geolocation__latitude__s, Geolocation__longitude__s FROM Car__c WHERE Available_For_Rent__c = true AND Car_type__c = :carTypeId];
            }
           
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}