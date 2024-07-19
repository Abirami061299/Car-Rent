public with sharing class carSearchFormController {
    

    @AuraEnabled(cacheable=true)
    public static List<Car_Type__c> getListOfCarTypes(){
        try {
            return [SELECT Id, Name FROM Car_Type__c];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}