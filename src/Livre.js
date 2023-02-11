export default class Livre {
    constructor(id, titre, qte, prix) {
        this._titre = titre;
        this._qte = qte;
        this._prix = prix;
        this._id = id;
        //this._id = Date.now() + Math.floor(Math.random() * 10); // génération d'un id unique
    }
    
    get titre() {
        return this._titre;
    }
    
    get qte() {
        return this._qte;
    }
    
    get prix() {
        return this._prix;
    }

    get id() {
        return this._id;
    }

  // modifier le texte
  set titre(titre) {
    this._titre = titre;
  }
  pourAfficher() {
    return `--> ${this._titre} `;
  }
}
