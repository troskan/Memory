let buttonIsActive = false;

let urlCollection = {};

// Adding to the collection
urlCollection[1] =
  "https://plus.unsplash.com/premium_photo-1667423049497-291580083466?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80";
urlCollection[2] =
  "https://images.unsplash.com/photo-1688380303885-c45db2972da7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80";
urlCollection[3] =
  "https://images.unsplash.com/photo-1682685797703-2bb22dbb885b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80";
urlCollection[4] =
  "https://images.unsplash.com/photo-1682687220305-ce8a9ab237b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80";
urlCollection[5] =
  "https://images.unsplash.com/photo-1688321003169-51c6693db5fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80";
urlCollection[6] =
  "https://images.unsplash.com/photo-1688362379195-b8c04f735968?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";
urlCollection[7] =
  "https://images.unsplash.com/photo-1682685797661-9e0c87f59c60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";
urlCollection[8] =
  "https://images.unsplash.com/photo-1688380303708-26c534ab059b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80";
urlCollection[9] = urlCollection[1];
urlCollection[10] = urlCollection[2];
urlCollection[11] = urlCollection[3];
urlCollection[12] = urlCollection[4];
urlCollection[13] = urlCollection[5];
urlCollection[14] = urlCollection[6];
urlCollection[15] = urlCollection[7];
urlCollection[16] = urlCollection[8];
let choosenPictures = [];

function onClickChangePicture(id) {
  document.getElementById(id).addEventListener("click", () => {
    if (buttonIsActive === true) {
      document.getElementById("box-active").remove();
      buttonIsActive = false;
    } else if (buttonIsActive === false) {
      createPicture(id);
      buttonIsActive = true;
    }
  });
}
function createPicture(id) {
  let img = document.createElement("img");
  img.setAttribute("src", urlCollection[id]);

  img.setAttribute("id", "box-active");

  document.getElementById(id).appendChild(img);
}
function findClickId() {
  for (let index = 1; index <= 16; index++) {
    onClickChangePicture(index);
  }
}

document
  .querySelector(".memory-container")
  .addEventListener("click", findClickId);
