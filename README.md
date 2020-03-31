# Elevator Controller Exercise
The following application represents an elevator controller exercise made in Node.Js

How to run the application:

* clone the repository
* make sure you have Node.Js installed
* run `npm install` in the terminal of the application
* the application can be run by executing`npm start` in the terminal
* tests can be run by executing`npm test` in the terminal
* to run in developer mode, execute `npm run dev` in the terminal

## Application Considerations:
* the entire application runs in the terminal. After running `npm start`, it will require terminal input in order to get its own data and run.
* since the application is run in the terminal and has only backend input, there is only a limited amount of tests that could be run. It can obviously be optimised better.
* currently, the first sorting of the floors queue will always prioritize going to the above floor first (as that is the default direction)
* the current application does not currently have integer validation, so if it gets anything else than numbers as input, it will exit.
* the application exits the moment the queue of floors is empty. Therefore, for a new journey, just run `npm start` again.

Please do get in touch if there any part that is unclear or in case the application does not run as intended.