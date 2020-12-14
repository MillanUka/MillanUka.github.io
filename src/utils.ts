import { GoogleSpreadsheet } from "google-spreadsheet";

const SPREADSHEET_ID: string = (String)(process.env.REACT_APP_SPREADSHEET_ID);
const SHEET_ID = (String)(process.env.REACT_APP_SHEET_ID);
const CLIENT_EMAIL = (String)(process.env.REACT_APP_GOOGLE_CLIENT_EMAIL);
const PRIVATE_KEY = (String)(process.env.REACT_APP_GOOGLE_SERVICE_PRIVATE_KEY).replace(/\\n/g, '\n');

const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

export type UserResponse = {
  name: string,
  email: string,
  message: string,
  time?: Date,
} 
export async function appendSpreadsheet (response: UserResponse) {
  try {
    await doc.useServiceAccountAuth({client_email: CLIENT_EMAIL, private_key: PRIVATE_KEY});
    await doc.loadInfo();
    const sheet = doc.sheetsById[SHEET_ID];
    const result = await sheet.addRow({name: response.name, email: response.email, message: response.email, time: new Date().toISOString()});
    if(result) {
      alert("Your message was successfully recieved.");
    }
  } catch (e) {
    console.error('Error: ', e);
    alert("There an error, please try again another time.")
  }
};