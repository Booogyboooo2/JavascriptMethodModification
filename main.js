// Usage:
//
// Create Modifier For The Target Class (GooseV2)
// var gooseModifier = new MethodModif(GooseV2)
//
// Run Modifier To Override The Method "test" and replace with code "console.log('test!')"
// gooseModifier.overrideMethod("test", "console.log('test!')");
//
// -------------------------------------------------------
//
// Example:
//
// -------------------------------------------------------
//
// class GooseV2 {
//      test() {
//          console.log("original...");
//      }
// }
//
// Result:
// var g = new GooseV2();
// g.test(); // Result: original...
// var gooseModifier = new MethodModif(GooseV2)
// gooseModifier.overrideMethod("test", "console.log('test!')");
// g.test(); // Result: test!

class MethodModif {
    //Use class or function for modification
    constructor(target) {
        this.target = target;
    }

    //Override the method
    overrideMethod(method, code) {
        try {
            eval(this.target + ".prototype." + method + " = function () {" + code + "}");
        } catch (error) {
            console.log("Error (" + error + ") while trying to override method (" + method + ")");
        }
    }

    //Add code at the end of the method
    injectMethod(method, code) {
        try {
            var prev_1 = this.target + '.prototype[method].toString().replaceAll("\n", "").replaceAll(" ", "").replace(method + "(){", "").slice(0, -1).replaceAll("elseif", "else if")';
            var prev = eval(prev_1);
            var new_1 = this.target + '".prototype." + method + " = function () { " + prev + code + "}"';
            eval(new_1);
            console.log("Set code too: " + this.target + ".prototype." + method + " = function () { " + prev + code + "}");
        } catch (error) {
            console.log("Error (" + error + ") while trying to inject into method (" + method + ")");
            console.log("Set code too: " + this.target + ".prototype." + method + " = function () { " + prev + code + "}");
        }
    }
}