# A shopping list web application built using the MERN stack as instructed by Brad Traversy .

## This will be updated regularly as the tutorial progresses.  I can't recommend his material enough!

## Setting up mongoDB
This part of the tutorial is outdated as it configures mongoDB with mLab.  Clusters are now made directly on the mongoDB atlas website.  You'll need to first create a user account and set up a free M0 'sandbox' cluster. Next, add yourself as a user of that cluster.  At the time of this writing, you can then click on Database Access --> [EDIT] --> [Edit Password] if you don't know your cluster password.  You'll need this to add to your connection string.  The connection string password is NOT your mongoDB account password!!

Some other observations about the tutorial:

* Body Parser is now included in express.  Once you've instantiated the express app using express(), you can use the body parser middleware by passing app.use(express.json())

* mongoose.connect() will need the mongoURI and the following argument to successfully connect to the database: { useNewUrlParser: true, useUnifiedTopology: true } 

## Implementing React
Begin by creating a new folder named 'client' in the root directory.  For windows users: While in client in terminal/git Bash, you'll need to create the app using npx.  The tutorial instructs users to execute $create-react-app . ('.' points to the current directory for app creation).

### For more projects like this, check out www.traversymedia.com