// import * as XLSX from "xlsx";

import { xlsx_to_json_array } from './readExcel.js'

var xlsx_data;
// helper function to assign value to a global variable:
async function upload_xlsx(e) {
    xlsx_data = await xlsx_to_json_array(e);
    console.log(xlsx_data)
  }
document.getElementById("file-upload").addEventListener('change', upload_xlsx);