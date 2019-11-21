var executionContext = null;
var formContext= executionContext.getFormContext();
var recordId =  formContext.data.entity.getId().slice(1, -1);
formContext.getAttribute(arg).setRequiredLevel(requirementLevel)




Xrm.Utility.alertDialog("error.message");

formContext.ui.setFormNotification("Please add a Line Item in order to Confirm CA and proceed to Drafting Approvals", "ERROR", "NoLineItemNotification");

Xrm.Page.getAttribute('<FIELD_NAME>').getValue()[0].id;)

formContext.getAttribute(arg).setValue(value)

var client = Xrm.Utility.getGlobalContext().client;
if (client == "Mobile") {
    return;         //The lower code does not work on mobile currently 

}


HiSol.ApprovalRequest.Ribbon.SetTimeout = function (primaryControl) {
    var formContext = primaryControl.getFormContext();
    var entityFormOptions = {};
    entityFormOptions.entityName = "hisol_approvalrequest";
    entityFormOptions.entityId = formContext.data.entity.getId().slice(1, -1);
formContext.getAttribute(arg).setValue(value)

        // Open the form.
        Xrm.Navigation.openForm(entityFormOptions).then(
            function (success) {
                console.log(success);

            },
            function (error) {
                Xrm.Navigation.openAlertDialog({text: error.message});
            });


    
};

//form notification
formContext.ui.setFormNotification(message, level, uniqueId);


//funtion for ribbon and normal check for context
var formContext = executionContext.ui ? executionContext : executionContext.getFormContext();



var globalContext = Xrm.Utility.getGlobalContext();
        var currentUser = [];
        currentUser[0] = {};
        currentUser[0].entityType = "systemuser";
        currentUser[0].id = globalContext.userSettings.userId;
        currentUser[0].name = globalContext.userSettings.userName;
        formContext.getAttribute("hisol_submittedby").setValue(currentUser);