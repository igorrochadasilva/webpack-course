import Icon from '../img/icon.png'

class Image{
    insertImage(){
        const img = document.createElement('img')
        
        img.src = Icon;
        img.width = 200;
        
        document.querySelector('body').appendChild(img)
    }
}

export default Image