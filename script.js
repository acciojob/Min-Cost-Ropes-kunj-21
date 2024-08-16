function mincost(arr)
{ 
 let totalCost = 0;

  // Continue until only one rope is left
  while (ropes.length > 1) {
    // Sort the array to find the two smallest ropes
    ropes.sort((a, b) => a - b);

    // Take the first two smallest ropes
    let first = ropes[0];
    let second = ropes[1];

    // Calculate the cost to connect them
    let cost = first + second;
    totalCost += cost;

    // Replace the first two elements with their sum and remove the second element
    ropes = [cost, ...ropes.slice(2)];
  }

  return totalCost;
  
}

module.exports=mincost;
