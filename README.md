# webpackalackin
Babel + Webpack + React

# How:
## To develop locally:
```
brew install nvm
nvm install
npm install -g $(cat .npm-version)
npm install
npm start
```

## To deploy:
```
brew install awscli
aws configure # follow prompts to configure credentials + region
echo <name of your s3 bucket> > .s3bucket # you'll probably want to commit this file to the repo, too
npm run deploy # clean build and an s3 upload
```

# TODO:
* ~~Split up webpack configs~~
* ~~Pull in webpack hot loader~~
* ~~Emit `index.html` as part of build process~~ with hash
* ~~Test emitting css + images as part of build process~~
* ~~Re-write deployment scripts to deploy to an S3 bucket~~
* ~~Implement a `BaseComponent` that has some nice stuff on it (PureRenderMixin)~~
* Integrate `react-router`
* Integrate `redux`
* Integrate `redux-interactions`
* Integrate `redux-dev-tools` (reducer configuration, not the React component)
* Snag some `Dapper` and `Modulate`
* Add module aliases for easier imports
* Add .eslintrc
* Set up unit tests
* Add file watcher for automatic test running
