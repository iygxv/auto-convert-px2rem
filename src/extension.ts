import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand('auto-convert-px2rem.convert', () => {
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
  let convertCommand = 'auto-convert-px2rem.convert';
  if (process.platform === 'darwin') {
    convertCommand += 'Mac';
  } else {
    convertCommand += 'Windows';
  }
  context.subscriptions.push(vscode.commands.registerCommand(convertCommand, () => {
    vscode.commands.executeCommand('auto-convert-px2rem.convert');
  }));
}
