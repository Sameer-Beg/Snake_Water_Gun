// create a snake, water , gun Game . the game shuld ask you to enter s,w and g . the computer should be able to randomly genrate s , w and g and declare win or loss using alert. ?


let user = prompt("Enter S (Snake), W (Water), or G (Gun)").toUpperCase();
let cpuI  = Math.floor(Math.random() * 3);   // Math.random is used to genrate a random number
let cpu = ["S", "W", "G"][cpuI];

const match = (cpu, user) => {
  if(cpu === user){
    return "Nobody";
  }
  else if(cpu === "S" && user === "W"){
    return "CPU";
  }
  else if(cpu === "G" && user === "W"){
    return "User";
  }
  else if(cpu === "S" && user === "G"){
    return "User";
  }
  else if(cpu === "G" && user === "S"){
    return "CPU";
  }
  else if(cpu === "W" && user === "G"){
    return "User";
  }
  else if(cpu === "W" && user === "S"){
    return "User";
  } else {
    return "Invalid Input";
  }
};

let result = match(cpu, user);
document.getElementById("resultBox").innerHTML = `
  <p><strong>CPU:</strong> ${cpu}</p>
  <p><strong>User:</strong> ${user}</p>
  <p><strong>The Winner is:</strong> ${result.toUpperCase()}</p>
`;
