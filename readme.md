## 💼 FakeJobs API

### Description

This easy-to-use REST API offers you free fictitious job offers to integrate into your test applications.
The API runs on **NodeJS** using the **ExpressJS** framework.

### How to use the REST API

Here is an example of a GET request response :

    [
    	{
    		"id": "0",
    	    "name": "Microsoft",
    	    "author": "microsoft@company.com",
    	    "date": "06-24-2022",
    	    "salary": "3000 USD",
    	    "fulltime": false,
    	    "city": "London",
    	    "zipcode": "80000",
    	    "country": "United Kingdom",
    	    "title": "Engineer in Machine Learning",
    	    "content": "Lorem ipsum dolor sit...",
    	    "logo": "https://cours-informatique-gratuit.fr/wp-content/uploads/2014/05/microsoft.png"
    	}
    ]

You can therefore use this type of GET request :

    https://apis.camillerakoto.fr/fakejobs/jobs?city=paris&fulltime=false&content=xyz

Of course, you can pass all the above attributes as parameters to the URL :

    id, name, author, date, salary, fulltime (false or true), city, zipcode, country, title, content, logo (not useful)

If you want to search for everything without any particular parameter then just go to this URL :

    https://apis.camillerakoto.fr/fakejobs/jobs

### Contribution

If you want to contribute to improve the REST API by adding jobs for example, please contact me :
camillerak05@gmail.com

### Author

Website : https://camillerakoto.fr
