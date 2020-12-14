export function splitArray(originalArr: any[], size: number) {
  var arr: any[] = [];
  for (var i:number = 0; i < originalArr.length; i += size) {
    arr.push(originalArr.slice(i, i + size));
  }
  return arr;
}

import { GoogleSpreadsheet } from "google-spreadsheet";
const SPREADSHEET_ID: string = (String)(process.env.SPREADSHEET_ID);
const SHEET_ID = (String)(process.env.SHEET_ID);
const CLIENT_EMAIL = (String)(process.env.GOOGLE_CLIENT_EMAIL);
const PRIVATE_KEY = (String)(process.env.GOOGLE_SERVICE_PRIVATE_KEY);

const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

type UserResponse = {
  name: string,
  email: string,
  message: string
} 

async function appendSpreadsheet (response: UserResponse) {
  try {
    await doc.useServiceAccountAuth({
      client_email: CLIENT_EMAIL,
      private_key: PRIVATE_KEY,
    });
    await doc.loadInfo();

    const sheet = doc.sheetsById[SHEET_ID];
    const result = await sheet.addRow(response);
  } catch (e) {
    console.error('Error: ', e);
  }
};

const response: UserResponse = { name: "new name", email: "new value", message: "new value" };

appendSpreadsheet(response);
