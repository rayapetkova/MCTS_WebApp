import emailjs from 'emailjs-com'

export default async function sendEmail() {

    const templateParams = {
        user_email: 'rayapetkova12321@gmail.com'
    }

    await emailjs.send('service_1cmy4lj', 'template_3n5hp0d', templateParams, 'vsxzSvFua75jd2zmu')
}