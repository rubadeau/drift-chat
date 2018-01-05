# Drift Chat

Drift API - Node Wrappers -

*All calls support both Callbacks or Promises.*

### Config

`npm install --save drift-chat`

`const drift = new Drift("--OAuthToken--");`

## Contacts API

#### Get Contact - Promise

```
drift.getContact(userId)
  .then((body) =>
    console.log(body))
  .catch((err) =>
    console.log(err));
````

#### Get All Contacts

```
drift.getAllContacts() =>
```

## Conversations API

#### Get All Messages

```
drift.getConvo(message) =>
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

drift.postMessage(message, reply) =>
```

## OAuth2

#### Handshake Example
[Drift Docs](https://devdocs.drift.com/docs/authentication-and-scopes)

```
bot.get('/oauth', (req, res) => {
  const drift = new Drift();
  const options = {
    clientId: process.env.CLIENTID,
    clientSecret: process.env.DRIFTKEY,
    code: req.query.code,
  };

  drift.oauth(options, async function(err,driftToken){
    if(err){
      console.log(err);
    } else {
      const teamObj = {
        orgId: driftToken.orgId,
        driftToken: driftToken
      };
      const team = await Team.update({orgId: driftToken.orgId},teamObj,{upsert:true, setDefaultsOnInsert: true});
      console.log(team)
    }
  });
});
```

#### Refresh Token Example
[Drift Docs](https://devdocs.drift.com/docs/authentication-and-scopes#section-3-refresh-your-tokens)

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