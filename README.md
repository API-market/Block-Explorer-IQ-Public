<<<<<<< HEAD
<<<<<<< HEAD
# Everipedia Network Legacy Block Explorer
This is a legacy repo from the pre-blockchain version of Everipedia that has been modified to work with the blockchain version of the site. A new front-end is under development, but this will be the primary available front-end until then. 

# Clone the repo

```
git clone git@github.com:Eazy-C/Everipedia-Private.git
```

# Running a dev environment

Before running any of the docker code, make sure you have 
the docker daemon running. The code is different for every OS
so I won't list it here. Google it. 

```
# FIRST RUN THE DOCKER DAEMON

# build docker image
docker build .

# run container
docker run -d -p 80:80 -p 443:443 $(docker images -q | head -n 1)
```

The site will be running on localhost:8000
=======
# BlockExplorer-Public
>>>>>>> 5dbe8ff9db49c1a5cc8f6af9edae54883caa46c9
=======
# Everipedia Network Block Explorer
>>>>>>> 84ceed705b235d38556a94b6ba4deaaecf85337e
# Block-Explorer-IQ
# Block-Explorer-Everipedia
# Block-Explorer-IQ-Public
