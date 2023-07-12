import "../css/config-pane.css";
import { createElement, isObject } from "./utility";

class ConfigPane {
  constructor(params) {
    this.params = params;

    this.element = {
      container: null,
      header: null,
      content: null,
    };

    this.render();
    this.generateInput(this.params);
  }
  generateInput(params, parent = null) {
    for (const key in params) {
      const value = params[key];
      if (isObject(value)) {
        this.generateInput(value, key);
        continue;
      }

      this.addInput(`${parent ? `${parent} ` : ""}${key}`, value);
    }
  }
  addInput(key, value) {
    const formControl = createElement("div", {
      class: ["config-pane-form-control"],
    });

    const input = createElement("input", {
      type: "text",
    });
    const label = createElement("label");
    label.textContent = key;
    input.value = value;

    formControl.appendChild(label);
    formControl.appendChild(input);
    this.element.content.appendChild(formControl);
  }
  render() {
    this.element.container = createElement("div", {
      class: ["config-pane-container"],
    });

    this.element.header = createElement("div", {
      class: ["config-pane-header"],
    });
    this.element.header.textContent = "Configuration";

    this.element.content = createElement("div", {
      class: ["config-pane-body"],
    });

    this.element.container.appendChild(this.element.header);
    this.element.container.appendChild(this.element.content);

    document.body.appendChild(this.element.container);
  }
}

export default ConfigPane;
