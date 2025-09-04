// src/extension.ts

import * as vscode from 'vscode';
import { exec } from 'child_process';

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand('earl.runFile', () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) return;

    const doc = editor.document;
    if (doc.languageId !== 'earl') {
      vscode.window.showErrorMessage("Bukan file Earl!");
      return;
    }

    const filePath = doc.fileName;

    // Sesuaikan jalur folder ke interpreter Earl Anda
    exec(`node /jalur/ke/earl-lang/index.js ${filePath}`, (err, stdout, stderr) => {
      if (err) {
        vscode.window.showErrorMessage(`Kesalahan: ${stderr}`);
        return;
      }
      vscode.window.showInformationMessage(stdout);
    });
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
