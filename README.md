# weather-app-node

NOTES App using Node js

Node commands

node file-name.js

nodemon file-name.js

DEBUGGER:

To run debugger:
write 'debugger' where we want to pause the debugger
Command: node inspect file-name.js args
In chrome open -> chrome://inspect 
1.  your appln should be there already, if not configure it {see this lecture https://deloittedevelopment.udemy.com/course/the-complete-nodejs-developer-course-2/learn/lecture/13728902#notes}
2.  click on inspect, work through it like normal js debugger

How Calls/ events are handled:
Code -> Call Stack -> Node API(or Browser API, to run fns not native to JS, like setTimeOut etc etc) -> Event Queue -> (if call stack is empty, then the call/functions in the event queue get executed)-> Call Stack 
