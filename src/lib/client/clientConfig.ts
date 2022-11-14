import {
	PUBLIC_HCAPTCHA_SITEKEY,
	PUBLIC_HCAPTCHA_SITE_KEY_LOCAL,
	PUBLIC_HCAPTCHA_VERIFY_URL
} from '$env/static/public';

const clientConfig = {
	hCaptchaVerifyURL: PUBLIC_HCAPTCHA_VERIFY_URL,
	hCaptchaSiteKey: PUBLIC_HCAPTCHA_SITEKEY,
	hCaptchaSiteKeyLocal: PUBLIC_HCAPTCHA_SITE_KEY_LOCAL
};

export default clientConfig;
