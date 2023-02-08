export declare function init(defaultEmailSubject: string, awsAccountEmail: string, awsAccessKeyId: string, awsSecretAccessKey: string): void;
export declare function send(to: string, message: string): Promise<import("@aws-sdk/client-ses").SendEmailCommandOutput>;
