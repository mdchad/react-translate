var MenuPage = React.createClass({
  getInitialState: function() {
    return{
      start: false,
    }

  },

  information: function() {
    console.log(this.state.start)
    if(this.state.start){
      this.setState({start: false})
    } else {
      this.setState({start: true})
    }
  },


  showInformation: function(start) {
    console.log("whats happening?")

      if(start) {
        return (
          <div>
            <p>What you want to eat</p>
            <button onClick={this.information}>back</button>
          </div>)
      } else {
        return (
          <div>
            <h1>Simple Malay</h1>
            <p>This website aims to teach you simple conversational Malay and to show it off to your mat/minah friends</p>
            <p>Why learn Malay?</p>
            <p>To get a better understanding of our national language.<br></br> Yeah get a better understanding of what ever the heck you sang for your national anthem.<br></br><small>(and also not to get scammed when in Malaysia)</small></p>
            <p>This idea came by because of Eugene who kept bugging me to translate every sentence/word to Malay. (and also because of his poor attempt at speaking Malay)</p>
            <button onClick={this.information}>Start learning</button>
          </div>
      )}
  },

  render: function() {
    console.log(this.state.start)

    return(
      <div>{this.showInformation(this.state.start)}</div>
    )
  }
})

ReactDOM.render(<MenuPage/>, document.getElementById('container'));
