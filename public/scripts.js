const Mask = {
  apply(input, func) {
    setTimeout(function() {
      input.value = Mask[func](input.value)
    }, 1)
  },
  formatBRL(value) {
    value = value.replace(/\D/g,"")
    
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value/100)
  },
  cpfCnpj(value) {
    value = value.replace(/\D/g,"")

    //rule of maximum digits = 14
    if (value.length > 14) {
      value = value.slice(0, -1)
    }

    //check if is CPF ou CNPJ
    if (value.length > 11) {
      //value = 12345678000145 (CNPJ)     
      //output -> 12.345678000145
      value = value.replace(/(\d{2})(\d)/,"$1.$2")      
      //output -> 12.345.678000145      
      value = value.replace(/(\d{3})(\d)/,"$1.$2")      
      //output -> 12.345.678/000145            
      value = value.replace(/(\d{3})(\d)/,"$1/$2")      
      //output -> 12.345.678/0001-45            
      value = value.replace(/(\d{4})(\d)/,"$1-$2")

    } else {
      //value = 12345678912 (CPF)      
      //output -> 123.45678912
      value = value.replace(/(\d{3})(\d)/,"$1.$2")
      //output -> 123.456.78912
      value = value.replace(/(\d{3})(\d)/,"$1.$2")
      //output -> 123.456.789-12
      value = value.replace(/(\d{3})(\d)/,"$1-$2")
    }

    return value
  },
  cep(value) {
    value = value.replace(/\D/g,"")
    
    if (value.length > 8) {
      value = value.slice(0, -1)
    }
    
    // value input = 12345678 (CEP)
    // output = 12.345678
    value = value.replace(/(\d{2})(\d)/,"$1.$2")
    // output = 12.345-678
    value = value.replace(/(\d{3})(\d)/,"$1-$2")
    
    return value
  }
}

const PhotosUpload = {
  input: "",
  preview: document.querySelector('#photos-preview'),
  uploadLimit: 6,
  files: [],

  getAllFiles() {
    const dataTransfer = new ClipboardEvent("").clipboardData || new DataTransfer()

    PhotosUpload.files.forEach(file => dataTransfer.items.add(file))
  
    return dataTransfer.files
  },
  handleFileInput(event) {
    const { files: fileList } = event.target
    PhotosUpload.input = event.target
   
    if (PhotosUpload.hasLimit(event)) return

    Array.from(fileList).forEach((file) => {
    
    PhotosUpload.files.push(file)
    const reader = new FileReader()

      reader.onload = () => {
        const image = new Image()
        image.src = String(reader.result)

        const container = PhotosUpload.getContainer(image)
        PhotosUpload.preview.appendChild(container)
      }

      reader.readAsDataURL(file)
    })

    PhotosUpload.input.files = PhotosUpload.getAllFiles()

  },
  hasLimit(event) {
    const { uploadLimit, input, preview } = PhotosUpload
    const { files: fileList } = input

    if (fileList.length > uploadLimit) {
      alert(`Envie no máximo ${uploadLimit} fotos`)
      event.preventDefault()
      return
    }

    const photosDiv = []
    preview.childNodes.forEach(item => {
      if (item.classList && item.classList.value == "photo") 
        photosDiv.push(item)
    })

    const totalPhotos = fileList.length + photosDiv.length

    if (totalPhotos > uploadLimit) {
      alert("Você atingiu o limite máximo de fotos")
      event.preventDefault()
      return true
    }

    return false
  },
  getContainer(image) {
    const container = document.createElement('div')
    
    container.classList.add('photo')
    container.onclick = PhotosUpload.removePhoto
    container.appendChild(image)
    container.appendChild(PhotosUpload.getRemoveButton())

    return container
  },
  getRemoveButton() {
    const button = document.createElement('i')
    button.classList.add('material-icons')
    button.innerHTML = "close"

    return button
  },
  removePhoto(event) {
    const photoDiv = event.target.parentNode //<div class=photo></div>
    const photosArray = Array.from(PhotosUpload.preview.children)
    const index = photosArray.indexOf(photoDiv)

    PhotosUpload.files.splice(index, 1)
    PhotosUpload.input.files = PhotosUpload.getAllFiles()

    photoDiv.remove()
  },
  removeOldPhoto(event) {
    const photoDiv = event.target.parentNode
    
    if (photoDiv.id) {
      const removedFiles = document.querySelector('input[name="removed_files"')
      if (removedFiles) {
        removedFiles.value += `${photoDiv.id},`
      }
    }

    photoDiv.remove()
  }
}

const ImageGallery = {
  highlight: document.querySelector('.gallery .highlight > img'),
  previews: document.querySelectorAll('.gallery-preview img'),
  setImage(event) {
    const { target } = event

    ImageGallery.previews.forEach(preview => preview.classList.remove('active'))
    target.classList.add('active')

    ImageGallery.highlight.src = target.src
    LightBox.image.src = target.src
  }
}
const LightBox = {
  target: document.querySelector('.lightbox-target'),
  image: document.querySelector('.lightbox-target img'),
  closeButton: document.querySelector('.lightbox-target a.lightbox-close'),
  open() {
    LightBox.target.style.opacity = 1
    LightBox.target.style.top = 0
    LightBox.target.style.bottom = 0
    LightBox.closeButton.style.top = 0
  },
  close() {
    LightBox.target.style.opacity = 0
    LightBox.target.style.top = "-100%  "
    LightBox.target.style.bottom = "initial"
    LightBox.closeButton.style.top = "-80px"
  }
}

const Validate = {
  apply(input, func) {
    Validate.clearErrors(input)

    let results = Validate[func](input.value)
    input.value = results.value

    if (results.error) 
      Validate.displayError(input, results.error)
  },

  displayError(input, error) {
    const div = document.createElement('div')
    div.classList.add('error')
    div.innerHTML = error
    input.parentNode.appendChild(div)
    input.focus()
  },

  clearErrors(input) {
    const erroDiv = input.parentNode.querySelector(".error")

    if (erroDiv) 
      erroDiv.remove()
  },

  isEmail(value) {
    let error = null

    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (!value.match(mailFormat)) {
      error = "Email Inválido"
    }

    return {
      error,
      value
    }
  },

  isCpfCnpj(value) {
    let error = null

    const cleanValues = value.replace(/\D/g, "")

    if (cleanValues.length > 11 && cleanValues.length !== 14) {
      error = "CNPJ incorreto"
    } else if (cleanValues.length < 12 && cleanValues.length !== 11) {
      error = "CPF incorreto"
    }

    return {
      error, 
      value
    }
  },

  isCep(value) {
    let error = null

    const cleanValues = value.replace(/\D/g, "")

    if (cleanValues.length !== 8 ) {
      error = "CEP incorreto"
    }

    return {
      error, 
      value
    }
  }
}