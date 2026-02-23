# Upgrade the node version 
- `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash`
- `nvm ls-remote`
- `nvm install v20.19.0`

# create the remote repo on gitlab and 
- cd existing_repo
- git init --initial-branch=main --object-format=sha1
- git remote add origin git@gitlab.com:minmo-laptop/minmo-ui.git
- git add .
- git commit -m "Initial commit"
- git push --set-upstream origin main

# create the application 
- `npm create vite@latest my-app`
    - select React
    - select javascript

# Start the app
- `cd frontend`
- `npm install`
- `npm run dev`

# Packages dependencies
- `npm install bootstrap --save`  # save - adds the dependencies in package.son
- `npm install axios --save`
- `npm install react-router-dom`
- `npm install react-bootstrap`
- `npm install react-bootstrap-icons`
- `npm install react-webcam`
- `npm install @mediapipe/pose @mediapipe/camera_utils`

# Start the application
- `npm run dev`
- Access the application locally at - `http://localhost:3000/`
- Click on Size on left N avigation Bar


