
$("#searchName").click(function() {
    $('#status').html("");
    $('#panel').hide();

    navigator.notification.prompt(
        'Please enter search text',
        onPrompt,
        'Contact Search', ['Ok', 'Exit'],
        ''
    );
});

$("#saveBtn").click(function() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var fullName = firstName + ' ' + lastName;
    var number = document.getElementById('number').value;
    var note = document.getElementById('note').value;
    var emailAddress = document.getElementById('email').value;

    var theContact = navigator.contacts.create({
        "displayName": fullName
    });
    theContact.note = note;

    var emails = [];
    emails[0] = new ContactField('email', emailAddress, false);
    theContact.emails = emails;

    var phoneNumbers = [];
    phoneNumbers[0] = new ContactField('work', number, false);
    phoneNumbers[1] = new ContactField('mobile', number, true); // preferred number
    phoneNumbers[2] = new ContactField('home', number, false);
    theContact.phoneNumbers = phoneNumbers;

    theContact.save(onSaveSuccess, onSaveError);
});

function onSaveSuccess(contact) {
    navigator.notification.alert(
        "Contact Saved",
        null,
        'PhoneGap HandsOn Project',
        'OK'
    );

    document.getElementById("saveForm").reset();

}

function onSaveError(contactError) {
    navigator.notification.alert(
        "Contact Not Saved - Error Code : " + contactError.code,
        null,
        'PhoneGap HandsOn Project',
        'OK'
    );
}

function onPrompt(results) {
    if (results.buttonIndex == 1) {
        if (results.input1 == "") {
            navigator.notification.alert(
                "Empty Search Text",
                null,
                'PhoneGap HandsOn Project',
                'Try Again'
            );
        } else {
            fetchContacts(results.input1);
        }
    }
}

function fetchContacts(filter) {
    $('#panel').hide();
    $('#status').html("In Progress.... Please Wait!");

    var options = new ContactFindOptions();
    options.filter = filter;
    options.multiple = true;
    var fields = ["*"];
    navigator.contacts.find(fields, onSuccess, onError, options);

};

function onSuccess(contacts) {

    if (contacts.length == 0) {
        $('#panel').hide();
        $('#status').html("No Contacts Found");
        return;
    }

    var text = "";

    var totalCount = 0;

    for (var i = 0; i < contacts.length; i++) {
        if (totalCount > 9) {
            break;
        }

        if (contacts[i].phoneNumbers) {
            totalCount++;
            for (var j = 0; j < contacts[i].phoneNumbers.length; j++) {
                text = text + '<tr><td>' + totalCount + "</td><td>" + contacts[i].displayName + "</td><td>" + contacts[i].phoneNumbers[j].value + "</td></tr>";
            }
        }
    }

    $('#contacts').html(text);
    $('#count').html(contacts.length);
    $('#status').html("");
    $('#panel').show();
}

function onError(contactError) {
    alert(contactError);
}

