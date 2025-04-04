const onChangeText = ()=> {
    const title = document.getElementById('title')
    title.innerText = 'This is the new title'
}

const onGetData = async () => {
    await fetch ('http://localhost:3366/api/v1/products')
    .then((data) => data.json())
    .then(info=>{
        console.log('Array data', info);
    })
} 