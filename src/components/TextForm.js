import React, {useState} from 'react'

export default function TextForm(props) {
  const [text,setText]=useState('Enter text here')


  const handleUpperCase=()=>{
    // alert('change into uppercase')
    let newText=text.toUpperCase()
    setText(newText)
    props.showAlert('Converted To UpperCase!','success')
  }

  
  const handleLowerCase=()=>{
    // alert('change into lowercase')
    let newText=text.toLowerCase()
    setText(newText)
    props.showAlert('Converted To LowerCase!','success')
  } 
  const handleClearText=()=>{
    let newText=''
    setText(newText)
    props.showAlert('Text Cleared!','success')
  } 
  
  const handleExtraSpace=()=>{
    let newText=text.split(/[ ]+/)
    setText(newText.join(' '))
    props.showAlert('Removed Extra Spaces!','success')
  } 
  const handleCopy=()=>{
 navigator.clipboard.writeText(text)
 props.showAlert('Copied To Clipboard!','success')
  }

  const  handlechange=(event)=>{
    // console.log('onchange ')
    setText(event.target.value)
  }


  return (
    <>
    <div>
<div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
    <h1>{props.heading}</h1>
  
  <textarea className="form-control" id="mybox" value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} onChange={handlechange} rows="10"></textarea>
</div>
<button className='btn btn-primary mx-2' onClick={handleUpperCase}>Convert To Uppercase</button>
<button className='btn btn-primary mx-2' onClick={handleLowerCase}>Convert To Lowercase</button>
<button className='btn btn-primary mx-2' onClick={handleClearText}>Clear Text</button>
<button className='btn btn-primary mx-2' onClick={ handleCopy}>Copy Text</button>
<button className='btn btn-primary mx-2' onClick={ handleExtraSpace}>Remove Extra Space</button>
    </div>

    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
<h1>Your Text Summary</h1>
<p>{text.split(/\s+/).filter((element)=>{
  return element.length!==0}).length} words and {text.length} charecters</p>
<p>{0.008 *text.split(" ").filter((element)=>{
return element.length!==0}).length} Minutes Read</p>
<h1>Preview</h1>
<p>{text.length>0?text:'Enter something in the textbox above to preview it'}</p>

    </div>
    </>
  )
}
