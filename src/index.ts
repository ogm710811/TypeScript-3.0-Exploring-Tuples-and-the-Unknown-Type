// TypeScript TupleWare //
//**********************/

type Point3D = [number, number, number];

const draw = (...point3D: Point3D) => {
  console.log(point3D);
};

const xyzCoordinate: Point3D = [10, 20, 10];

draw(10, 20, 10);
draw(xyzCoordinate[0], xyzCoordinate[1], xyzCoordinate[2]);
draw(...xyzCoordinate);

type Point = [number, number?, number?];

const x: Point = [10];
const xy: Point = [10, 20];
const xyz: Point = [10, 20, 10];

console.log(x.length);
console.log(xy.length);
console.log(xyz.length);

type TestScores = [string, ...number[]];

const thaliaTestScore = ['Thalia', ...[100, 98, 99, 100]];
const davidTestScore = ['David', ...[100, 98, 100]];

console.log(thaliaTestScore);
console.log(davidTestScore);

// TypeScript: New 'Unknown' Top Type //
//************************************/

// 1. Performing an Explicit Structural Check >>>
let itemLocation: any = {
  coordinates: { x: 10, y: 'cows', z: true }
};

const itemLocationCheck = (
  loc: any
): loc is { coordinates: { x: any; y: any; z: any } } => {
  return (
    !!loc &&
    typeof loc === 'object' &&
    'coordinates' in loc &&
    'x' in loc.coordinates &&
    'y' in loc.coordinates &&
    'z' in loc.coordinates
  );
};

if (itemLocationCheck(itemLocation)) {
  console.log(itemLocation.coordinates.x);
  console.log(itemLocation.coordinates.y);
  console.log(itemLocation.coordinates.z);
}

// 2. Performing a Type Assertion >>>
type KnownStructure = { coordinates: { x: any; y: any; z: any } };

let itemLocation_2: unknown = {
  coordinates: { x: 10, y: 'cows', z: true }
};

console.log((itemLocation_2 as KnownStructure).coordinates.x);
console.log((itemLocation_2 as KnownStructure).coordinates.y);
console.log((itemLocation_2 as KnownStructure).coordinates.z);
