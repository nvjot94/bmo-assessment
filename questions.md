1.	How long did you spend on the coding assignment? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.
Answer - I spent less than a day on the project. Although I have done the job better but testing could have done more properly if given more time.

2.	What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.
 - I have used react hooks in functional components in order to manage the local state.
 - In javascript I have used optional chaining operator. The optional chaining operator "?." permits reading the value of a property located deep within a chain of connected objects without having to expressly validate that each reference in the chain is valid. 

3. How would you track down a performance issue in production? Have you ever had to do this?
Ans- Performance issue can be solved by using CI/CD. Continuous integration (CI) is a development practice that requires developers to integrate code into a shared repository and Continuous delivery (CD) is the ability to get changes of any type (features, configuration changes, bug fixes, and experiments) into production.You can work toward a culture of continuous feedback loops, getting better and better from the feedback you get from different sources.

4. How would you improve the API that you just used?
- The url such as reserve_url, mobile_reserve_url are not on https.
- The image_url no image on retrieval, so I had to use a default image for every restaurant.
- The JSON response could have been more readable if it had seperate oject for address and location.
// my proposed JSON
{
         "id":112411,
         "name":"Walkers Fish Market - Mississauga",
         "address":{
            "street":"#1 - 2575 Dundas St W.",
            "city":"Mississauga",
            "state":"ON",
            "area":"Toronto / SW Ontario",
            "postal_code":"L5K 2M6",
            "country":"CA" 
         },
         "phone":"9056073474",
         "location":{
            "lat":43.570552,
            "lng":-79.627667
         },
         "price":3, 
         "reserve_url":"https://www.opentable.com/single.aspx?rid=112411",
         "mobile_reserve_url":"https://mobile.opentable.com/opentable/?restId=112411",
         "image_url":"https://www.opentable.com/img/restimages/112411.jpg"
}
//original JSON
{
         "id":112411,
         "name":"Walkers Fish Market - Mississauga",
         "address":"#1 - 2575 Dundas St W.",
         "city":"Mississauga",
         "state":"ON",
         "area":"Toronto / SW Ontario",
         "postal_code":"L5K 2M6",
         "country":"CA",
         "phone":"9056073474",
         "lat":43.570552,
         "lng":-79.627667,
         "price":3,
         "reserve_url":"http://www.opentable.com/single.aspx?rid=112411",
         "mobile_reserve_url":"http://mobile.opentable.com/opentable/?restId=112411",
         "image_url":"https://www.opentable.com/img/restimages/112411.jpg"
}




