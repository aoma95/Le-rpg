class ClassPersonnage {
    constructor(nom,pv,force,resistance){
        this.nom=nom;
        this._pv = pv;
        this._force = force;
        this._resistance = resistance;
    }
    attaque(cible){
        cible.setPv(cible.getPv()-this.getForce());
    }
    mort(){
        this._pv=0;
    }
    getPv() {
        return this._pv;
    }

    setPv(value) {
        if(value<0){
            this._pv=0;
        }else{
            this._pv = value;
        }
    }

    getForce() {
        return this._force;
    }

    setForce(value) {
        if(value<0){
            this._force=0;
        }else{
            this._force = value;
        }
    }

   getResistance() {
        return this._resistance;
    }

    setResistance(value) {
        if(value<0){
            this._resistance=0;
        }else{
            this._resistance = value;
        }
    }


}