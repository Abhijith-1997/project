// // var arr=[1,2,3,4,5,8]
// // var res=arr.map(num=>num**2)
// // console.log(res);


// var items=[
//     {id:100,name:"sugar",price:35,aval_qty:10},
//     {id:101,name:"teapowder",price:105,aval_qty:100},
//     {id:102,name:"boost",price:150,aval_qty:10},
//     {id:103,name:"complan",price:110,aval_qty:5},
    
//  ]
// // var item_names=items.map(product=>product.name)
// // console.log(item_names);
// // var item_names=items.map(product=>product.name.Touppercase)
// // console.log(item_names);

// // //nummber of product
var count=items.length
console.log(count);


// //filter

// arr=[1,2,3,4,5,6,7]
// var even=arr.filter(num=>num%2==0)
// console.log(even);
// var costly_item=items.filter(item=>item.price>100)
// console.log(costly_item);
// var costly_item=items.filter(item=>item.price<100)
// console.log(costly_item);

// //fetch products whose aval q
// var costly_item=items.filter(item=>item.aval_qty>5)
// console.log(costly_item);

// // print all items in stock
// var in_stock=items.filter(item=>item.aval_qty>0)
// console.log(in_stock);


//reduce
// arr=[1,2,3,7,3,9,4,5]
// var max_element=arr.reduce((num1,num2)=>num1>num2?num1:num2)
// console.log(max_element);

// //sum
// var sum=arr.reduce((num1,num2)=>num1+num2)
// console.log(sum);

// var items=[
//     {id:100,name:"sugar",price:35,aval_qty:10},
//     {id:101,name:"teapowder",price:105,aval_qty:100},
//     {id:102,name:"boost",price:150,aval_qty:10},
//     {id:103,name:"complan",price:110,aval_qty:0},
    
//  ]
//  //print the item which have low aval_qty
// var low_aval_qty=items.reduce((item1,item2)=>item1.aval_qty<item2.aval_qty?item1:item2)
// var low_aval_qty=items.filter(item=>item.val_qty==low_aval_qty)
// console.log(low_aval_qty);

// //print product details  which have highest price


// //sort
// var aval_qty_sort=items.sort((item1,item2)=>item1.aval_qty-item2.aval_qty)
// console.log(aval_qty_sort);

// var price_sort=items.sort((item1,item2)=>item1.price-item2.price)
// console.log(price_sort);


// //find
// var boost_data=items.find(item=>item.name=="boost")
// console.log(boost_data);

// //some
// var is_available=items.some(item=>item.name=="hiddenseek")
// console.log(is_available);
//  var is_available=items.some(item=>item.price<=50)
//  console.log(is_available);
 

