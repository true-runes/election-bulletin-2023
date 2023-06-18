import { Spreadsheet } from '../service/Spreadsheet'

// 無名即時関数
;(async () => {
  const spreadsheet = new Spreadsheet()
  await spreadsheet.init()

  console.log('hello')

  spreadsheet.getRows().then((rows) => {
    rows.forEach((row) => {
      console.log(`[ROW] ${row}`)
    })
  })
})()
