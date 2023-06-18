import { SpreadsheetService } from '../service/SpreadsheetService.ts'

// 無名即時関数
;(async () => {
  const spreadsheet = new SpreadsheetService()
  await spreadsheet.init()

  console.log('hello')

  spreadsheet.getRows().then((rows) => {
    rows.forEach((row) => {
      console.log(`[ROW] ${row}`)
    })
  })
})()
