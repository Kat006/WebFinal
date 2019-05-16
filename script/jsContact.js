class PrenameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {prename: '', erreur: '', icon:{visibility: "hidden"}};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({prename: e.target.value, erreur:'', icon:{visibility:"hidden"}});
    if(!e.target.checkValidity() && e.target.value != ""){
      e.target.style.boxShadow ="0px 0px 40px red";
      this.setState({erreur:" doit etre entre 3 et 15 caracteres alphanumeriques",icon: {visibility:"visible"}});
    }else{
      e.target.style.boxShadow ="";
      this.setState({erreur:"",icon: {visibility:"hidden"}});
    }
  }

  render() {
    return (
      <div>
        <label>
          Votre prenom <span> {this.state.erreur}</span>
          </label>
          <input type="text"
          autoFocus
          className="form-control"
          id="prename"
          placeholder="Katsiaryna"
          value={this.state.nom}
          pattern="[a-zA-ZÀ-ÿ\-]{3,15}"
          required
          onChange={this.handleChange} />
      </div>
    );
  }
}

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
      this.setState({erreur:"doit etre entre 3 et 25 caracteres alphanumeriques",icon: {visibility:"visible"}});
    }else{
      e.target.style.boxShadow ="";
      this.setState({erreur:"",icon: {visibility:"hidden"}});
    }
  }

  render() {
    return (
      <div>
        <label>
          Votre nom <span> {this.state.erreur}</span>
          </label>
          <input type="text"
          className="form-control"
          id="nom"
          placeholder="Shmatkova"
          value={this.state.nom}
          pattern="[a-zA-ZÀ-ÿ\-]{3,25}"
          required
          onChange={this.handleChange} />
      </div>
    );
  }
}

class EmailAdd extends React.Component {
  constructor(props){
    super(props);
    this.state = {email: '',erreur: '', icon: {visibility:"hidden"}};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e){
    this.setState({email: e.target.value});
    if(!e.target.checkValidity() && e.target.value != ""){
      e.target.style.boxShadow = "0px 0px 40px red";
      this.setState({erreur:"doit etre examle73@exam.com",icon: {visibility:"visible"}});
    }else{
      e.target.style.boxShadow = "";
      this.setState({erreur:"",icon: {visibility:"hidden"}});
    }
  }
  render = () =>
  <div className="form-group">
   <label htmlFor="email"> Votre email <span> {this.state.erreur}</span> </label>
   <input
    className="form-control"
    type="email"
    id="email"
    name="email"
    placeholder="kat.shmat@yahoo.com"
    required
    max="50"
    value={this.state.age}
    onChange={this.handleChange}
    required
   />
   </div>
   ;
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
    <option value="homme">Homme</option>
    <option value="autre">Autre</option>
  </select>
  </div>
  ;
}

class Age extends React.Component {
  constructor(props){
    super(props);
    this.state = {age: '',erreur: '', icon: {visibility:"hidden"}};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e){
    this.setState({age: e.target.value});
    if(!e.target.checkValidity() && e.target.value != ""){
      e.target.style.boxShadow = "0px 0px 40px red";
      this.setState({erreur:"doit etre entre 18 et 77",icon: {visibility:"visible"}});
    }else{
      e.target.style.boxShadow = "";
      this.setState({erreur:"",icon: {visibility:"hidden"}});
    }
  }
  render = () =>
  <div className="form-group">
   <label htmlFor="age"> Votre age <span> {this.state.erreur}</span> </label>
   <input
    className="form-control"
    type="number"
    id="age"
    name="age"
    min="18"
    max="77"
    value={this.state.age}
    onChange={this.handleChange}
    required
   />
   </div>
   ;
}


class Revenu extends React.Component {
  constructor(props){
    super(props);
  }
  render = () =>
  <div className="form-group">
   <label htmlFor="revenu"> Votre revenu</label>
   <select id="revenu" className="form-control" defaultValue="50 000$ a 69 999$">
     <option value="1$ a 24 999$">1$ a 24 999$</option>
     <option value="25 000$ a 49 999$">25 000$ a 49 999$</option>
     <option value="50 000$ a 69 999$">50 000$ a 69 999$</option>
     <option value="70 000$ a 99 999$">70 000$ a 99 999$</option>
     <option value="100 000 a 499 999$">100 000 a 499 999$</option>
     <option value="500 000 et plus">500 000 et plus</option>
   </select>
   </div>
   ;
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
       <label htmlFor="message">Votre commentaire <span> {this.state.erreur}</span> <small className="text-danger"></small></label>
       <textarea className="form-control"
       id="message"
       rows="3"
       style={{boxShadow:"none"}}
       required
       value={this.state.message}
       onChange={this.handleChange}
       ></textarea>
      <input type="submit" value="Submit" />
     </div>
 }


class GererTout extends React.Component {
  render = () =>
      <div>
        <PrenameForm />
        <NameForm />
        <EmailAdd />
        <Sexe />
        <Age />
        <Revenu />
        <MessageClient />
      </div>
      ;

}

ReactDOM.render( <GererTout />, document.getElementById("contact"));
