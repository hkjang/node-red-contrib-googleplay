node-red-contrib-googleplay
================

Node-RED node for google-play-scraper



## Install

To install the stable version use the `Menu - Manage palette - Install`
option and search for node-red-contrib-googleplay, or run the following
command in your Node-RED user directory, typically `~/.node-red`

    npm install node-red-contrib-googleplay

## wrapper googleplay
Node.js module to scrape application data from the Google Play store
- https://github.com/facundoolano/google-play-scraper


## Sample Flow
You can make this json string into a flow by using the node-red flow import function.

- [sample.json](examples/sample.json)

## Params
```javascript
msg.func = 'reviews';
msg.appId = 'com.google.android.apps.translate'

// msg.func = 'app';
// msg.appId = 'com.google.android.apps.translate'

// msg.func = 'search';
// msg.term = "chaca";
// msg.num =  2

// msg.func = 'developer';
// msg.devId = "Google";

// msg.func = 'suggest';
// msg.term = "panda";

// msg.func = 'categories';

// msg.func = 'permissions';
msg.country='us'

return msg;
```
