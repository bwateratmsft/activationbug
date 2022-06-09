// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(
		vscode.commands.registerCommand('abc', abc)
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('abcByApi', abcByApi)
	);

	vscode.window.showInformationMessage('Extension A has been activated!');
}

// this method is called when your extension is deactivated
export function deactivate() {}

async function abc(): Promise<void> {
	vscode.window.showInformationMessage('Command abc has been run!');
}

async function abcByApi(): Promise<void> {
	vscode.window.showInformationMessage('Trying to execute command abc by API');
	await vscode.commands.executeCommand('abc');
}