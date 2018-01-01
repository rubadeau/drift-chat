# Drift Chat

Drift API - Node Wrappers

*All calls support both Callbacks (shown) or Promises.*

### Config

`npm install --save drift-chat`

`const drift = new Drift("--OAuthToken--");`

## Contacts API

#### Get Contact

```
drift.getContact(userId, function(err, body) {
    if(err){
        console.log(err);
    }
    console.log(body);
});
```

#### Get All Contacts

```
drift.getAllContacts(function(err, body) {
```

## Conversations API

#### Get All Messages

```
drift.getConvo(message, function(err, body) {
```

#### Post Message

```
const reply = {
    body: string (optional),
    buttons: [(Message Button)] (optional),
    type: {chat, private_note, private_prompt, edit},
    editedMessageId: int (optinal),
    editType: {delete, replace, replace_body, replace_buttons} (optional)
}

drift.postMessage(message, reply, function(err, body) {
```

## TODO
* Pagination
* Contacts Search Options (email)
* Update Contact
* Contact Tags