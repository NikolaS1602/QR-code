document.querySelector('#forma').addEventListener('submit',async  e =>{
    e.preventDefault();
    try{
        let url = document.querySelector('#url').value;
        const body = {
            url: url
        }
        const res = await fetch('/submit',{
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json();
        const resImage = await fetch('/image');
        const image = await resImage.blob();
        const imageObjectURL = URL.createObjectURL(image);
        document.querySelector('.code').style.backgroundImage = `url(${imageObjectURL})`;
    }catch(err){
        console.log(err);
    }
    
})