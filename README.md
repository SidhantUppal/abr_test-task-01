# ABN NAME Lookup - Vue Js

## Features

1) You can search ABN name and decide how many records to pull from API at one time.

2) After getting data from API, we display the list of matched entries in selectbox given below.

3) If you want to see extra details of each record you can simply click on any record and its complete data will get displayed in tabular form.

4) If there is no data present we show error message that "No Data is Available. Kindly search some names and try again."

5) By default we use local data, if you want to use API to fetch data then follow point no. (2) in section given below.

## Important Notes:

1) If you want to run search on local json data, then you need to pass '""' blank data in GUID in config > dev.env.js and restart the server using "npm run dev" .
 
2) If you want to run search on api using GUID, then you need to pass GUID in config > dev.env.js and restart the server using "npm run dev" .
 
> testing

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
