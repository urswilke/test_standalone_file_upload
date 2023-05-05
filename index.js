import { xlsx_to_json_array } from './readExcel.js'


document.getElementById("file-upload").addEventListener('change', xlsx_to_json_array);