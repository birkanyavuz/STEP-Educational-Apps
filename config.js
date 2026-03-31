const schoolConfig = {
  // Add as many grades as you want here
  grades: ["Kindergarten", "1st Grade", "2nd Grade", "3rd Grade", "4th Grade", "5th Grade"],
  
  // These folders will show up for EVERY grade automatically
  subjects: ["Math", "English", "Science"],
  
  // This is where you link your actual apps
  apps: {
    "Kindergarten-Math": [
      { name: "Number Bonds", url: "Number_Bonds.html", icon: "🔢" }
    ],
    "1st Grade-Math": [
      { name: "Bag of Cubes", url: "Bag_of_Cubes.html", icon: "🛍️" }
    ],
    "3rd Grade-Math": [
      { name: "Area & Perimeter", url: "Perimeter%20and%20Area%20Calculator.html", icon: "📏" }
    ]
    // To add more, just follow the pattern: "Grade-Subject": [ { app info } ]
  }
};