const employees=[
    { name: "Alice", tasksCompleted: 8, rating: 4.7 },
    { name: "Bob", tasksCompleted: 4, rating: 4.0 },
    { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
    { name: "David", tasksCompleted: 10, rating: 4.9 },
    { name: "Eve", tasksCompleted: 7, rating: 2.8 }
  ]

  const sortOrder={
    "Excellent":0,
    "Good":1,
    "Needs Improvent":2
  }

  const newemployees=employees.filter(({tasksCompleted})=>tasksCompleted>5)
  .map(({name,rating})=>{
    return {name,performance:rating>4.5?"Excellent":(rating>3&&rating<=4.5?"Good":"Needs Imrovement")}
  }).sort((a,b)=>{
    const orderofA=sortOrder[a.performance];
    const orderofB=sortOrder[b.performance];
    if(orderofA<orderofB){
        return -1
    }else if(orderofA>orderofB){
        return 1
    }
    return 0
  })
  console.log(newemployees)
  
  