"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode = require("vscode");
function activate(context) {
    let disposable = vscode.commands.registerCommand('auto-change-px2rem.convert', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const document = editor.document;
            const selection = editor.selection;
            const range = new vscode.Range(selection.start, selection.end);
            const text = document.getText(range);
            const convertedText = text.replace(/(\d+)px/g, 'px2rem($1)');
            editor.edit(editBuilder => {
                editBuilder.replace(range, convertedText);
            });
        }
    });
    context.subscriptions.push(disposable);
    // Register keybindings
    let convertCommand = 'auto-change-px2rem.convert';
    if (process.platform === 'darwin') {
        convertCommand += 'Mac';
    }
    else {
        convertCommand += 'Windows';
    }
    context.subscriptions.push(vscode.commands.registerCommand(convertCommand, () => {
        vscode.commands.executeCommand('auto-change-px2rem.convert');
    }));
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map