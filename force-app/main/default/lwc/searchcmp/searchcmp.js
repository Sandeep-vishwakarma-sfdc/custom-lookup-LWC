import { LightningElement,track } from 'lwc';

export default class Searchcmp extends LightningElement {
    @track account_filter = '';
    @track contact_filter = 'Phone!=null';
    @track account = '';
    @track contact = '';
    @track disable_contact = false;
    @track disable_account = false;
    handleAccountSelected(event){
        console.log(`handleAccountSelected ${event.detail.recId}-${event.detail.recName}`);
        let recordId = event.detail.recId;
        if(recordId)
            this.contact_filter = `Phone!=null and AccountId='${recordId}'`;
    }
    handleMultipleAccountSelected(event){
        console.log(`handleMultipleAccountSelected ${event.detail}`);
        let records = JSON.stringify(event.detail);
        console.log('str ',records);
        if(records)
            this.contact_filter = `Phone!=null and AccountId IN ${records.replaceAll('[','(').replaceAll(']',')').replaceAll('"',"'")}`;
    }
    handleRemoveAccount(){}
   
    handleContactSelected(event){console.log(`handleContactSelected ${event.detail.recId}-${event.detail.recName}`)}
    handleRemovecontact(){}

}