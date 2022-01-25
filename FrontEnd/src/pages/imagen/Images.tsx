


export default function ImagesPage(){

    // const [image,setImage] = useState<File>(Object);
    // const [previewImage, setPreviewImage] = useState<string>('')
    // const [downloadURL ,setDownloadURL] = useState(null)
    
    // function handleImages(event: ChangeEvent<HTMLInputElement>){

    //     if(!event.target.files)
    //     return;

    //     const imageSelected = event.target.files[0]
            
    //     setImage(imageSelected)
      
    //     setPreviewImage(URL.createObjectURL(imageSelected))
    // }

    return (
      <div className="page-image">
        <div className="dialog">
          <div className="inputDialog">
            <label>
              <p>Choose file</p>  
              <input type="file" id="file"/>        
            </label>
            <label>
              <p>Descrição</p>
              <textarea name="aa" id="aaa" >aaaaa</textarea>
            </label>
            <label>
              <p>Titulo</p>
              <input type="text" />
            </label>
            <button className="button" >Upload</button>
          </div>
        </div>
      </div>
    )
  }
