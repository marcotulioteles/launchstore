module.exports = {
  date(timestamp) {
    const date = new Date(timestamp)

    const year = date.getFullYear()
    const month =  `0${(date.getMonth() + 1)}`.slice(-2)
    const day = `0${date.getDate()}`.slice(-2)
    const hour = date.getHours()
    const minutes = date.getMinutes()

    return {
      day, 
      month, 
      year, 
      hour, 
      minutes,
      iso: `${year}-${month}-${day}`,
      birthDay: `${day}-${month}`,
      format: `${day}/${month}/${year}`
    }
  },

  formatPrice(price) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price/100)
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
    formatCep(value) {
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
    },

    formatCpfCnpj(value) {
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
    }
}