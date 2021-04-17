import './custom-input.style.css'

export default function CustomInputBox({ handleChange, label, ...otherprops }) {
 console.log(label)
  return (
    <div className='input-box' style={{marginTop:'20px'}}>
     <div>
      <label className='input-label'>{label}</label>
      </div> 
      <div> 
      <input autoComplete='off' style={{marginTop:'20px'}} onChange={handleChange} {...otherprops} />
      </div> 
    </div>
  );
}
