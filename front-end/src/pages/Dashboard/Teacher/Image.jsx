import React from 'react'

const Image = ({ file , height, width}) => {
    const [preview, setPreview] = React.useState(null)
    const reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onloadend = () => { 
        setPreview(reader.result)
    }
    height = `${height}px`
    width = `${width}px`
    return (
    <img src={preview} alt="" height={height} width={width} />
  )
}

export default Image