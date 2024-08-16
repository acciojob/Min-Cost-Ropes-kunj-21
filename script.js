function mincost(arr)
{ 
  let totalCost = 0;

  // Continue until only one rope is left
  while (arr.length > 1) {
    // Sort the array to find the two smallest ropes
    arr.sort((a, b) => a - b);

    // Take the first two smallest ropes
    let first = arr[0];
    let second = arr[1];

    // Calculate the cost to connect them
    let cost = first + second;
    totalCost += cost;

    // Replace the first two elements with their sum and remove the second element
    arr = [cost, ...arr.slice(2)];
  }

  return totalCost;
}

module.exports=mincost;
