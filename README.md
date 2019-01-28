Original Codebase can be found here: https://github.com/the-road-to-react-with-firebase/react-firebase-authentication

# react-firebase-authentication

[![Build Status](https://travis-ci.org/the-road-to-react-with-firebase/react-firebase-authentication.svg?branch=master)](https://travis-ci.org/the-road-to-react-with-firebase/react-firebase-authentication) [![Slack](https://slack-the-road-to-learn-react.wieruch.com/badge.svg)](https://slack-the-road-to-learn-react.wieruch.com/) [![Greenkeeper badge](https://badges.greenkeeper.io/the-road-to-react-with-firebase/react-firebase-authentication.svg)](https://greenkeeper.io/)

built using: https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial/

pro tip: get the app working without the database first.

## most useful links: 
twitter: https://www.robinwieruch.de/firebase-facebook-login/
```
set callback url in: app -> yourApp -> AppDetails -> edit: 
only one callback url can be used. make a new app for another callback url.
 
make sure to perform this step: 
app -> yourApp -> Permissions -> edit: 

Access permission
Read-only
Additional permissions
Request email address
```

On twitter make a privacy policy doc before heading over there as it is required. You can give a bogus site but not for a prolonged period.

facebook: https://www.robinwieruch.de/firebase-twitter-login/
```
after creating an app look for products, Facebook Login.
That is where you will input redirect URI's.
More than one can be input at once.
```
## Additional troubleshooting:
consider, set process.env.REACT_APP_CONFIRMATION_EMAIL_REDIRECT to window.location.href.


## Time for the database.
Setup a realtime database on firebase. change the first to have table user.
