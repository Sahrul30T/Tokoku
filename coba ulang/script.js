let id = null
const input = (id, type="text",label='', placeholder='')=>{
    return`
    <label>${label} </label></br>
    <input type="${type}" id="${id}" placeholder="${placeholder}"></br>
    `
}

document.body.innerHTML += input ('namaBarang','text','Nama Barang','Masukkan Nama Barang')
