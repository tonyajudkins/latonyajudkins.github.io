import React, {Component} from "react";
import tBot from '../../Assets/TBot.png';

class Tbot extends Component {
  constructor(props){
    super(props);
  }
  
  componentDidMount() {
      (function(d, m){
      var kommunicateSettings =
    {"appId":"2ac4dd28e96dbf54e36d0d4c1b223f659","popupWidget":true,"automaticChatOpenOnNavigation":true};
      var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
      window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
  }
  
  render() {
    return(<div>
      <div className={'nameT'}>
        Welcome, My name is 'T'.
      </div>
      <div className={'hi'}>
        <div className={'personal'}>I am Tonya's personal bot.</div> Don't be rude... Say Hi...
      </div>
      <img className={'tBotBig'} src={tBot} width={'22%'}/>
      ️</div>)
  }
  
}
export default Tbot;
