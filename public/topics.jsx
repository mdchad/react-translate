var Topics = React.createClass({
  getInitialState: function() {
    return {
      clickNext: false,
    }
  },

  translateFirst: function() {
    if(this.state.clickNext){
      this.setState({clickNext: false})
    } else {
      this.setState({clickNext: true})
    }
  },



  translateNow: function(clickNext) {
    if(clickNext) {
    return(
      <div>
        <button className="back" onClick={this.translateFirst}><i className="fa fa-chevron-left" aria-hidden="true"></i> back</button>
        <div className="wrap2">
          <ul className="leftSide">
            <li>Good morning</li>
            <li>How are you</li>
            <li>Goodbye</li>
            <li>I'm good</li>
            <li>How's everthing?</li>
          </ul>
          <ul className="rightSide">
            <li>Selamat pagi</li>
            <li>Amacam ? baik ?</li>
            <li>Selamat jalan</li>
            <li>Aku baik</li>
            <li>Sume okay?</li>
          </ul>
        </div>
      </div>
    )} else {
      return (
      <div className="wrap">
        <h1>Topics</h1>
        <ul>
          <li onClick={this.translateFirst}>Greet</li>
          <li onClick={this.translateSecond}>Eat</li>
        </ul>
      </div>
    )}
  },





  render: function() {
    return(
      <div>{this.translateNow(this.state.clickNext)}
      </div>
    )
  }
})
