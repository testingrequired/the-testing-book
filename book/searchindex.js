Object.assign(window.search, {"doc_urls":["01/introduction.html#before-we-get-started","01/what-is-a-test.html#what-is-a-test","01/what-is-a-test.html#in-this-book","01/what-is-a-test.html#setupgiven","01/what-is-a-test.html#actionswhen","01/what-is-a-test.html#assertionsthen","01/what-is-a-test.html#some-examples","01/what-is-a-test.html#code-examples","01/what-is-a-test.html#for-best-results"],"index":{"documentStore":{"docInfo":{"0":{"body":25,"breadcrumbs":3,"title":2},"1":{"body":47,"breadcrumbs":3,"title":1},"2":{"body":34,"breadcrumbs":3,"title":1},"3":{"body":36,"breadcrumbs":3,"title":1},"4":{"body":21,"breadcrumbs":3,"title":1},"5":{"body":24,"breadcrumbs":3,"title":1},"6":{"body":46,"breadcrumbs":3,"title":1},"7":{"body":26,"breadcrumbs":4,"title":2},"8":{"body":25,"breadcrumbs":4,"title":2}},"docs":{"0":{"body":"Testing is a big topic. A really big topic that means so many different things to different people. I hope by defining and referencing some vocabulary the book uses it helps everyone have a common understand of the concepts being outlined.","breadcrumbs":"Introduction » Before We Get Started","id":"0","title":"Before We Get Started"},"1":{"body":"The term \"test\" has a lot of different meanings depending on the context and the person. To some it's an individual test case being exercised by a person but to others it's some kind of automated test. There are even those that take issue calling anything automated a test but rather a \"check\". Even within automated testing there are several different types and forms of tests like unit, integration, end to end, smoke, regression and even performance tests.","breadcrumbs":"Introduction » What Is A Test? » What Is A Test?","id":"1","title":"What Is A Test?"},"2":{"body":"For the purposes of talking about tests as a general concept we'll use this more abstract defition of what a test is: A test is the codifying of a defined scenario (setup, actions) + an expected behavior (assertions) Given this condition When this action occurs Then this state is expected A test captures our current understanding of the system. Let's break that down.","breadcrumbs":"Introduction » What Is A Test? » In This Book","id":"2","title":"In This Book"},"3":{"body":"This is where you define what the state of the system looks like before any actions are performed. Is the user logged in? Is the user banned? Does user have permission to view post? Each test has a limited budget for number of system state variables that are \"in budget\". Variables come at a cost of complexity when trying to fill out test coverage but we'll cover this later.","breadcrumbs":"Introduction » What Is A Test? » Setup/Given","id":"3","title":"Setup/Given"},"4":{"body":"This is where you define what actions are performed during the test. User creates a new post User likes a post PostService creates new post Query the post table for posts by user","breadcrumbs":"Introduction » What Is A Test? » Actions/When","id":"4","title":"Actions/When"},"5":{"body":"Examine the resulting system state. Does it match our expectations? User is redirected to newly created post Post like count is incremented User's posts query includes newly created post Returns all of user's posts","breadcrumbs":"Introduction » What Is A Test? » Assertions/Then","id":"5","title":"Assertions/Then"},"6":{"body":"Given the user is logged in When the user goes to login page Then the user is redirected to home page Given the user is not logged in When the user goes to login page Then the user remains on the login page Given the user is logged in And the user goes to the home page When the page loads Then the user's feed is populated Given the user is logged in And the user goes to the home page When the page loads Then the default feed is populated","breadcrumbs":"Introduction » What Is A Test? » Some Examples","id":"6","title":"Some Examples"},"7":{"body":"This applies to tests in code as well. I'll often put comments to organize a code test. fn div (a: usize, b: usize) -> usize { a / b\n} // Given\nlet a = 10;\nlet b = 2; // When\nlet result = div(a, b); // Then\nassert_eq!(5, result);","breadcrumbs":"Introduction » What Is A Test? » Code Examples","id":"7","title":"Code Examples"},"8":{"body":"These aren't rules but you should fully understand why a test isn't doing these things: Setup should come before actions Actions should come before assertions Tests can have multiple assertions but they should all be asserting different aspects of the same expected behavior.","breadcrumbs":"Introduction » What Is A Test? » For Best Results","id":"8","title":"For Best Results"}},"length":9,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"1":{"0":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}},"2":{"df":1,"docs":{"7":{"tf":1.0}}},"a":{"b":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"a":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":4,"docs":{"2":{"tf":1.4142135623730951},"3":{"tf":1.0},"4":{"tf":1.0},"8":{"tf":1.4142135623730951}},"s":{"/":{"df":0,"docs":{},"w":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{},"n":{"df":0,"docs":{},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"7":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"'":{"df":0,"docs":{},"t":{"df":1,"docs":{"8":{"tf":1.0}}}},"df":0,"docs":{}}}},"s":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"8":{"tf":1.0}}}},"df":0,"docs":{}}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"_":{"df":0,"docs":{},"e":{"df":0,"docs":{},"q":{"!":{"(":{"5":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":2,"docs":{"2":{"tf":1.0},"8":{"tf":1.7320508075688772}},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"/":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"5":{"tf":1.0}}}}}}},"df":0,"docs":{}}}}}}}}}},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":1,"docs":{"1":{"tf":1.7320508075688772}}}}}}},"b":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":1,"docs":{"7":{"tf":2.0}},"e":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":3,"docs":{"0":{"tf":1.0},"3":{"tf":1.0},"8":{"tf":1.4142135623730951}}}}},"h":{"a":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":2,"docs":{"2":{"tf":1.0},"8":{"tf":1.0}}}}}}},"df":0,"docs":{}},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"8":{"tf":1.0}}}}},"i":{"df":0,"docs":{},"g":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":2,"docs":{"0":{"tf":1.0},"2":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"k":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}},"u":{"d":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{}}},"c":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"s":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}},"o":{"d":{"df":0,"docs":{},"e":{"df":1,"docs":{"7":{"tf":1.7320508075688772}}},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":2,"docs":{"3":{"tf":1.0},"8":{"tf":1.4142135623730951}}},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"7":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"n":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"2":{"tf":1.0}}}}}},"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":1,"docs":{"3":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":2,"docs":{"4":{"tf":1.4142135623730951},"5":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"a":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":4,"docs":{"0":{"tf":1.0},"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0}}},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}}}},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":3,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.4142135623730951},"8":{"tf":1.0}}}}}},"v":{"(":{"a":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}},"df":1,"docs":{"7":{"tf":1.0}}}},"o":{"df":1,"docs":{"8":{"tf":1.0}},"w":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"a":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.7320508075688772}}},"r":{"df":0,"docs":{},"y":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"5":{"tf":1.0}}}},"p":{"df":0,"docs":{},"l":{"df":2,"docs":{"6":{"tf":1.0},"7":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}}},"p":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":3,"docs":{"2":{"tf":1.4142135623730951},"5":{"tf":1.0},"8":{"tf":1.0}}}},"df":0,"docs":{}}}}},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"d":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}},"n":{"df":1,"docs":{"7":{"tf":1.0}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":1,"docs":{"1":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"8":{"tf":1.0}}}}}}},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":3,"docs":{"2":{"tf":1.0},"6":{"tf":2.0},"7":{"tf":1.0}}}}}},"o":{"df":0,"docs":{},"e":{"df":1,"docs":{"6":{"tf":2.0}}}}},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"p":{"df":1,"docs":{"0":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"6":{"tf":1.7320508075688772}}}},"p":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"i":{"'":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"7":{"tf":1.0}}}}},"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"d":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}}}}}}},"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"d":{"df":0,"docs":{},"u":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"s":{"df":0,"docs":{},"n":{"'":{"df":0,"docs":{},"t":{"df":1,"docs":{"8":{"tf":1.0}}}},"df":0,"docs":{}},"s":{"df":0,"docs":{},"u":{"df":1,"docs":{"1":{"tf":1.0}}}}},"t":{"'":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}},"df":0,"docs":{}}},"k":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}}},"l":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"'":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.0}}}},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"o":{"a":{"d":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{},"g":{"df":2,"docs":{"3":{"tf":1.0},"6":{"tf":2.0}},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.7320508075688772}}}}},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"3":{"tf":1.0}}}},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}},"m":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}},"t":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"n":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"8":{"tf":1.0}}}}}}}}},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"df":1,"docs":{"4":{"tf":1.4142135623730951}},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}}}}},"u":{"df":0,"docs":{},"m":{"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}}}},"o":{"c":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"7":{"tf":1.0}}}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"p":{"a":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":1,"docs":{"6":{"tf":2.8284271247461903}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":3,"docs":{"1":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0}}}}}},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}}},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}}},"s":{"df":0,"docs":{},"t":{"df":3,"docs":{"3":{"tf":1.0},"4":{"tf":2.23606797749979},"5":{"tf":2.23606797749979}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}}}}}}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"t":{"df":1,"docs":{"7":{"tf":1.0}}}}},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":2,"docs":{"4":{"tf":1.0},"5":{"tf":1.0}}}}}}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.0}}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}}},"g":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.0}}}}},"df":0,"docs":{}},"s":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":3,"docs":{"5":{"tf":1.0},"7":{"tf":1.4142135623730951},"8":{"tf":1.0}}}}}},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"5":{"tf":1.0}}}}}}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":1,"docs":{"8":{"tf":1.0}}}}}},"s":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"8":{"tf":1.0}}}}},"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"p":{"/":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}},"df":2,"docs":{"2":{"tf":1.0},"8":{"tf":1.0}}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"t":{"df":0,"docs":{},"e":{"df":3,"docs":{"2":{"tf":1.0},"3":{"tf":1.4142135623730951},"5":{"tf":1.0}}}}},"df":0,"docs":{}},"y":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":3,"docs":{"2":{"tf":1.0},"3":{"tf":1.4142135623730951},"5":{"tf":1.0}}}}}}}},"t":{"a":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}},"l":{"df":0,"docs":{},"k":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":1,"docs":{"1":{"tf":1.0}}}},"s":{"df":0,"docs":{},"t":{"df":7,"docs":{"0":{"tf":1.0},"1":{"tf":2.8284271247461903},"2":{"tf":2.0},"3":{"tf":1.4142135623730951},"4":{"tf":1.0},"7":{"tf":1.4142135623730951},"8":{"tf":1.4142135623730951}}}}},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":2,"docs":{"0":{"tf":1.0},"8":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.0}}}},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"n":{"d":{"df":3,"docs":{"0":{"tf":1.0},"2":{"tf":1.0},"8":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}},"s":{"df":2,"docs":{"0":{"tf":1.0},"2":{"tf":1.0}},"e":{"df":0,"docs":{},"r":{"'":{"df":2,"docs":{"5":{"tf":1.4142135623730951},"6":{"tf":1.0}}},"df":4,"docs":{"3":{"tf":1.7320508075688772},"4":{"tf":1.7320508075688772},"5":{"tf":1.0},"6":{"tf":3.1622776601683795}}}},"i":{"df":0,"docs":{},"z":{"df":1,"docs":{"7":{"tf":1.7320508075688772}}}}}},"v":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"a":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"df":1,"docs":{"3":{"tf":1.0}}}}},"o":{"c":{"a":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"w":{"df":0,"docs":{},"e":{"'":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":1.0}}}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"7":{"tf":1.0}}}}},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}}}},"breadcrumbs":{"root":{"1":{"0":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}},"2":{"df":1,"docs":{"7":{"tf":1.0}}},"a":{"b":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"a":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":4,"docs":{"2":{"tf":1.4142135623730951},"3":{"tf":1.0},"4":{"tf":1.0},"8":{"tf":1.4142135623730951}},"s":{"/":{"df":0,"docs":{},"w":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{},"n":{"df":0,"docs":{},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"7":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"'":{"df":0,"docs":{},"t":{"df":1,"docs":{"8":{"tf":1.0}}}},"df":0,"docs":{}}}},"s":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"8":{"tf":1.0}}}},"df":0,"docs":{}}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"_":{"df":0,"docs":{},"e":{"df":0,"docs":{},"q":{"!":{"(":{"5":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":2,"docs":{"2":{"tf":1.0},"8":{"tf":1.7320508075688772}},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"/":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}}}}}},"df":0,"docs":{}}}}}}}}}},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":1,"docs":{"1":{"tf":1.7320508075688772}}}}}}},"b":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":1,"docs":{"7":{"tf":2.0}},"e":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":3,"docs":{"0":{"tf":1.4142135623730951},"3":{"tf":1.0},"8":{"tf":1.4142135623730951}}}}},"h":{"a":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":2,"docs":{"2":{"tf":1.0},"8":{"tf":1.0}}}}}}},"df":0,"docs":{}},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"8":{"tf":1.4142135623730951}}}}},"i":{"df":0,"docs":{},"g":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":2,"docs":{"0":{"tf":1.0},"2":{"tf":1.4142135623730951}}}}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"k":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}},"u":{"d":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{}}},"c":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"s":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}},"o":{"d":{"df":0,"docs":{},"e":{"df":1,"docs":{"7":{"tf":2.0}}},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":2,"docs":{"3":{"tf":1.0},"8":{"tf":1.4142135623730951}}},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"7":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"n":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"2":{"tf":1.0}}}}}},"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"g":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":1,"docs":{"3":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":2,"docs":{"4":{"tf":1.4142135623730951},"5":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"a":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":4,"docs":{"0":{"tf":1.0},"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0}}},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}}}},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":3,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.4142135623730951},"8":{"tf":1.0}}}}}},"v":{"(":{"a":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}},"df":1,"docs":{"7":{"tf":1.0}}}},"o":{"df":1,"docs":{"8":{"tf":1.0}},"w":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"a":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.7320508075688772}}},"r":{"df":0,"docs":{},"y":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"5":{"tf":1.0}}}},"p":{"df":0,"docs":{},"l":{"df":2,"docs":{"6":{"tf":1.4142135623730951},"7":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}}},"p":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":3,"docs":{"2":{"tf":1.4142135623730951},"5":{"tf":1.0},"8":{"tf":1.0}}}},"df":0,"docs":{}}}}},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"d":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}},"n":{"df":1,"docs":{"7":{"tf":1.0}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":1,"docs":{"1":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"8":{"tf":1.0}}}}}}},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":3,"docs":{"2":{"tf":1.0},"6":{"tf":2.0},"7":{"tf":1.0}}}}}},"o":{"df":0,"docs":{},"e":{"df":1,"docs":{"6":{"tf":2.0}}}}},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"p":{"df":1,"docs":{"0":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"6":{"tf":1.7320508075688772}}}},"p":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"i":{"'":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"7":{"tf":1.0}}}}},"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"d":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}}}}}}},"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"d":{"df":0,"docs":{},"u":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":9,"docs":{"0":{"tf":1.0},"1":{"tf":1.0},"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0},"7":{"tf":1.0},"8":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"s":{"df":0,"docs":{},"n":{"'":{"df":0,"docs":{},"t":{"df":1,"docs":{"8":{"tf":1.0}}}},"df":0,"docs":{}},"s":{"df":0,"docs":{},"u":{"df":1,"docs":{"1":{"tf":1.0}}}}},"t":{"'":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}},"df":0,"docs":{}}},"k":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}}},"l":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"'":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.0}}}},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"o":{"a":{"d":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{},"g":{"df":2,"docs":{"3":{"tf":1.0},"6":{"tf":2.0}},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.7320508075688772}}}}},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"3":{"tf":1.0}}}},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}},"m":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}},"t":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"n":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"8":{"tf":1.0}}}}}}}}},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"df":1,"docs":{"4":{"tf":1.4142135623730951}},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}}}}},"u":{"df":0,"docs":{},"m":{"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}}}},"o":{"c":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"7":{"tf":1.0}}}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"p":{"a":{"df":0,"docs":{},"g":{"df":0,"docs":{},"e":{"df":1,"docs":{"6":{"tf":2.8284271247461903}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":3,"docs":{"1":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0}}}}}},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}}},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":1,"docs":{"6":{"tf":1.4142135623730951}}}}},"s":{"df":0,"docs":{},"t":{"df":3,"docs":{"3":{"tf":1.0},"4":{"tf":2.23606797749979},"5":{"tf":2.23606797749979}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}}}}}}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"t":{"df":1,"docs":{"7":{"tf":1.0}}}}},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":2,"docs":{"4":{"tf":1.0},"5":{"tf":1.0}}}}}}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":2,"docs":{"5":{"tf":1.0},"6":{"tf":1.0}}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}}},"g":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"6":{"tf":1.0}}}}},"df":0,"docs":{}},"s":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":3,"docs":{"5":{"tf":1.0},"7":{"tf":1.4142135623730951},"8":{"tf":1.4142135623730951}}}}}},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"5":{"tf":1.0}}}}}}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":1,"docs":{"8":{"tf":1.0}}}}}},"s":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"8":{"tf":1.0}}}}},"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"p":{"/":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}}}},"df":2,"docs":{"2":{"tf":1.0},"8":{"tf":1.0}}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}},"t":{"df":0,"docs":{},"e":{"df":3,"docs":{"2":{"tf":1.0},"3":{"tf":1.4142135623730951},"5":{"tf":1.0}}}}},"df":0,"docs":{}},"y":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":3,"docs":{"2":{"tf":1.0},"3":{"tf":1.4142135623730951},"5":{"tf":1.0}}}}}}}},"t":{"a":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}},"l":{"df":0,"docs":{},"k":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":1,"docs":{"1":{"tf":1.0}}}},"s":{"df":0,"docs":{},"t":{"df":9,"docs":{"0":{"tf":1.0},"1":{"tf":3.1622776601683795},"2":{"tf":2.23606797749979},"3":{"tf":1.7320508075688772},"4":{"tf":1.4142135623730951},"5":{"tf":1.0},"6":{"tf":1.0},"7":{"tf":1.7320508075688772},"8":{"tf":1.7320508075688772}}}}},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":2,"docs":{"0":{"tf":1.0},"8":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.0}}}},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"n":{"d":{"df":3,"docs":{"0":{"tf":1.0},"2":{"tf":1.0},"8":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}},"s":{"df":2,"docs":{"0":{"tf":1.0},"2":{"tf":1.0}},"e":{"df":0,"docs":{},"r":{"'":{"df":2,"docs":{"5":{"tf":1.4142135623730951},"6":{"tf":1.0}}},"df":4,"docs":{"3":{"tf":1.7320508075688772},"4":{"tf":1.7320508075688772},"5":{"tf":1.0},"6":{"tf":3.1622776601683795}}}},"i":{"df":0,"docs":{},"z":{"df":1,"docs":{"7":{"tf":1.7320508075688772}}}}}},"v":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"a":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"df":1,"docs":{"3":{"tf":1.0}}}}},"o":{"c":{"a":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"w":{"df":0,"docs":{},"e":{"'":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":1.0}}}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"7":{"tf":1.0}}}}},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}}}},"title":{"root":{"a":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"/":{"df":0,"docs":{},"w":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"/":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"5":{"tf":1.0}}}}}}},"df":0,"docs":{}}}}}}}}}}},"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"8":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"c":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"e":{"df":1,"docs":{"7":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":2,"docs":{"6":{"tf":1.0},"7":{"tf":1.0}}}}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"8":{"tf":1.0}}}}}}}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"p":{"/":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}},"df":0,"docs":{}}}}},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});