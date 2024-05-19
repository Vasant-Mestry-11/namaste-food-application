/*



Redux toolkit

- add to cart
- from ui we'll dispatch an action
- this action invoke a function which is called as reducer
- this reducer function will modify the cart

when we click on the button it dispatches an action which calls the reducer function,
which modifies/update the slice of our redux store

to read data we use selector

subscribing to the stor

*/


/*

React Testing library is build on top of DOM Testing library
RTL also uses Jest

JEST is standard to wrinting JS unit test cases

JEST is separate testing library
RTL behind uses JEST

We're using jest along with babel


==================

Setting up Testing in our app

- install @testing-library/react
- install jest
- install babel dependancies, required when we're using jest with babel
- configure babel
- configure parcel config file to disable default babel transpilation
- Jest configuration

npx jest --init

jsdom => test wont run on browser hence to provide browser like environment run execute test we use jsdom
all out testing code run here
once we execute the command, it will generate jest.config.js file, which will have one big config object
which we'll provide all the configs y/n we chosen, commented code also, so that we can edit them as per 
our need

- Install JSDOM

if we're using jest version greater than 28, then jest.environment-jsdom library need to installed
separately

- create __test__ folder
__ is called as dunder method

*/