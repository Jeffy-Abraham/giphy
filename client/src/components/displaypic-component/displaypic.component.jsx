export default function DisplayPic({ imageLink }) {
  return (
    <div>
      {imageLink ? (
        <img src={imageLink} width="220" />
      ) : (
        <img
          src="https://media.giphy.com/avatars/default1/80h.gif"
          width="220"
        />
      )}
    </div>
  );
}
