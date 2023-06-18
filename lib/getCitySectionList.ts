import { SpreadsheetService } from '../service/SpreadsheetService.js'

const convertStringBoolean = (stringBoolean: string) => {
  return stringBoolean === 'TRUE'
}

const isAvailable = (row: any) => {
  return convertStringBoolean(row['投票対象'])
}

// 無名即時関数
;(async () => {
  const spreadsheet = new SpreadsheetService()
  await spreadsheet.init()

  console.log('hello')

  spreadsheet.getRows().then((rows) => {
    rows.forEach((row: any, index: number) => {
      if (isAvailable(row)) {
        console.log(`${row['作品名']},${row['国名']},${row['都市名']}`)
      }
    })
  })
})()
