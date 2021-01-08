class View {
  constructor(elemento) {
    this._elemento = elemento;
  }

  template() {
    throw new Error("É um método estático e deve ser implementado");
  }

  update(model) {
    this._elemento.innerHTML = this._template(model);
  }
}
