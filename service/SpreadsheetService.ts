import { GoogleSpreadsheet } from 'google-spreadsheet'
import type {
  GoogleSpreadsheetWorksheet as GoogleSpreadsheetWorksheetType,
  GoogleSpreadsheet as GoogleSpreadsheetType,
} from 'google-spreadsheet'
import creds from '../config/google_creds.json' assert { type: 'json' }

export class SpreadsheetService {
  doc: GoogleSpreadsheetType
  sheet: GoogleSpreadsheetWorksheetType | undefined

  sheetId: string
  clientEmail: string
  privateKey: string

  constructor() {
    // FIXME: 環境変数に入れ、1Password に入れ、.tpl で扱うようにする
    this.sheetId = '1xcElyIdWRQB6-NUmIDOnhYujuOTJ_RIiwfMjma09FJw'
    this.clientEmail = creds.client_email
    this.privateKey = creds.private_key
    this.doc = new GoogleSpreadsheet(this.sheetId)
  }

  async init() {
    await this.doc.useServiceAccountAuth({
      client_email: this.clientEmail,
      private_key: this.privateKey,
    })

    await this.doc.loadInfo()
    this.sheet = this.doc.sheetsByIndex[0]
    await this.sheet.loadHeaderRow()

    const headers = this.sheet.headerValues
    console.log(headers)
  }

  async getRows() {
    return await this.sheet!.getRows()
  }
}
