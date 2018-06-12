# Eon React

  

Eon React is a react component library to port over functionality from Pubnub EON. This library currently provides the ability to use the C3 charts and add different charts into your project which listen on pubnub channels.

You can see the storybook of the different charts over [here](http://eon.nxsyed.me/?selectedKind=Charts&selectedStory=Spline%20Chart&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel)

  

## Getting Started

  

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

  

### Prerequisites


You'll need npm, react, and Pubnub-react

```

npm install react pubnub-react

```

  

### Installing

Install using npm
  
```

npm install eon-react

```

## Using the component

 

  

### importing

```
import  React  from  'react';
import  PubNubReact  from  'pubnub-react';
import  Chart  from  'eon-react';

```
### Usage

```
constructor(props){
	super(props)
	this.pubnub  =  new  PubNubReact({
		subscribeKey:  'sub-c-6af8440e-4890-11e8-a3a7-d29c801c92ae'
	});
	this.pubnub.init(this);
}

render() {
	return(
		<Chart
			pubnub={this.pubnub}
			channels={[channel]}
			type={'spline'} />
	);
}
``` 

## Built With

  
*  [Pubnub](https://www.npmjs.com/package/pubnub-react) - Dependency Management

*  [EON](https://www.pubnub.com/developers/eon/) - Used to generate RSS Feeds

*  [React](https://reactjs.org/) - The web framework used

## Contributing

  

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

  

## Versioning

  

Using [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

  

## Authors

  

*  **Syed Ahmed** - *Initial work* - [nxsyed](https://github.com/nxsyed)

  

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

  

## License

  

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

  

## Acknowledgments

  

* Ian Jennings for building the initial Pubnub Eon library