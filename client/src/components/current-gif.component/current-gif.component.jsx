const CurrentGif = ({ image, text }) => {
  return (
    <div>
      {" "}
      <div>
        <img src={image} alt='s'/>
      </div>
      <div
        style={{
          fontFamily: "raleway",
          fontSize: "16px",
          marginBottom: "100px",
        }}
      >
        {text}
      </div>
    </div>
  );
};
export default CurrentGif;
