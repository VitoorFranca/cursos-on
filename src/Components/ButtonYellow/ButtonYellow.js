const ButtonYellow = ({ title, reference }) => {
  return (
    <a href={reference}>
      <button className="button bg-yellow">
        {title}
      </button>
    </a>
    );
}