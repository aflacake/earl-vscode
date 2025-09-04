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

    // Ambil informasi konfigurasi dari package.json
    const config = vscode.workspace.getConfiguration('earl');
    const interpreter = config.get<string>('interpreterPath') || 'node index.js';

    exec(`${interpreter} ${filePath}`, (err, stdout, stderr) => {
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
