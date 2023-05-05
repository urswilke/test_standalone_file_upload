import * as fs from "fs";
import { readFile, set_fs } from "xlsx";
set_fs(fs);


var workbook = readFile("test.xlsx");