import * as XLSX from "xlsx";
export function xlsx_to_json_array() {
    var reader = new FileReader();
    reader.onload = function() {
        var arrayBuffer = this.result,
            array = new Uint8Array(arrayBuffer),
            binaryString = String.fromCharCode.apply(null, array);

        /* Call XLSX */
        var workbook = XLSX.read(binaryString, {
            type: "binary"
        });

        /* DO SOMETHING WITH workbook HERE */
        var first_sheet_name = workbook.SheetNames[0];
        /* Get worksheet */
        var worksheet = workbook.Sheets[first_sheet_name];
        console.log(XLSX.utils.sheet_to_json(worksheet, {
            raw: true
        }));
        // }

        // oReq.send();
    }
    reader.readAsArrayBuffer(this.files[0]);
}