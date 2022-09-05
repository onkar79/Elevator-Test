/*Input Variables */
const line = [
  { weight: 100, floor: 6 },
  { weight: 300, floor: 2 },
  { weight: 80, floor: 2 },
  { weight: 100, floor: 5 },
  { weight: 120, floor: 3 },
  { weight: 160, floor: 4 },
  { weight: 120, floor: 6 },
  { weight: 250, floor: 2 },
  { weight: 180, floor: 5 },
  { weight: 120, floor: 4 },
];
const MaxPeople = 4;
const MaxWeight = 600;

function uniqeElements(arr) {
  return arr.reduce((prev, curr) => {
    if (prev.indexOf(curr) === -1) {
      prev = prev.concat(curr);
    }
    return prev;
  }, []);
}

function ElevatorTest(Arr, MaxPeople, MaxWeight) {
  let trip = 0,
    tripWeight = 0,
    rounds = [];
  for (let i = 0; i < Arr.length; i += 1) {
    if (typeof rounds[trip] !== "undefined") {
      if (
        rounds[trip].length === MaxPeople ||
        tripWeight + Arr[i].weight > MaxWeight
      ) {
        trip++;
        tripWeight = 0;
      }
    }
    rounds[trip] = rounds[trip] || [];
    rounds[trip].push(Arr[i].floor);
    tripWeight += Arr[i].weight;
  }
  // Remove duplicate
  rounds = rounds.map((round) => uniqeElements(round).length + 1);
  return rounds.reduce((prev, curr) => prev + curr, 0);
}

/*Output for Elevator Test */
console.log(
  "No of Steps taken by Elevetor =>",
  ElevatorTest(line, MaxPeople, MaxWeight)
);
