# Dynamically modify javascript class methods!
### ㅤ
# TODO: 
### Support "this" key word
# Usage:ㅤ
### Create Modifier For The Target Class (GooseV2)
### var gooseModifier = new MethodModif(GooseV2)
### ㅤ
### Run Modifier To Override The Method "test" and replace with code "console.log('test!')"
### gooseModifier.overrideMethod("test", "console.log('test!')");
### ㅤ
### -------------------------------------------------------
### Example:
### -------------------------------------------------------
### ㅤ
### class GooseV2 {
### ㅤㅤtest() {
### ㅤㅤㅤㅤconsole.log("original...");
### ㅤㅤ}
### }
### ㅤ
### var g = new GooseV2();
### g.test(); // Result: original...
### var gooseModifier = new MethodModif("GooseV2")
### gooseModifier.overrideMethod("test", "console.log('test!')");
### g.test(); // Result: test!
### ㅤ
# Notes:
### The class name when passed thru the MethodModif constructor the class must be its name (A string) not the actual class
### ex: new MethodModif(GooseV2) -> new MethodModif("GooseV2")
