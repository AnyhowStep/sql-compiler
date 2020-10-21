"use strict";
exports.__esModule = true;
exports.makeDiagnosticMessage = exports.DiagnosticCategory = void 0;
var DiagnosticCategory;
(function (DiagnosticCategory) {
    DiagnosticCategory[DiagnosticCategory["Error"] = 0] = "Error";
    DiagnosticCategory[DiagnosticCategory["Warning"] = 1] = "Warning";
    DiagnosticCategory[DiagnosticCategory["Information"] = 2] = "Information";
    DiagnosticCategory[DiagnosticCategory["Hint"] = 3] = "Hint";
})(DiagnosticCategory = exports.DiagnosticCategory || (exports.DiagnosticCategory = {}));
function makeDiagnosticMessage(message) {
    return message;
}
exports.makeDiagnosticMessage = makeDiagnosticMessage;
