# Build Bowties API in Node/Express with MongoDB/Mongoose

*Ira Herman - WDI LA 20*  
*Updated by Kate Wood - WDI SM 24, WDI SM 38, and WDI SM 43*

## Introduction:
You are buiding an app for a Bowtie Store. They want customers to be able to use both a mobile and web app to browse their different styles of bowties to see a picture and learn the materials, price, pattern, style, and description.

First you'll need to build the back end API that both apps will use. The dev team has given you the following sample for what they expect as JSON responses (below):

## Endpoints:
`GET /api/bowties`
JSON response:
	
	  [
	    {
	      id: 11,
	      material: "silk",
	      pattern: "houndstooth",
	      style: "slim",
	      image_url: "https://cdn.thetiebar.com/products/BD396.jpg",
	      retail_price: 24.95,
	      description: "This houndstooth bowtie is made from top quality silk."
	    },
	    {
	      id: 12,
	      material: "silk",
	      pattern: "floral",
	      style: "slim",
	      image_url: "https://cdn.thetiebar.com/products/B1754.jpg",
	      retail_price: 23.95,
	      description: "This floral bowtie is made from top quality silk."
	    },
	    {
	      id: 13,
	      material: "silk",
	      pattern: "paisley",
	      style: "traditional",
	      image_url: "https://cdn.thetiebar.com/products/B1694ST.jpg",
	      retail_price: 26.95,
	      description: "This paisley bowtie is made from top quality silk."
	    },
	    {
	      id: 14,
	      material: "wool",
	      pattern: "plaid",
	      style: "diamond tip",
	      image_url: "https://cdn.thetiebar.com/products/BW251.jpg",
	      retail_price: 29.95,
	      description: "This plaid bowtie is made from top quality wool."
	    },
	    {
	      id: 15,
	      material: "cotton",
	      pattern: "gingham",
	      style: "traditional",
	      image_url: "https://cdn.thetiebar.com/products/BC411ST.jpg",
	      retail_price: 22.95,
	      description: "This gingham bowtie is made from top quality cotton."
	    },
	    {
	      id: 16,
	      material: "wool",
	      pattern: "plaid",
	      style: "traditional",
	      image_url: "https://cdn.thetiebar.com/products/BW128ST.jpg",
	      retail_price: 29.95,
	      description: "This plaid bowtie is made from top quality wool."
	    },
	    {
	      id: 17,
	      material: "cotton",
	      pattern: "plaid",
	      style: "slim",
	      image_url: "https://cdn.thetiebar.com/products/BC432.jpg",
	      retail_price: 22.95,
	      description: "This plaid bowtie is made from top quality cotton."
	    },
	    {
	      id: 18,
	      material: "cotton",
	      pattern: "striped",
	      style: "diamond tip",
	      image_url: "https://cdn.thetiebar.com/products/BD160.jpg",
	      retail_price: 23.95,
	      description: "This striped bowtie is made from top quality cotton."
	    },
	    {
	      id: 19,
	      material: "silk",
	      pattern: "geometric",
	      style: "slim",
	      image_url: "https://cdn.thetiebar.com/products/B2074.jpg",
	      retail_price: 28.95,
	      description: "This geometric bowtie is made from top quality silk."
	    },
	    {
	      id: 20,
	      material: "silk",
	      pattern: "plaid",
	      style: "diamond tip",
	      image_url: "https://cdn.thetiebar.com/products/BD339_l_2.png",
	      retail_price: 34.95,
	      description: "This plaid bowtie is made from top quality silk."
	    }
	  ]


---

`GET /api/bowties/:id`

JSON response (example for `/api/bowties/11`):

		{
	      id: 11,
	      material: "silk",
	      pattern: "houndstooth",
	      style: "slim",
	      image_url: "https://cdn.thetiebar.com/products/BD396.jpg",
	      retail_price: 24.95,
	      description: "This houndstooth bowtie is made from top quality silk."
	    }
		
## Entering Items into the DB
You can manually enter items into the database. If you have time, build an interface to create new entries at:

`GET /bowties/new`

Visiting this page in the web browser should show a form for creating a bowtie.

## Need more to do?

If you finish everything above, build out your API so that it has full CRUD! You can use Postman or cURL to test out all of your routes.