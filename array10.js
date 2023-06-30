var a = [1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0]
function count10() {
  let f = {'1': 0, '0': 0}
 a.map((i) => {if (i===1) return f['1']+=1; else return f['0']+=1 })
     return f
}
count10()
