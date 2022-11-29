import type { RequestHandler } from './$types';
import serverConfig from '$lib/server/serverConfig';
import clientConfig from '$lib/client/clientConfig';
import sgMail from '@sendgrid/mail';

const sendgrid = serverConfig.sendgridSecret as string;

// console.log('Sendgrid key:', sendgrid);

sgMail.setApiKey(sendgrid);

export const POST: RequestHandler = async ({ request }: { request: Request }) => {
	try {
		const { name, email, message, response: hCaptchaClientResponse } = await request.json();

		console.log('Sendgrid key:', sendgrid);
		// console.log('Server response:', hCaptchaClientResponse);

		const messageObject = {
			name,
			email,
			message
		};

		//Prod values
		const secret: string = serverConfig.hCaptchaSecret as string;
		const siteKey: string = clientConfig.hCaptchaSiteKey;
		const hCaptchaBody = new URLSearchParams({ response: hCaptchaClientResponse, secret, siteKey });

		//Test values
		// const secret: string = serverConfig.hCaptchaSecretLocal as string;
		// console.log(`hCaptcha secret: ${secret}`);
		// const siteKey: string = clientConfig.hCaptchaSiteKeyLocal;
		// const hCaptchaBody = new URLSearchParams({ response: hCaptchaClientResponse, secret, siteKey });

		console.log('hCaptcha request sent');

		const verifyResponse = await fetch('https://hcaptcha.com/siteverify', {
			method: 'POST',
			credentials: 'omit',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: hCaptchaBody.toString()
		});

		const data = await verifyResponse.json();
		const { success } = data;
		// console.log(`data: `, data);
		if (success) {
			console.log('hCaptcha success!');
			// send email if hCaptcha responds with success
			sendEmail(messageObject);
		} else {
			console.log('hCaptcha failure!');
			// showNotification.set(true);
			// notification = getNotification('error');
		}

		return new Response('OK');
	} catch (error) {
		console.log(error);
		//update notification store with error information
		throw error;
	}
};

const sendEmail = async (formObject: Record<string, string>) => {
	console.log('Start send email');

	const message = {
		to: 'jojawhi@gmail.com', //testing purposes
		from: 'contact@jojawhi.com', //testing purposes
		subject: `Message from ${formObject.name} via jojawhi.com`,
		text: `
    Sender: ${formObject.name};
    Sender email: ${formObject.email};
    Message: ${formObject.message}
    `
	};

	const confirmationMessage = {
		to: formObject.email,
		from: 'contact@jojawhi.com',
		subject: 'Thank you for your message!',
		text: `
    Thank you so much for contacting me. I've received your message and will get back to you as soon as I can.

    Regards,

    Josh
    `
	};

	sgMail
		.send(message)
		.then(() => {
			// showNotification.set(true);
			// notification = getNotification('success');
			console.log('Email sent successfully');
		})
		.catch(error => {
			// showNotification.set(true);
			// notification = getNotification('error');
			console.log(error.message);
		});

	console.log('email sent');

	sgMail
		.send(confirmationMessage)
		.then(() => console.log('Confirmation sent.'))
		.catch(error => console.log(error.message));

	console.log('confirmation sent');
};
