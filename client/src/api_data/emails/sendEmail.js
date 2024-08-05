import emailjs from 'emailjs-com';

export default async function sendEmail(templateId, templateParams) {
    await emailjs.send('service_1cmy4lj', templateId, templateParams, 'vsxzSvFua75jd2zmu')
}