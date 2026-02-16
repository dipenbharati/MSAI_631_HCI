# Steps

# Download the base code model from git hub
- https://github.com/gabri-al/recommender_system.git

# Create the Python virtual Env
- `python3 -m venv flaskenv`

# Install “flask” and “python-dotenv” using pip:
- `pip3 install flask`
- `pip3 install python-dotenv`

# Install the dependencies from the requirement.txt
- `pip install -r requirements.txt`

# MongoDB Installation
- Run this command to fetch the specific key for MongoDB 8.0 and use gpg to save it to your system's keyring.
- `curl -fsSL https://www.mongodb.org/static/pgp/server-8.0.asc | sudo gpg -o /usr/share/keyrings/mongodb-server-8.0.gpg --dearmor --yes`

- Create a repository file for your specific Ubuntu version. 
  `echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-8.0.gpg ] https://repo.mongodb.org/apt/ubuntu noble/mongodb-org/8.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-8.0.list`

- Install MongoDB community Edition
`sudo apt-get update && sudo apt-get install -y mongodb-org`

- Start the MongoDB
- `sudo systemctl start mongod`
- `mongosh`
