class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {nom: '', erreur: '', icon:{visibility: "hidden"}};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({nom: e.target.value, erreur:'', icon:{visibility:"hidden"}});
    if(!e.target.checkValidity() && e.target.value != ""){
      e.target.style.boxShadow ="0px 0px 40px red";
      this.setState({erreur:"Nom doit etre entre 3 et 25",icon: {visibility:"visible"}});
    }else{
      e.target.style.boxShadow ="";
      this.setState({erreur:"",icon: {visibility:"hidden"}});
    }
  }

  render() {
    return (
      <div>
        <label>
          Nom:
          </label>
          <input type="text"
          className="form-control"
          id="nom"
          placeholder="Votre Nom"
          value={this.state.nom}
          pattern="[a-zA-Z]{3,25}"
          required
          onChange={this.handleChange} />
      </div>
    );
  }
}

class MessageClient  extends React.Component {
  constructor(props){
    super(props);
    this.state = {message: '',erreur: '', icon: {visibility:"hidden"}};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({message: e.target.value});
    if(!e.target.checkValidity() && e.target.value != ""){
      e.target.style.boxShadow = "0px 0px 40px red";
      this.setState({erreur:"Remplisez le message",icon: {visibility:"visible"}});
    }else{
      e.target.style.boxShadow = "";
      this.setState({erreur:"",icon: {visibility:"hidden"}});
    }
  }

  render = () =>
    <div className = "ferm-group">
      <label htmlFor="message">Votre commentaire <small className="text-danger"></small></label>
      <textarea className="form-control"
      id="message"
      rows="3"
      style={{boxShadow:"none"}}
      required
      value={this.state.message}
      onChange={this.handleChange}
      ></textarea>
    </div>
}

class Sexe extends React.Component {
  constructor(props){
    super(props);
  }
 render = () =>
 <div className="form-group">
  <label htmlFor="sexe"> Votre sexe</label>
  <select id="sexe" className="form-control" defaultValue="Femme">
    <option value="femme">Femme</option>
    <option value="femme">Homme</option>
    <option value="femme">Autre</option>
  </select>
  </div>
  ;
}


class GererTout extends React.Component {
  render = () =>
      <div>
        <NameForm />
        <MessageClient />
        <Sexe />
      </div>
      ;

}

ReactDOM.render( <GererTout />, document.getElementById("contact"));
