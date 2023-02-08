import { SendEmailCommandOutput } from '@aws-sdk/client-ses';
import { AWSAdapter } from '../aws-adapter';
export declare class EmailManager {
    awsAdapter: AWSAdapter;
    emailSubject: string;
    constructor(defaultEmailSubject: string, awsAccountEmail: string, awsAccessKeyId: string, awsSecretAccessKey: string, awsSessionToken?: string);
    /**
     * @param params - An object containing the email parameters.
     * @param params.to - The email address of the recipient of the email.
     * @param params.message - The message string to be sent.
     * @returns {Promise<SendEmailCommandOutput>} - A SendEmailCommandOutput object.
     * @description Sends an email via AWS SES adapted to the plugin's interface.
     */
    send(params: {
        to: string;
        message: string;
    }): Promise<SendEmailCommandOutput>;
}
