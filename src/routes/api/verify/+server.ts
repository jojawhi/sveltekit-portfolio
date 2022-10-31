import type { RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }: { request: Request }) => {
	try {
		const { name, email, message, response: hCaptchaClientResponse } = await request.json();
	} catch (error) {
		// add backend error handling
		console.log(error);
	}

	return new Response('OK');
};

const sendEmail = async (formObject: Record<string, string>) => {
	const message = {
		to: 'jojawhi@gmail.com',
		from: 'contact@jojawhi.com',
		subject: `Message from ${formObject.name} via Folkwise.io`,
		text: `
    Sender: ${formObject.name};
    Sender email: ${formObject.email};
    Message: ${formObject.message}
    `
	};

	const confirmationMessage = {
		to: formObject.email,
		from: 'contact@jojawhi.com', //testing purposes
		subject: 'Thank you for your message!',
		text: `
    Thank you so much for contacting me. I've received your message, and I will get back to you as soon as I can.

    Regards,

    The Folkwise team
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

	sgMail
		.send(confirmationMessage)
		.then(() => console.log('Confirmation sent.'))
		.catch(error => console.log(error.message));
};
