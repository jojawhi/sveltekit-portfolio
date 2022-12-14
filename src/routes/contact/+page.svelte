<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount, onDestroy } from 'svelte';

	import clientConfig from '$lib/client/clientConfig';

	import { nameStore } from '$lib/stores/name';
	import { displayStore } from '$lib/stores/displays';
	import { openAndCloseAfterTimeout } from '$lib/stores/drawer';

	import Tardis from '$lib/Tardis.svelte';
	import Section from '$lib/Section.svelte';
	import Text from '$lib/common/Text.svelte';
	import Button from '$lib/common/Button.svelte';

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
			hcaptcha = {
				execute: async () => ({ response: '', key: '' }),
				render: () => '',
				reset: () => '',
				close: () => '',
				remove: () => '',
				getResponse: () => '',
				getRespKey: () => '',
				setData: () => ''
			};
		}
	});

	let name = '';
	let email = '';
	let message = '';

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
				console.log('sending email...');

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
				activateLetter(6);

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
		if (!$nameStore[index].active) {
			$nameStore[index].active = true;
			openAndCloseAfterTimeout();
			// setTimeout(() => {
			$displayStore[3].display = false;
			// }, 7500);
		} else {
			return;
		}
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

<div class="container flex flex-col items-center justify-center mx-auto">
	<!-- TARDIS will go on this page -->
	<Text type="pageTitle" content="Contact Josh" />
	<Section id="contact">
		<!-- {#if $displayStore[3].display} -->
		<!-- <Tardis onClick={() => activateLetter(6)} /> -->
		<!-- {/if} -->
		<form
			id="contact-form"
			class="container w-full flex flex-col items-center justify-center"
			method="POST"
			on:submit|preventDefault={handleSubmit}
		>
			<div class="flex flex-col w-full items-center">
				<label for="name" class="text-white text-left w-full">Name</label>
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
				<label for="email" class="text-white text-left w-full">Email</label>
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
				<label for="message" class="text-white text-left w-full">Message</label>
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
				data-sitekey={clientConfig.hCaptchaSiteKey}
				data-size="invisible"
				data-theme="dark"
			/>

			<Button buttonType="contact" type="submit" onClick={() => console.log('send')}>Send</Button>
		</form>
	</Section>
</div>
