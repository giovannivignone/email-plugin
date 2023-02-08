import { SendEmailCommand, SESClient, SendEmailCommandOutput } from "@aws-sdk/client-ses";
export declare class AWSAdapter {
    client: SESClient;
    accountEmail: string;
    constructor(awsAccountEmail: string, awsAccessKeyId: string, awsSecretAccessKey: string, awsSessionToken?: string);
    /**
     * @param recipientEmails - The email addresses of the recipients of the email.
     * @param ccRecipientEmails - The email addresses to be cced.
     * @param bccRecipientEmails - The email addresses to be bcced.
     * @param message - The message string to be sent.
     * @param subject - The subject of the email.
     * @returns A SendEmailCommand object.
     * @description Builds a SendEmailCommand object.
     * @see https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SES.html#sendEmail-property
     */
    emailCommandBuilder(recipientEmails: string[], ccRecipientEmails: string[], bccRecipientEmails: string[], message: string, subject: string): SendEmailCommand;
    /**
     * @param email - A SendEmailCommand object.
     * @returns {SendEmailCommandOutput} - A SendEmailCommandOutput object.
     * @description Sends an email via AWS SES.
     * @see https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SES.html#sendEmail-property
     */
    sendEmail(email: SendEmailCommand): Promise<SendEmailCommandOutput>;
}
