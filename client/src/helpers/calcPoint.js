export const handleCalcPoint = (rounds) => {
  const playerPoint1 = rounds.reduce((prev, next) => {
    return prev + next.point.player1;
  }, 0);
  const playerPoint2 = rounds.reduce((prev, next) => {
    return prev + next.point.player2;
  }, 0);
  const playerPoint3 = rounds.reduce((prev, next) => {
    return prev + next.point.player3;
  }, 0);
  const playerPoint4 = rounds.reduce((prev, next) => {
    return prev + next.point.player4;
  }, 0);
  const totalPoint = playerPoint1 + playerPoint2 + playerPoint3 + playerPoint4;
  return { playerPoint1, playerPoint2, playerPoint3, playerPoint4, totalPoint };
};
