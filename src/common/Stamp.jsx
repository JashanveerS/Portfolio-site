function Stamp({ n, rotate = -6 }) {
  return (
    <span className="stamp" style={{ transform: `rotate(${rotate}deg)` }} aria-hidden="true">
      {n}
    </span>
  );
}

export default Stamp;
