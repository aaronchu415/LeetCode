// _NAME: Intersecting Rectangles (4.11)
// _LINK: https://elementsofprogramminginterviews.com/
// _CATEGORY: EPI

let rec1 = [0, 0, 2, 2];
let rec2 = [1, 1, 4, 4];

function intersecting(rec1, rec2) {


  const REC1_IS_LEFT = rec1[2] <= rec2[0];
  const REC1_IS_RIGHT = rec1[0] >= rec2[2];
  const REC1_IS_UP = rec1[1] >= rec2[3];
  const REC1_IS_DOWN = rec1[3] <= rec2[1];

  let intersection_rect = [0, 0, 0, 0];

  const IS_NOT_INTERSECTING = (REC1_IS_LEFT || REC1_IS_RIGHT || REC1_IS_UP || REC1_IS_DOWN);
  if (IS_NOT_INTERSECTING) return intersection_rect;

  intersection_rect[0] = Math.max(rec1[0], rec2[0]);
  intersection_rect[2] = Math.min(rec1[2], rec2[2]);
  intersection_rect[1] = Math.max(rec1[1], rec2[1]);
  intersection_rect[3] = Math.min(rec1[3], rec2[3]);

  return intersection_rect;
}

console.log(intersecting(rec1, rec2));
