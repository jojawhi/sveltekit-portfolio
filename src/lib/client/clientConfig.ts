// import {
// 	PUBLIC_HCAPTCHA_SITEKEY,
// 	PUBLIC_HCAPTCHA_SITE_KEY_LOCAL,
// 	PUBLIC_HCAPTCHA_VERIFY_URL
// } from '$env/static/public';

const clientConfig = {
	hCaptchaVerifyURL: import.meta.env.PUBLIC_HCAPTCHA_VERIFY_URL,
	hCaptchaSiteKey: import.meta.env.PUBLIC_HCAPTCHA_SITEKEY,
	hCaptchaSiteKeyLocal: import.meta.env.PUBLIC_HCAPTCHA_SITE_KEY_LOCAL
};

export default clientConfig;
