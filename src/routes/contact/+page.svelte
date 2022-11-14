<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount, onDestroy } from 'svelte';
	import clientConfig from '$lib/client/clientConfig';
	import Text from '$lib/common/Text.svelte';
	import Pokeball from './../../lib/Pokeball.svelte';
	import Button from '$lib/common/Button.svelte';
	import { nameStore } from '$lib/stores/name';

	/** @typedef {{
    execute(hcaptchaWidgetID?: string , opts?: { async: boolean }): Promise<HCaptchaExecuteResponse> | null;
    render(id?: string, config?: { sitekey: string; size: string; theme: string }): string | null;
  } | null}*/

	let hcaptcha: HCaptcha;
	let hcaptchaWidgetID: string;

	onMount(() => {
		if (browser) {
			hcaptcha = window.hcaptcha;
			// window.handleSubmit = handleSubmit;
			if (hcaptcha.render) {
				hcaptchaWidgetID = hcaptcha.render('hcaptcha', {
					sitekey: clientConfig.hCaptchaSiteKey,
					size: 'invisible',
					theme: 'dark'
				});
			}
		}
	});

	onDestroy(() => {
		if (browser) {
			hcaptcha = { execute: async () => ({ response: '' }), render: () => '' };
		}
	});

	let name = 'test';
	let email = 'test@test.com';
	let message = 'testtesttest';

	let errors = {
		name: '',
		email: '',
		message: ''
	};

	let valid = true;

	const validateForm = (name: string, email: string, message: string) => {
		console.log('validation started');

		if (!name.trim()) {
			valid = false;
			// showNotification.set(true);
			// notification = getNotification('form-error');
			errors.name = 'Please enter your name';
			console.log('name error');
		} else {
			errors.name = '';
		}

		if (!email.trim() || !email.includes('@') || !email.includes('.')) {
			valid = false;
			// showNotification.set(true);
			// notification = getNotification('form-error');
			errors.email = 'Please enter a valid email';
			console.log('email error');
		} else {
			errors.email = '';
		}

		if (message.length < 10) {
			valid = false;
			// showNotification.set(true);
			// notification = getNotification('form-error');
			errors.message = 'Message must be at least 10 characters long.';
			console.log('message error');
		} else {
			errors.message = '';
		}

		if (errors.name === '' && errors.email === '' && errors.message === '') {
			valid = true;
			// showNotification.set(false);
		}

		if (valid) {
			// Move this notification to backend on successful email send
			console.log('Form validation successful');
		}
	};

	const clearFormFields = () => {
		name = '';
		email = '';
		message = '';
	};

	const handleSubmit = async () => {
		try {
			const { response: hCaptchaResponse } = (await hcaptcha.execute(hcaptchaWidgetID, {
				async: true
			})) as HCaptchaResponse;

			validateForm(name, email, message);

			if (valid) {
				// submitForm();
				console.log('beginning fetch');

				await fetch('api/verify', {
					method: 'POST',
					credentials: 'omit',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						name,
						email,
						message,
						response: hCaptchaResponse
					})
				});

				clearFormFields();

				// if (onClick) {
				// 	onClick();
				// }
			}
		} catch (error) {
			console.log(`Error: ${error}`);
			// showNotification.set(true);
			// notification = getNotification('error');
		}
	};

	const activateLetter = (index: number) => {
		$nameStore[index].active = true;
	};
</script>

<svelte:head>
	<title>Contact Josh</title>
	<meta
		name="description"
		content="Contact Josh White for web or software development service inquiries."
	/>
	<script src="https://js.hcaptcha.com/1/api.js" async defer></script>
</svelte:head>

<div class="container flex flex-col items-center">
	<Text type="hero" content="Contact Josh" />

	<form
		id="contact-form"
		class="container w-1/2 flex flex-col items-center"
		method="POST"
		on:submit|preventDefault={handleSubmit}
	>
		<div class="flex flex-col w-full items-center">
			<label for="name">Name</label>
			<input
				bind:value={name}
				type="text"
				id="name"
				placeholder="Name"
				class="w-full p-4 my-2 rounded-md"
				novalidate
			/>
			{#if errors.name}
				<Text type="validation" content={errors.name} />
			{/if}
		</div>
		<div class="flex flex-col w-full items-center">
			<label for="email">Email</label>
			<input
				bind:value={email}
				type="text"
				id="email"
				placeholder="Email"
				class="w-full p-4 my-2 rounded-md"
				novalidate
			/>
			{#if errors.email}
				<Text type="validation" content={errors.email} />
			{/if}
		</div>
		<div class="flex flex-col w-full items-center">
			<label for="message">Message</label>
			<textarea
				bind:value={message}
				name="message"
				id="message"
				rows="8"
				placeholder="Type your message"
				class="w-full p-4 my-2 rounded-md"
				novalidate
			/>
			{#if errors.message}
				<Text type="validation" content={errors.message} />
			{/if}
		</div>

		<div
			id="hcaptcha"
			class="h-captcha"
			data-sitekey={clientConfig.hCaptchaSiteKeyLocal}
			data-size="invisible"
			data-theme="dark"
		/>

		<Button buttonType="contact" type="submit" onClick={() => console.log('send')}>Send</Button>
	</form>

	<Button buttonType="default" onClick={() => activateLetter(6)}>Activate Final Letter!</Button>

	<Button buttonType="white" onClick={() => console.log('clicked')}>
		<Pokeball width="24rem" />
	</Button>
</div>
