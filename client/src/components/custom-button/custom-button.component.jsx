import "./custom-button.style.css";
export default function CustomButton(prop) {

  return <button className='button-container' onClick={prop.handleClick} ><span>{prop.children}</span></button>;
}
