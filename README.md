## Creating and fetching from local api
### Main steps involved

1.  As a demo, I copied routing-Contentful repository setup and removed contentful dependency (except at the stage where I saved my object). To be able to save my data (that I want to make available on local port), I had to work on nodejs (outside the react environment). I prepared `tryinToFetch.js` file and run it on the terminal and saved my json file as `continent.json`

2. Set up the local server in `index.js` file. To be able to do that, I needed to do the following:
	1. 	I included the line `"type": "module"` within the `package.json` file-- this is to follow the current trend (eg. using import instead of require) 
	2.  in the same file, within `"scripts"` section, I added `"start" : "node index.js"`  
	3. I installed `express` by running `npm install express nodemon`
	4. to be able to use nodemon, I included a line `"source" : "nodemon index.js"` /This will allow me to activate the server API by running `npm run source` or `npm start`

3. I lounched the react app on Chrome with a command `npm run dev`
4. I lounched the server with a command `npm start`
5. refresh chrome
