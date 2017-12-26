# Drift Chat

Drift Node SDK

```npm install --save drift-chat```

###Get Contact

```
const drift = new Drift("--OAuthToken--");

drift.getContact(id, function(err, statusCode, body) {
    if(err){
        console.log(err);
    } else {
        console.log(statusCode);
        console.log(body);
    }
});
```

###All Contacts

```
drift.getAllContacts(function(err, statusCode, body) {
    if(err){
        console.log(err);
    } else {
        console.log(statusCode);
        console.log(body);
    }
});
```
