const HTMLtoPDF = require("html-pdf-node");
const fs = require("fs");
const { templateOrder } = require("./templates.ts");
const QRCode = require("qrcode");
const orderItems = [
  { name: "gasa1", variant: "12mm", price: 121212, qty: 1212 },
  { name: "gasa2", variant: "13mm", price: 130000, qty: 1100 },
  { name: "gasa3", variant: "14mm", price: 140000, qty: 1000 },
  { name: "gasa4", variant: "15mm", price: 150000, qty: 900 },
  { name: "gasa5", variant: "16mm", price: 160000, qty: 800 },
  { name: "gasa6", variant: "17mm", price: 170000, qty: 700 },
  { name: "gasa7", variant: "18mm", price: 180000, qty: 600 },
  { name: "gasa8", variant: "19mm", price: 190000, qty: 500 },
  { name: "gasa9", variant: "20mm", price: 200000, qty: 400 },
  { name: "gasa10", variant: "21mm", price: 210000, qty: 300 },
  { name: "gasa1", variant: "12mm", price: 121212, qty: 1212 },
  { name: "gasa2", variant: "13mm", price: 130000, qty: 1100 },
  { name: "gasa3", variant: "14mm", price: 140000, qty: 1000 },
  { name: "gasa4", variant: "15mm", price: 150000, qty: 900 },
  { name: "gasa5", variant: "16mm", price: 160000, qty: 800 },
  { name: "gasa6", variant: "17mm", price: 170000, qty: 700 },
  { name: "gasa7", variant: "18mm", price: 180000, qty: 600 },
  { name: "gasa8", variant: "19mm", price: 190000, qty: 500 },
  { name: "gasa9", variant: "20mm", price: 200000, qty: 400 },
  { name: "gasa10", variant: "21mm", price: 210000, qty: 300 },
  { name: "gasa1", variant: "12mm", price: 121212, qty: 1212 },
  { name: "gasa2", variant: "13mm", price: 130000, qty: 1100 },
  { name: "gasa3", variant: "14mm", price: 140000, qty: 1000 },
  { name: "gasa4", variant: "15mm", price: 150000, qty: 900 },
  { name: "gasa5", variant: "16mm", price: 160000, qty: 800 },
  { name: "gasa6", variant: "17mm", price: 170000, qty: 700 },
  { name: "gasa7", variant: "18mm", price: 180000, qty: 600 },
  { name: "gasa8", variant: "19mm", price: 190000, qty: 500 },
  { name: "gasa9", variant: "20mm", price: 200000, qty: 400 },
  { name: "gasa10", variant: "21mm", price: 210000, qty: 300 },
];
const url = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAYAAA
BRRIOnAAAAAklEQVR4AewaftIAAAOdSURBVO3BQY4jSQIDQXpA//+ybx3mwF
MACUk1Pb00wx+Z+cfJTDmZKScz5WSmnMyUk5lyMlNOZsrJTDmZKScz5WSmnM
yUk5lyMlNeeROQ36TmBsiNmhsgTc0NkKamAflNat5xMlNOZsrJTHnlw9R8Ep
An1DQgT6i5AfIONZ8E5JNOZsrJTDmZKa98GZAn1DwBpKl5AkhT84SadwB5Qs
03ncyUk5lyMlNe+cupaUBugNyoaUCamv+yk5lyMlNOZsorfxkgn6Tm/8nJTD
mZKScz5ZUvU/Ob1NwAeQLIjZp3qPmTnMyUk5lyMlNe+TAgfxIgTU0D0tQ0IE
1NA9LU3AD5k53MlJOZcjJTXnmTmj+ZmgakqXkCSFNzo+a/5GSmnMyUk5mCP/
IGIE1NA/JJap4A0tQ0IJ+kpgH5JDXfdDJTTmbKyUzBH/kgIO9QcwOkqWlAmp
ongDQ1N0CamhsgTc0TQJqaTzqZKScz5WSm4I+8AUhT04A0NQ3IE2reAaSpuQ
Fyo6YBuVHTgNyoaUBu1LzjZKaczJSTmfLKv0xNA9LUNCA3ahqQP5maJ9Q0IJ
90MlNOZsrJTMEfeQOQpuYGSFNzA6SpaUCamhsgfzI1DcgTat5xMlNOZsrJTM
EfeQOQGzU3QG7UNCBPqPkmIE3NDZCmpgFpahqQpuaTTmbKyUw5mSmvfJiaBq
SpeQLIJwG5UdOAPAGkqbkB8g4gTc07TmbKyUw5mSmvfJmaGzUNSFPTgDQ1DU
gDcqPmHWoakAbkCTU3ahqQTzqZKScz5WSmvPJlQN4BpKlpQJqaGyANyDuAfB
OQpqap+aSTmXIyU05myitvUnOj5t8EpKlpQJqaBuQJNU8AaUCamt90MlNOZs
rJTHnlTUB+k5qm5kbNE0CamhsgN0Camhs1DcgTat5xMlNOZsrJTHnlw9R8Ep
AbIE+oaWpugDQ1T6h5AkhT04B808lMOZkpJzPllS8D8oSad6hpQG6A3KhpQG
6AvENNA9LUfNPJTDmZKScz5ZW/DJAbIE1NA/KEmhsgTU0D0oDcALlR846TmX
IyU05myit/GTWfBOQGSFPT1NyoaUBu1DQgn3QyU05myslMeeXL1HyTmncAaW
pugNwAaWoakCfU/KaTmXIyU05myisfBuQ3AWlqboDcALlR85uA/KaTmXIyU0
5mCv7IzD9OZsrJTDmZKScz5WSmnMyUk5lyMlNOZsrJTDmZKScz5WSmnMyUk5
nyP4fZlx0DvMdIAAAAAElFTkSuQmCC`;

const generateTableHTML = (subsetItems, startIndex, isLastSection = false) => {
  let tableItemsStr = subsetItems
    .map(
      (el, idx) => `
    <tr class="body-text" style="text-align: center; background: #f5f5f5; height: 5rem">
      <td>${startIndex + idx}</td>
      <td style="text-align: left">${
        el.name
      }<br><span style="font-size: 10px; font-weight: 300; color: #323843">${
        el.variant
      }</span></td>
      <td>Rp${el.price.toLocaleString()}</td>
      <td>${el.qty}</td>
      <td>Rp${(el.price * el.qty).toLocaleString()}</td>
    </tr>
  `
    )
    .join("");

  // Include the footer and page break if it's not the last section
  let footerAndBreak = isLastSection
    ? ""
    : `
      <div
      style="
        display: flex;
        justify-content: space-between;
        margin-left: 1rem;
        align-items: end;
        margin-top: 1rem;

      "
    >
      <div class="body-text">
        <img
          style="width: 8.5rem; height: 8.5rem"
          src="${url}"
          alt="Embedded Image"
        />
    
        <div>
          <span style="font-weight: 700"
            >Pindai barcode untuk verifikasi pesanan</span
          >
        </div>
      </div>
    
      <div class="body-text" style="width: 40%">
        <div style="display: flex; justify-content: end">
          <span style="font-weight: 700"> April 21, 2024 </span>
        </div>
    
        <div
          style="
            height: 4px;
            background-color: black;
            border-radius: 5px;
            margin-top: 1rem;
            margin-bottom: 1rem;
          "
        ></div>
    
        <div style="display: flex; justify-content: end">
          <span style="font-weight: 400">Syarat & Ketentuan</span>
        </div>
      </div>
    </div>
    <div class="footer-doc"></div>
    <div style="page-break-after: always;"></div>
  `;

  return `
  <div class="content">
    <table style="width: 100%; margin-top: 2.5rem; margin-bottom: 3rem; border-collapse: collapse;">
      <tr class="body-text" style="background: #e6e6e8; height: 2rem">
        <th style="width: 5%">No</th>
        <th style="width: 35%; text-align: left">Produk</th>
        <th>Harga Satuan</th>
        <th>Jumlah</th>
        <th>Sub Total</th>
      </tr>
      ${tableItemsStr}
    </table>
  </div>
  ${footerAndBreak}
  `;
};

const formatTableItems = (items) => {
  let allTables = [];
  let totalPayment = 0;
  let itemCounter = 1;
  let itemsPerPage = 3; // Start with 3 items for the first page

  for (let index = 0; index < items.length; index += itemsPerPage) {
    const isLastSection = index + itemsPerPage >= items.length;
    const subsetItems = items.slice(index, index + itemsPerPage);
    const tableHTML = generateTableHTML(
      subsetItems,
      itemCounter,
      isLastSection
    );
    allTables.push(tableHTML);

    totalPayment += subsetItems.reduce(
      (acc, curr) => acc + curr.price * curr.qty,
      0
    ); // Calculate total payment
    itemCounter += subsetItems.length;

    // After the first iteration, set items per page to 5 for subsequent pages
    if (itemsPerPage === 3) {
      itemsPerPage = 9;
    }
  }

  // The total payment and footer for the last page
  let totalPaymentHTML = `
    <div style="display: flex; justify-content: space-between; margin-top: 2rem;">
      <div></div>
      <div style="width: 30%; display: flex; justify-content: space-between">
        <span style="font-weight: 400; font-size: 12px; color: #09101D; line-height:18px;">Total Pembayaran:</span>
        <span style="font-weight: 700; font-size: 12px; color: #09101D; line-height:18px;">Rp${totalPayment.toLocaleString()}</span>
      </div>
    </div>
  `;

  // Ensure the QR code footer is added only on the last page
  if (allTables.length) {
    allTables[allTables.length - 1] += totalPaymentHTML;
    // Add your QR code footer here, just for the last page, as per your existing logic
    allTables[allTables.length - 1] += `\
    <div
      style="
        display: flex;
        justify-content: space-between;
        margin-left: 1rem;
        align-items: end;
        margin-top: 1rem;

      "
    >
        <div class="body-text">
          <img
            style="width: 8.5rem; height: 8.5rem"
            src="${url}"
            alt="Embedded Image"
          />
      
          <div>
            <span style="font-weight: 700"
              >Pindai barcode untuk verifikasi pesanan</span
            >
          </div>
        </div>
      
        <div class="body-text" style="width: 40%">
          <div style="display: flex; justify-content: end">
            <span style="font-weight: 700"> April 21, 2024 </span>
          </div>
      
          <div
            style="
              height: 4px;
              background-color: black;
              border-radius: 5px;
              margin-top: 1rem;
              margin-bottom: 1rem;
            "
          ></div>
      
          <div style="display: flex; justify-content: end">
            <span style="font-weight: 400">Syarat & Ketentuan</span>
          </div>
        </div>
      </div>
    <div class="footer-doc"></div>
  `;
  }

  // Compile all parts into a single string with appropriate page breaks
  return allTables.join('<div style="page-break-after: always;"></div>');
};

const formatBuyerContact = (contacts) => {
  let str = ``;

  for (let i = 0; i < contacts.length; i++) {
    str += `
    <div>
    <span>${contacts[i].phoneNumber} (${contacts[i].name})</span>
    </div>
  `;
  }
  return str;
};

const totalAndFooterHtml = formatTableItems(orderItems);

const buyerContacts = formatBuyerContact([
  {
    name: "as",
    phoneNumber: "213123123",
  },
  {
    name: "as",
    phoneNumber: "213123123",
  },
  {
    name: "as",
    phoneNumber: "213123123",
  },
  {
    name: "as",
    phoneNumber: "213123123",
  },
  {
    name: "as",
    phoneNumber: "213123123",
  },
  {
    name: "as",
    phoneNumber: "213123123",
  },
]);

const replacements = {
  totalAndFooterHtml,
  buyerName: "PT ABC INDONESIA",
  buyerAddress: "The Leaf Plnesi Selatan, 13929 Indonesia",
  buyerContacts,
  orderTime: "20/12/2024 12:22:00 WIB",
  orderPaymentMethod: "Cash",
  orderNo: "12adsdfadjnosfiou23oi",
  orderDate: "2/1/2024",
};

const str = templateOrder.replace(/{{([^}]+)}}/g, (match, variable) => {
  const key = variable;
  if (Object.prototype.hasOwnProperty.call(replacements, key)) {
    return replacements[key] || "";
  } else {
    return match;
  }
});

fs.writeFile("test.txt", str, (err) => {
  if (err) {
    console.error("There was an error writing the file:", err);
  } else {
    console.log("File has been written successfully");
  }
});

const file = {
  content: str,
};
const options = { format: "A4", printBackground: true };

HTMLtoPDF.generatePdf(file, options).then((data) => {
  // console.log("PDF Buffer:-", data);

  fs.writeFile("test.pdf", data, (err) => {
    if (err) {
      console.error("There was an error writing the file:", err);
    } else {
      console.log("File has been written successfully");
    }
  });
});
