import './styles.scss';
import Uploader from './uploader';

const uploader = new Uploader();

const previewElement = document.querySelector('#preview');
const uploadedImageElement = document.querySelector('#uploaded-image');

document.getElementById("chooseImgButton").addEventListener("change", async function (e){
    const file = e.target.files[0];

    const result = await uploader.getImage(file);
    previewElement.style.backgroundImage = `url(${result.preview})`;
    const uploadResult = await uploader.process(result.base64);

    uploadedImageElement.style.backgroundImage = `url(${uploadResult.data.img})`;
});
