import { browser } from '$app/environment';
// import {
// 	SENDGRID_SECRET,
// 	SENDGRID_SENDER_EMAIL,
// 	HCAPTCHA_SECRET,
// 	HCAPTCHA_SECRET_LOCAL
// } from '$env/static/private';

if (browser) {
	throw new Error('import of server config from browser');
}

const serverConfig = {
	sendgridSecret: process.env.SENDGRID_SECRET,
	sendgridSenderEmail: process.env.SENDGRID_SENDER_EMAIL,
	hCaptchaSecret: process.env.HCAPTCHA_SECRET
};

// Local testing
// const serverConfig = {
// 	sendgridSecret: SENDGRID_SECRET,
// 	sendgridSenderEmail: SENDGRID_SENDER_EMAIL,
// 	hCaptchaSecret: HCAPTCHA_SECRET,
// 	hCaptchaSecretLocal: HCAPTCHA_SECRET_LOCAL
// };

export default serverConfig;
