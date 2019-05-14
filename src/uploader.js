import { upload, download } from './service';
export default class Uploader {
  constructor() {
  }

  async process(str) {
    const uri = await upload(str);
    const imageUrl = await download(uri);

    return imageUrl;
  }

  getImage(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        resolve({
          base64: reader.result,
          preview: e.target.result,
        });
      };
      reader.onerror = error => reject(error);
    })
  }


  /*

    1. Gunakan tombol #chooseImgButton untuk memilih file gambar untuk diupload
    2. Tampilkan gambar sebagai background elemen #preview
    3. Gunakan service.upload() untuk upload gambar dalam bentuk file JSON. 
       Server akan memberi respon dalam bentuk JSON juga. Di dalamnya ada info tentang URL JSON diupload.
    4. Gunakan service.download() untuk mendownload JSON dari URL di atas.
    5. Tampilkan file base64 yang ada di dalam file JSON di atas sebagai background elemen #uploaded-image

    Contoh hasil akhir: https://www.dropbox.com/s/gypiplh5utq62re/img-uploader.mp4?dl=0
    
    Catatan: Anda hanya perlu mengedit file ini saja.
  */
}
