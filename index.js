const imagePreView = (inputFile, imgPreview) => {
    const image = document.getElementById('imagePreview');
    const file = document.querySelector('input[type=file]').files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
        image.src = reader.result;
    }

    if(file){
        reader.readAsDataURL(file);
    }else {
        image.src = '';
    }
}