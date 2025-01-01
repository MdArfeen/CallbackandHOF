const products=[
    { name: "Laptop", category: "Electronics", stock: 50, pricePerUnit: 1000 },
    { name: "Phone", category: "Electronics", stock: 150, pricePerUnit: 500 },
    { name: "T-shirt", category: "Clothing", stock: 40, pricePerUnit: 20 },
    { name: "Jeans", category: "Clothing", stock: 90, pricePerUnit: 40 },
    { name: "Watch", category: "Accessories", stock: 70, pricePerUnit: 150 }
  ]
  
 const newProducts=products.filter(({stock})=>stock<100)
 .map(product=>{
    const {name,category,pricePerUnit,stock}=product;
    return {name,category,totalReorderCost:pricePerUnit*(100-stock)}
 })
 .reduce((acc,cur)=>{
    const {category,totalReorderCost}=cur;
    if(acc[category]){
        acc[category]=acc[category]+totalReorderCost;
    }
    else{
        acc[category]=totalReorderCost
    }
    return acc;
 },{})
 console.log(newProducts)