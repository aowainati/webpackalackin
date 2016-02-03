# webpackalackin
Babel + Webpack + React

# How:
```
brew install nvm
nvm install
npm install
npm start
```

## To deploy:
```
brew install awscli
aws configure # follow prompts to configure credentials + region
npm run deploy # clean build and an s3 upload
```

# TODO:
* ~~Split up webpack configs~~
* ~~Pull in webpack hot loader~~
* ~~Emit `index.html` as part of build process~~ with hash
* ~~Test emitting css + images as part of build process~~
* ~~Re-write deployment scripts to deploy to an S3 bucket~~
* Add module aliases for easier imports
* Implement a `BaseComponent` that has some nice stuff on it (PureRenderMixin)
* Pull in react-router
* Pull in redux
* Pull in redux-dev-tools
* Integrate API framework with `redux`
* Snag some `Dapper` and `Modulate`
* Add build tools for making a new static website bucket