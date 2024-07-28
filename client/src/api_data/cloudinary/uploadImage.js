export default async function uploadImage(formData) {
    const responseAPI = await fetch('https://api.cloudinary.com/v1_1/dzfgtuvut/image/upload', {
        method: 'POST',
        body: formData
    })
    const resultAPI = await responseAPI.json()

    return resultAPI
}