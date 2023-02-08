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
exports.EmailManager = void 0;
const aws_adapter_1 = require("../aws-adapter");
class EmailManager {
    constructor(defaultEmailSubject, awsAccountEmail, awsAccessKeyId, awsSecretAccessKey, awsSessionToken) {
        this.awsAdapter = new aws_adapter_1.AWSAdapter(awsAccountEmail, awsAccessKeyId, awsSecretAccessKey, awsSessionToken);
        this.emailSubject = defaultEmailSubject;
    }
    ;
    /**
     * @param params - An object containing the email parameters.
     * @param params.to - The email address of the recipient of the email.
     * @param params.message - The message string to be sent.
     * @returns {Promise<SendEmailCommandOutput>} - A SendEmailCommandOutput object.
     * @description Sends an email via AWS SES adapted to the plugin's interface.
     */
    send(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const cced = [];
            const bcced = [];
            const email = this.awsAdapter.emailCommandBuilder([params.to], cced, bcced, params.message, this.emailSubject);
            return yield this.awsAdapter.sendEmail(email);
        });
    }
}
exports.EmailManager = EmailManager;
