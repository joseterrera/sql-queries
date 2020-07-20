//practicing queries with javascript

const foo = "FOO"
const bar = "BAR"


const table = [
  {category: foo, name: 'mario bros', installs: 6, rating: 4},
  {category: foo, name: 'zelda', installs: 20, rating: 3},
  {category: bar, name: 'pac-man', installs: 432, rating: 4.1},
  {category: bar, name: 'tetris', installs: 2, rating: 5},
  {category: foo, name: 'frogger', installs: 54, rating: 4.3},
  {category: bar, name: 'racecar', installs: 45, rating: 4},
]

const groupByReducer = (key) => (acc,item) => {
  let group = item[key]
  acc[group] = acc[group] || []
  acc[group].push(item)
  return acc
}

Object.entries(table
.filter( row => row.installs >= 10)
.reduce(groupByReducer('category'),{}) 
)

.map( 
  ([category,records]) => {
    
     //?
    let maxRecord = records[0]
    for( let record of records ) {
      if( record.rating > maxRecord.rating ) {
        maxRecord = record
      }
    }


    return ({[category]: maxRecord})
  }
) //?
// output

// [ { FOO: { category: 'FOO', name: 'frogger', installs: 54, rating: 4.3 } }, 
//   { BAR: { category: 'BAR', name: 'pac-man', installs: 432, rating: 4.1 } } ] 