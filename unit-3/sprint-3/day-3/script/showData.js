

async function getData(url) {
    try
    {
        let res = await fetch(url)
        let data = await res.json()
      
        return data
    }
    catch(err) {
        console.log(err)
    }
  

}

function showData(data,container) {
    container.innerHTML = ""
    data.forEach(({image,title}) => {
        let proBox = document.createElement("div");
        
        let img = document.createElement("img");
           img.src = image;
        let ti = document.createElement("h3");
        ti.innerText = title;
        proBox.append(img,ti)
        container.append(proBox)

    });
}

export {getData,showData}