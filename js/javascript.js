function handleSubmit() {
  // lấy giá trị input và chuyển sang in thường
  const emailValue = document.getElementById("email").value.toLocaleLowerCase();

  // lấy element của thẻ p hiển thị lỗi
  const errorEmail = document.querySelector(".error-email");
  // điều kiện đẻ là 1 email
  const checkEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // dùng match để check với email vừa nhập
  const check = emailValue.match(checkEmail);

  //lấy phần chứa thông tin user
  const sectionContent = document.querySelector("#personal-info .head-info");
  console.log("check section", sectionContent);
  // lấy element để kiếm soát submit
  const submitControl = document.querySelector(".submit-email");
  if (check) {
    sectionContent.style.display = "block";
    submitControl.style.display = "none";
    errorEmail.textContent = "";
  } else {
    errorEmail.textContent = "Vui lòng nhập đúng email";
  }
}

// làm function cho view more
function handleMouseOver(element) {
  const viewMore = element.querySelector(".view-more");
  viewMore.style.display = "inline-block";
}

function handleMouseOut(element) {
  const viewMore = element.querySelector(".view-more");
  viewMore.style.display = "none";
}

function handleViewMore(element) {
  const parentElement = element.closest(".parent");
  const viewMore = parentElement.querySelector(".view-more");

  if (viewMore.innerHTML == "View more") {
    const sectionContent = parentElement.querySelectorAll(".section-content");
    sectionContent.forEach((element) => {
      element.style.display = "block";
      viewMore.innerHTML = "View less";
    });
  } else {
    const sectionContent = parentElement.querySelectorAll(".section-content");
    sectionContent.forEach((element) => {
      element.style.display = "none";
      viewMore.innerHTML = "View more";
    });
  }
}
