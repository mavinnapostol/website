const PI = Math.PI;

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }
});

function getNumber(id) {
  const value = document.getElementById(id)?.value;
  return value === "" || value === null ? NaN : parseFloat(value);
}

function showResult(id, label, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = `${label}: ${Number.isFinite(value) ? value.toFixed(2) : "Invalid input"}`;
}

function calculateBasic(type) {
  let result = NaN;

  if (type === "add") {
    result = getNumber("add1") + getNumber("add2");
    showResult("addResult", "Result", result);
  } else if (type === "sub") {
    result = getNumber("sub1") - getNumber("sub2");
    showResult("subResult", "Result", result);
  } else if (type === "mul") {
    result = getNumber("mul1") * getNumber("mul2");
    showResult("mulResult", "Result", result);
  } else if (type === "div") {
    const a = getNumber("div1");
    const b = getNumber("div2");
    result = b === 0 ? NaN : a / b;
    showResult("divResult", "Result", result);
  }
}

function calculatePercentage() {
  const base = getNumber("pctBase");
  const rate = getNumber("pctRate");
  const result = (base * rate) / 100;
  showResult("pctResult", "Result", result);
}

function calculateSquareRoot() {
  const value = getNumber("sqrtValue");
  const result = value < 0 ? NaN : Math.sqrt(value);
  showResult("sqrtResult", "Result", result);
}

function calculateExponent() {
  const base = getNumber("expBase");
  const power = getNumber("expPower");
  const result = Math.pow(base, power);
  showResult("expResult", "Result", result);
}

function safeEvaluate(expression) {
  const allowed = /^[0-9+\-*/().\s^]+$/;
  if (!allowed.test(expression)) return NaN;
  const normalized = expression.replace(/\^/g, "**");
  try {
    return Function(`"use strict"; return (${normalized})`)();
  } catch {
    return NaN;
  }
}

function calculateExpression() {
  const expr = document.getElementById("exprInput")?.value || "";
  const result = safeEvaluate(expr);
  showResult("exprResult", "Result", result);
}

function calculateDiameter(type) {
  let result = NaN;

  if (type === "radius") {
    const r = getNumber("diaRadius");
    result = 2 * r;
    showResult("diaRadiusResult", "Diameter", result);
  } else if (type === "circumference") {
    const c = getNumber("diaCircumference");
    result = c / PI;
    showResult("diaCircumferenceResult", "Diameter", result);
  } else if (type === "area") {
    const a = getNumber("diaArea");
    result = 2 * Math.sqrt(a / PI);
    showResult("diaAreaResult", "Diameter", result);
  }
}

function calculateArea(type) {
  let result = NaN;

  if (type === "rectangle") {
    result = getNumber("rectL") * getNumber("rectW");
    showResult("areaRectangle", "Area", result);
  } else if (type === "square") {
    const s = getNumber("squareS");
    result = s * s;
    showResult("areaSquare", "Area", result);
  } else if (type === "triangle") {
    result = 0.5 * getNumber("triB") * getNumber("triH");
    showResult("areaTriangle", "Area", result);
  } else if (type === "circle") {
    const r = getNumber("circleR");
    result = PI * r * r;
    showResult("areaCircle", "Area", result);
  } else if (type === "parallelogram") {
    result = getNumber("paraB") * getNumber("paraH");
    showResult("areaParallelogram", "Area", result);
  } else if (type === "trapezoid") {
    const a = getNumber("trapA");
    const b = getNumber("trapB");
    const h = getNumber("trapH");
    result = 0.5 * (a + b) * h;
    showResult("areaTrapezoid", "Area", result);
  }
}

function calculateVolume(type) {
  let result = NaN;

  if (type === "cube") {
    const s = getNumber("cubeS");
    result = s ** 3;
    showResult("volCube", "Volume", result);
  } else if (type === "cylinder") {
    const r = getNumber("cylR");
    const h = getNumber("cylH");
    result = PI * r * r * h;
    showResult("volCylinder", "Volume", result);
  } else if (type === "cone") {
    const r = getNumber("coneR");
    const h = getNumber("coneH");
    result = (1 / 3) * PI * r * r * h;
    showResult("volCone", "Volume", result);
  } else if (type === "sphere") {
    const r = getNumber("sphereR");
    result = (4 / 3) * PI * r ** 3;
    showResult("volSphere", "Volume", result);
  } else if (type === "rectangularPrism") {
    result = getNumber("rpL") * getNumber("rpW") * getNumber("rpH");
    showResult("volRectangularPrism", "Volume", result);
  }
}

function calculatePerimeter(type) {
  let result = NaN;

  if (type === "rectangle") {
    const l = getNumber("perRectL");
    const w = getNumber("perRectW");
    result = 2 * (l + w);
    showResult("perRectangle", "Perimeter", result);
  } else if (type === "square") {
    const s = getNumber("perSquareS");
    result = 4 * s;
    showResult("perSquare", "Perimeter", result);
  } else if (type === "triangle") {
    result = getNumber("perTriA") + getNumber("perTriB") + getNumber("perTriC");
    showResult("perTriangle", "Perimeter", result);
  } else if (type === "circle") {
    const r = getNumber("perCircleR");
    result = 2 * PI * r;
    showResult("perCircle", "Perimeter", result);
  } else if (type === "parallelogram") {
    const a = getNumber("perParaA");
    const b = getNumber("perParaB");
    result = 2 * (a + b);
    showResult("perParallelogram", "Perimeter", result);
  }
}
