import './custom-input.style.css'

export default function CustomInputBox({ handleChange, label, ...otherprops }) {
 
  return (
    <div className='input-box'>
      <input style={{marginTop:'20px'}} onChange={handleChange} {...otherprops} />
    </div>
  );
}
