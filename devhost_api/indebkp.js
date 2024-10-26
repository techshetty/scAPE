
const test=async()=>{
  var test1=["test1","test2","test3"]
  await test1.map( async test=>{
    const res= await fetch("https://devhostapi.sosc.org.in/testend");
    var t1=await res.json();
    console.log(t1)
  });
  console.log("Hello")
}
test()