test('drinking La Croix leads to having thirst info', () => {
  drinkSomeLaCroix()
  expect(thirstInfo()).toBeTruthy();
});

function drinkSomeLaCroix() {
  // first
  thirstInfo()
}
function thirstInfo() {
  // second
  return true
}
