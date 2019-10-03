var executionContext = null;
var formContext= executionContext.getFormContext();
var recordId =  formContext.data.entity.getId().replace('{', '').replace('}', '');



Xrm.Utility.alertDialog("error.message");

formContext.ui.setFormNotification("Please add a Line Item in order to Confirm CA and proceed to Drafting Approvals", "ERROR", "NoLineItemNotification");

Xrm.Page.getAttribute('<FIELD_NAME>').getValue()[0].id;)