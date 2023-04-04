# Contributing Guidelines📝

> :information_source: Before contributing, please make sure you have read the guidelines below. <br>
If you're new to _git_ and/or _GitHub_, we suggest you go through [the GitHub Guides](https://guides.github.com/introduction/flow/).
<br>

Thank you for your interest in contributing to our Repo! Pull requests are welcome. For major changes, please open an [issue](https://github.com/KunalSalunkhe12/Student-Progress-Tracker/issues) first to discuss what you would like to change.


To start contributing, follow the below guidelines: 

**1.**  **Star** and **Fork** [this](https://github.com/KunalSalunkhe12/Student-Progress-Tracker.git) repository.

**2.**  Clone your forked copy of the project via `git`
   
```
git clone https://github.com/<your_user_name>/Student-Progress-Tracker.git
```

**3.** Navigate to the project directory :📁

```
cd Student-Progress-Tracker
```

**4.** Add a reference(remote) to the original repository.

```
git remote add upstream https://github.com/KunalSalunkhe12/Student-Progress-Tracker.git
```

**5.** Check the remotes for this repository.

```
git remote -v
```

**6.** Always take a pull from the upstream repository to your master branch to keep it at par with the main project(updated repository).

```
git pull upstream master
```

**7.** Create a new branch.

```
git checkout -b <your_branch_name>
```

**8.** Perfom your desired changes to the code base.

**9.** Track your changes:✔️: 

```
git add . 
```

**10.** Commit your changes .

```
git commit -m "Relevant message"
```

**11.** Push the committed changes in your feature branch to your remote repo.

```
git push -u origin <your_branch_name>
```

**12.** To create a pull request, click on `compare and pull requests`.

**13.** Add appropriate title and description to your pull request explaining your changes and efforts done.

**14.** Click on `Create Pull Request`.


**15.** Woohoo! You have made a PR to the Student-Progress-Tracker :boom: . Wait for your submission to be accepted and your PR to be merged.

**Thank you for your interest in contributing to our Repo!🏼**


## How to Run Locally!

**After cloning Your forked Repository**

Go to the project directory

```bash
  cd Student-Progress-Tracker
```

### Set up Client

Go to the Client directory

```bash
  cd Client
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

### Set up Express Server

Go to the Server directory

```bash
  cd Server
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  node server.js
```

### Set up Flask Server

Go to the Model directory

```bash
  cd Model
```

Install dependencies

```bash
  pip install -r requirements.txt
```

Start the server

```bash
  python app.py
```

**Make sure to create an .env file and add:**

```bash
PORT=5000
DATABASE_URL= YOUR_MONGODB_URL
FLASK_SERVER_URL= YOUR_FLASK_URL/predict
CLIENT_URL= YOUR_CLIENT_LOCALHOST_URL
```

If you have any errors or issues, feel free to ask for help.