/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  const len = rooms.length;
  const roomsArr = new Array(len).fill(false);
  let nums = len;

  /* dfs */
  // const dfs = (i) => {
  //   if (roomsArr[i]) return;
  //   roomsArr[i] = true;
  //   --nums;
  //   for (const room of rooms[i]) {
  //     dfs(room);
  //   }
  // };

  // dfs(0);
  // return !nums;

  /* bfs */
  const que = [0];
  roomsArr[0] = true;

  while (que.length) {
    const key = que.shift();
    --nums;
    for (const room of rooms[key]) {
      if (!roomsArr[room]) {
        roomsArr[room] = true;
        que.push(room);
      }
    }
  }

  return !nums;
};