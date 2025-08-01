                        // Ajax Form Submit's Locators
            //Get Name field 
    //using CSS locators => #id, .class, htmltag#id, .class
// #title
// .block.w-full.border.border-gray-90  (2 entries with same classes)
// input#title
// input.block.w-full.border.border-gray-90 (specified name field)
           
            //Get Message textbox/field 
    // locating through nodes: parent node>child node  + locating through attribute e.g input[id='inputFirstName']
//div>input[id='inputLastName']
    //locating through multiple attributes
//div>input[type='text'][name='last_name'][id='inputLastName']

            // Get Submit button 
    // using any CSS selector 
//input[name=btn-submit]               // using attributes
//div>input[type=button]               // parent>child
    // using xpath
// //input[@name="btn-submit"]