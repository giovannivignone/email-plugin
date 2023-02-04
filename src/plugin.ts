import { PluginParameters } from "./interfaces/interfaces";
import { EmailManager } from "./email-manager";

let emailManager: EmailManager;

export function init(defaultEmailSubject: string, awsAccountEmail: string, awsAccessKeyId: string, awsSecretAccessKey: string): void {
    emailManager = new EmailManager(defaultEmailSubject, awsAccountEmail, awsAccessKeyId, awsSecretAccessKey);
}

export async function send(to: string, message: string) {
    const params: PluginParameters = { to, message };
    return await emailManager.send(params);
}