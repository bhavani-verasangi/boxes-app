const Box = (props) => {
  //  Write your code here.
  const { className, text } = props;
  return <div className={`main-container ${className}`}>{text}</div>;
};

const element = (
  //  Write your code here.
  <div className="container">
    <h1 className="heading">Boxes</h1>
    <div className="boxes-container">
      <Box className="yellow" text="Small" />
      <Box className="blue" text="Medium" />
      <Box className="pink" text="Big" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
