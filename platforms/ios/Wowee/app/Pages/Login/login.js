"use strict";
var frameModule = require("ui/frame");
exports.signIn = function () {
    alert("Signing in");
};
exports.register = function () {
    var topmost = frameModule.topmost();
    topmost.navigate("Pages/Register/register");
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXlDO0FBRXpDLE9BQU8sQ0FBQyxNQUFNLEdBQUc7SUFDYixLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDeEIsQ0FBQyxDQUFDO0FBRUYsT0FBTyxDQUFDLFFBQVEsR0FBRztJQUNmLElBQUksT0FBTyxHQUFHLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNwQyxPQUFPLENBQUMsUUFBUSxDQUFDLHlCQUF5QixDQUFDLENBQUM7QUFDaEQsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZyYW1lTW9kdWxlID0gcmVxdWlyZShcInVpL2ZyYW1lXCIpO1xuXG5leHBvcnRzLnNpZ25JbiA9IGZ1bmN0aW9uKCkge1xuICAgIGFsZXJ0KFwiU2lnbmluZyBpblwiKTtcbn07XG5cbmV4cG9ydHMucmVnaXN0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgdG9wbW9zdCA9IGZyYW1lTW9kdWxlLnRvcG1vc3QoKTtcbiAgICB0b3Btb3N0Lm5hdmlnYXRlKFwiUGFnZXMvUmVnaXN0ZXIvcmVnaXN0ZXJcIik7XG59O1xuXG5cblxuIl19