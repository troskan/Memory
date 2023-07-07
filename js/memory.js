let buttonIsActive = false;

onClickChangePicture(1);
onClickChangePicture(3);

function onClickChangePicture(id) {
  document.getElementById(id).addEventListener("click", () => {
    if (buttonIsActive === true) {
      document.getElementById("box-active").remove();
      buttonIsActive = false;
    } else if (buttonIsActive === false) {
      alert("Button clicked!");
      let img = document.createElement("img");
      img.setAttribute(
        "src",
        "https://plus.unsplash.com/premium_photo-1667423049497-291580083466?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
      );

      img.setAttribute("id", "box-active");

      document.getElementById(id).appendChild(img);
      buttonIsActive = true;
    }
  });
}
