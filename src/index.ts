type Square = {
  type: 'square';
  size: number;
}
type Rectangle = {
  type: 'rectangle';
  height: number;
  width: number;
}
type Shape = Square | Rectangle;

const shapes: Shape[] = getShapes();

const isSquare = (s: Shape): s is Square => s.type == 'square';
const isRectangle = (s: Shape): s is Rectangle => s.type == 'rectangle';

const square = shapes.find(isSquare);
const size = square?.size;

const squares = shapes.filter(isSquare);
const sizes = squares.map(s => s.size);