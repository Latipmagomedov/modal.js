
document.body.addEventListener("click", (e) => {
  const target = e.target;

  if (target.getAttribute("data-open-modal")) {
    const attribute = target.getAttribute("data-open-modal");
    const modalClose = document.querySelectorAll(`[data-modal]`);
    const modal = document.querySelector(`[data-modal="${attribute}"]`);

    modalClose.forEach((item) => item.classList.remove("modal_active"));
    modal.classList.add("modal_active");

    modal.querySelector("[close-modal]").addEventListener("click", () => {
      modal.classList.remove("modal_active");
    });
  }
});
