let compareSelection = { 1: null, 2: null };

function getCompareProduct(slot) {
  const productId = compareSelection[slot];
  return products.find((product) => product.id === Number(productId)) || null;
}

function populateCompareOptions() {
  const selects = [
    document.getElementById("device-select-1"),
    document.getElementById("device-select-2"),
  ];
  const colorSelects = [
    document.getElementById("color-select-1"),
    document.getElementById("color-select-2"),
  ];

  selects.forEach((select, index) => {
    select.innerHTML = products
      .map(
        (product) =>
          `<option value="${product.id}" class="text-black">${product.name}</option>`,
      )
      .join("");
    const defaultId = products[index]?.id || products[0].id;
    compareSelection[index + 1] = defaultId;
    select.value = defaultId;
    updateColorOptions(index + 1);
  });

  colorSelects.forEach((select, index) => {
    select.addEventListener("change", () => updateComparePreview(index + 1));
  });

  selects.forEach((select, index) => {
    select.addEventListener("change", () => {
      compareSelection[index + 1] = Number(select.value);
      updateColorOptions(index + 1);
      updateComparePreview(index + 1);
    });
  });

  updateComparePreview(1);
  updateComparePreview(2);
}

function updateColorOptions(slot) {
  const product = getCompareProduct(slot);
  const colorSelect = document.getElementById(`color-select-${slot}`);

  if (!product) {
    colorSelect.innerHTML =
      '<option value="" class="text-black">Choose a device</option>';
    return;
  }

  colorSelect.innerHTML = product.colors
    .map(
      (color) =>
        `<option value="${color.name}" class="text-black">${color.name}</option>`,
    )
    .join("");
  const currentValue = colorSelect.dataset.selected;
  colorSelect.value =
    currentValue && product.colors.some((item) => item.name === currentValue)
      ? currentValue
      : product.colors[0].name;
  colorSelect.dataset.selected = colorSelect.value;
}

function updateComparePreview(slot) {
  const product = getCompareProduct(slot);
  const colorSelect = document.getElementById(`color-select-${slot}`);
  const preview = document.getElementById(`slot-${slot}-preview`);

  if (!product) {
    preview.innerHTML =
      '<span class="text-black-500 text-black">Choose a device</span>';
    return;
  }

  const selectedColor = colorSelect
    ? colorSelect.value
    : product.colors[0].name;
  colorSelect.dataset.selected = selectedColor;
  const colorObj =
    product.colors.find((c) => c.name === selectedColor) || product.colors[0];
  const tintStyle = colorObj ? colorOverlayStyle(colorObj.hex) : "";

  preview.innerHTML = `
    <div class="relative w-full aspect-square max-w-[140px] mx-auto rounded-lg overflow-hidden mb-2">
      <img src="${product.image}" alt="${product.name} in ${selectedColor}" class="w-full h-full object-cover">
      ${tintStyle ? `<div class="absolute inset-0 pointer-events-none" style="${tintStyle}"></div>` : ""}
    </div>
    <span class="font-semibold text-neon-blue block">${product.name}</span><span class="block text-sm text-neon-blue">${selectedColor}</span>
  `;
}

function renderComparisonTable() {
  const product1 = getCompareProduct(1);
  const product2 = getCompareProduct(2);

  if (!product1 || !product2) {
    alert("Please select both devices before starting comparison.");
    return;
  }

  const color1 = document.getElementById("color-select-1").value;
  const color2 = document.getElementById("color-select-2").value;
  const colorObj1 =
    product1.colors.find((c) => c.name === color1) || product1.colors[0];
  const colorObj2 =
    product2.colors.find((c) => c.name === color2) || product2.colors[0];
  const tint1 = colorObj1 ? colorOverlayStyle(colorObj1.hex) : "";
  const tint2 = colorObj2 ? colorOverlayStyle(colorObj2.hex) : "";

  const tableHTML = `
    <table class="w-full text-left text-gray-300 mt-6 border border-white/20 rounded-lg overflow-hidden">
      <thead class="bg-blue/10 text-neon-blue">
        <tr>
          <th class="p-3">Spec</th>
          <th class="p-3 text-neon-blue">${product1.name}</th>
          <th class="p-3 text-neon-blue">${product2.name}</th>
        </tr>
      </thead>
      <tbody>
        <tr><td class="p-3">Image</td><td class="p-3"><div class="relative w-full max-w-[180px] aspect-square mx-auto rounded-lg overflow-hidden"><img src="${product1.image}" alt="${product1.name} in ${color1}" class="w-full h-full object-cover">${tint1 ? `<div class="absolute inset-0 pointer-events-none" style="${tint1}"></div>` : ""}</div></td><td class="p-3"><div class="relative w-full max-w-[180px] aspect-square mx-auto rounded-lg overflow-hidden"><img src="${product2.image}" alt="${product2.name} in ${color2}" class="w-full h-full object-cover">${tint2 ? `<div class="absolute inset-0 pointer-events-none" style="${tint2}"></div>` : ""}</div></td></tr>
        <tr><td class="p-3">Brand</td><td class="p-3">${product1.brand}</td><td class="p-3">${product2.brand}</td></tr>
        <tr><td class="p-3">Color</td><td class="p-3">${color1}</td><td class="p-3">${color2}</td></tr>
        <tr><td class="p-3">Screen</td><td class="p-3">${product1.specs.screen}</td><td class="p-3">${product2.specs.screen}</td></tr>
        <tr><td class="p-3">CPU</td><td class="p-3">${product1.specs.chip || product1.specs.ram}</td><td class="p-3">${product2.specs.chip || product2.specs.ram}</td></tr>
        <tr><td class="p-3">RAM</td><td class="p-3">${product1.specs.ram || "—"}</td><td class="p-3">${product2.specs.ram || "—"}</td></tr>
        <tr><td class="p-3">Storage</td><td class="p-3">${product1.specs.storage || "—"}</td><td class="p-3">${product2.specs.storage || "—"}</td></tr>
      </tbody>
    </table>
  `;

  const compareSection = document.querySelector("#compare .glass-panel");
  const oldTable = compareSection.querySelector("table");
  if (oldTable) oldTable.remove();
  compareSection.insertAdjacentHTML("beforeend", tableHTML);
}

document.addEventListener("DOMContentLoaded", () => {
  populateCompareOptions();
  document
    .querySelector("#compare button")
    .addEventListener("click", renderComparisonTable);
});
