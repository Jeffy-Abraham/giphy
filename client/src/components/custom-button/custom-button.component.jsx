import "./custom-button.style.css";
export default function CustomButton(prop) {

  return <div className="button-container"><div><span>{prop.children}</span></div></div>;
}
