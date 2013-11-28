js-console
==========

Javascript console application written in javascript.


How to Run:
----------

Copy/Clone the code to a www folder in wamp or open console.html in browser.


Files:
------

* Most of the code is in console.js.
* There are three major parts - console, evaluator and history handler.
* Console handles the keyboard events and calls evaluator and history handler. 

TODOs:
------
1. Autocompletion
2. Updating DOM element is happening inside evaluator and history handler. It has to be moved to console.
3. The keyhandling seems to have problem with shift+enter.
4. Some more testing.



