class TsvToArrayJson {
  constructor(tsvFilepath) {
    this.tsvFilepath = tsvFilepath
  }

  // 同期処理で TSV を読み込む
  getTsvFile() {
    const fs = require('fs')
    const tsvFile = fs.readFileSync(this.tsvFilepath, 'utf-8')

    return tsvFile
  }

  // TSVファイルの各列を配列で取り出す
  getRowsFromTsvFile(tsvFile) {
    const rows = tsvFile.split('\n')

    return rows
  }

  // TSVファイルの各行を取り出し、所定のフィルターをかけて配列で返す
  // A,B,C => A（B・C）
  getFilteredRows(rows) {
    const filteredRows = rows.map((row) => {
      const columns = row.split('\t')

      return `${columns[1]}（${columns[2]}・${columns[0]}）`
    })

    return filteredRows
  }

  getObjectKeys(rows) {
    const objectKeys = rows.map((row) => {
      const columns = row.split('\t')

      return columns[0]
    })

    // objectKeysをユニークにする
    const uniqueObjectKeys = objectKeys.filter((x, i, self) => {
      return self.indexOf(x) === i
    })

    // 空文字は取り除く
    return uniqueObjectKeys.filter((x) => {
      return x !== ''
    })
  }

  // csv の 1列目をkey、`${columns[1]}（${columns[2]}・${columns[0]}）` を value にしたオブジェクトを作る
  createObject(rows, useFirstIndexColumn = true) {
    const objectKeys = this.getObjectKeys(rows)

    const object = objectKeys.reduce((acc, objectKey) => {
      const filteredRows = rows.filter((row) => {
        const columns = row.split('\t')
        return columns[0] === objectKey
      })

      const values = filteredRows.map((filteredRow) => {
        const columns = filteredRow.split('\t')
        if (useFirstIndexColumn === true) {
          return `${columns[1]}（${columns[2]}）`
        } else {
          return `${columns[2]}`
        }
      })

      acc[objectKey] = values

      return acc
    }, {})

    return object
  }
}

const fs = require('fs')

const tsvToArrayJsonHq = new TsvToArrayJson(
  './src/app/resource/headquartersCharacters.tsv'
)
const tsvFileHq = tsvToArrayJsonHq.getTsvFile()
const rowsHq = tsvToArrayJsonHq.getRowsFromTsvFile(tsvFileHq)
const objectHq = tsvToArrayJsonHq.createObject(rowsHq, true)
const jsonHq = JSON.stringify(objectHq, null, 2)
fs.writeFileSync('./src/app/resource/headquartersCharacters.json', jsonHq)

const tsvToArrayJsonCt = new TsvToArrayJson('./src/app/resource/cities.tsv')
const tsvFileCt = tsvToArrayJsonCt.getTsvFile()
const rowsCt = tsvToArrayJsonCt.getRowsFromTsvFile(tsvFileCt)
const objectCt = tsvToArrayJsonCt.createObject(rowsCt, false)
const jsonCt = JSON.stringify(objectCt, null, 2)
fs.writeFileSync('./src/app/resource/cities.json', jsonCt)
