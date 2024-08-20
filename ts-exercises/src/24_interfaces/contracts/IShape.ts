interface IShape {
  _name: string;
  _color: string;
  _isRound: boolean;

  draw: () => void;
}

export default IShape;
