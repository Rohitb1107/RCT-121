const Game = (props) => {
  const classes = props.className ? `${props.className} squire` : "squire";
  return (
    <>
      <span className={classes} onClick={props.onClick}></span>
    </>
  );
};

export default Game;
