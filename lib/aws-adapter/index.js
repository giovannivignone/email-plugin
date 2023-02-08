"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSAdapter = void 0;
const client_ses_1 = require("@aws-sdk/client-ses");
class AWSAdapter {
    constructor(awsAccountEmail, awsAccessKeyId, awsSecretAccessKey, awsSessionToken) {
        this.client = new client_ses_1.SESClient({
            credentials: {
                accessKeyId: awsAccessKeyId,
                secretAccessKey: awsSecretAccessKey,
                sessionToken: awsSessionToken,
            }
        });
        this.accountEmail = awsAccountEmail;
    }
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
    emailCommandBuilder(recipientEmails, ccRecipientEmails, bccRecipientEmails, message, subject) {
        const destination = {
            ToAddresses: recipientEmails,
            CcAddresses: ccRecipientEmails,
            BccAddresses: bccRecipientEmails,
        };
        const msg = {
            Subject: {
                Data: subject,
            },
            Body: {
                Text: {
                    Data: message,
                },
            }
        };
        return new client_ses_1.SendEmailCommand({
            Source: this.accountEmail,
            Destination: destination,
            Message: msg,
        });
    }
    /**
     * @param email - A SendEmailCommand object.
     * @returns {SendEmailCommandOutput} - A SendEmailCommandOutput object.
     * @description Sends an email via AWS SES.
     * @see https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SES.html#sendEmail-property
     */
    sendEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.send(email);
        });
    }
}
exports.AWSAdapter = AWSAdapter;
