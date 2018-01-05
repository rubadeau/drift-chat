# Drift Chat

Drift API - Node Wrappers -

*All calls support both Callbacks or Promises.*

### Config

`npm install --save drift-chat`

`const drift = new Drift("--OAuthToken--");`

## Contacts API

#### Get Contact

```
drift.getContact(userId).then((body) => console.log(body)).catch((err) => console.log(err));
````

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
drift.getAllContacts( function(err, body) {
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

## OAuth2

#### Handshake Example
https://devdocs.drift.com/docs/authentication-and-scopes

```
router.get('/oauth', (req, res) => {
  const options = {
    clientId: process.env.CLIENTID,
    clientSecret: process.env.DRIFTKEY,
    code: req.query.code,
    grantType: 'authorization_code',
  };
  drift.oauth(options,function(err,driftToken){
    if(err){
      console.log(err);
    } else {
      team.driftToken = driftToken;
      team.id = driftToken.orgId;
      team.save();
  })
});
```

#### Refresh Token Example
https://devdocs.drift.com/docs/authentication-and-scopes#section-3-refresh-your-tokens

```
const options = {
  clientId: process.env.CLIENTID,
  clientSecret: process.env.DRIFTKEY,
  refreshToken: team.driftToken.refreshToken
};
drift.refreshToken(options,function(err,driftToken){
  if(err){
    console.log(err);
  } else {
    team.driftToken = driftToken
    team.save();
  }
});
```

## TODO
* Pagination
* Contacts Search Options (email)
* Update Contact
* Contact Tags