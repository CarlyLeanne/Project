const toggleBackground = () => {
    const backgroundColor = document.body.style.backgroundColor;
  
    if (backgroundColor !== "black") {
      document.body.style.backgroundColor = "black";
    } else {
      document.body.style.backgroundColor = "white";
    }
  };