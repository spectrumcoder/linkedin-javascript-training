const backpack = { 
  name: "Everyday Backpack", 
  volume: 30, 
  color: "grey", 
  pocketNum: 15, 
  strapLength: { 
    left: 26, 
    right: 26, }, 
  toggleLid: function (lidStatus) { 
    this.lidOpen = lidStatus; }, 
  newName: function (newModel) { 
    this.name = newModel }, 
  newVolume: function (num) { 
    this.volume = num }, 
  newColor: function (anyColor) { 
    this.color = anyColor },
  newPockets: function (string) { 
    if (string === "small") { 
      return this.pocketNum = 5 
    } else if (string === "medium") { 
      return this.pocketNum = 10 
    } else if (string === "large") { 
      return this.pocketNum = 20 } 
  }, 
  newStrapLength: function (lengthLeft, lengthRight) { 
    this.strapLength.left = lengthLeft; 
    this.strapLength.right = lengthRight; },
};
console.log("The backpack object:", backpack)
console.log("The original pocketNum value:", backpack.pocketNum)

backpack.newPockets("large")
console.log("The new pocketNum value:", backpack.pocketNum)
