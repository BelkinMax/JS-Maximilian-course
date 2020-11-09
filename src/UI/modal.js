export class Modal {
  constructor(contentId) {
    this.contentTemplateEl = document.getElementById(contentId);
    this.modalTemplateEl = document.getElementById("modal-template");
  }

  show() {
    if ("content" in document.createElement("template")) {
      const modalEls = document.importNode(this.modalTemplateEl.content, true);
      this.modalEl = modalEls.querySelector(".modal");
      this.backdropEl = modalEls.querySelector(".backdrop");
      const contentEl = document.importNode(
        this.contentTemplateEl.content,
        true
      );

      this.modalEl.appendChild(contentEl);
      document.body.insertAdjacentElement("afterbegin", this.modalEl);
      document.body.insertAdjacentElement("afterbegin", this.backdropEl);
    } else {
      // fallback code here
      alert("Nope");
    }
  }

  hide() {
    if (this.modalEl) {
      document.body.removeChild(this.modalEl);
      document.body.removeChild(this.backdropEl);

      this.modalEl = null;
      this.backdropEl = null;
    }
  }
}
