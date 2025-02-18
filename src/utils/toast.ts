import * as vscode from 'vscode';

class Toast {
    info(message: string,detail?: string) {
        vscode.window.showInformationMessage(message,{
            detail
        });
    }

    error(message: string, detail?: string) {
        vscode.window.showErrorMessage(message, {
            detail
        });
    }
    warn(message: string, detail?: string) {
        vscode.window.showWarningMessage(message, {
            detail
        });
    }
}

const toast = new Toast();

export default toast;
