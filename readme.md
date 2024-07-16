TODO: Support "this" key word

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