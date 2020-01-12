class ClassHero extends ClassPersonnage {
    constructor(nom,pv,force,resistance,magi,endurance){
        super(nom,pv,force,resistance,magi);
        this.spell={
          "Attaque lourde":"Donne un Gros coup mais perd 15 d'endurance",
            "Attaque légère":"Donne un coup normal perd 2 d'endurance",
        };
        this._magi = magi;
        this._endurance = endurance;
    }
    attaque(cible,typeAttaque) {
        if (this._endurance>=2) {
            if (typeAttaque === "Attaque Lourde"&&this.getEndurance()>=15) {
                cible.setPv( cible.getPv() - (this.getForce() * Math.floor(Math.random() * 6) + 3));
                this.setEndurance(this.getEndurance()-15);
            }
            if (typeAttaque === "Attaque légère") {
                cible.setPv(cible.getPv()-this.getForce());
                this.setEndurance(this.getEndurance()-2);
            }
        }
    }
    getMagi() {
        return this._magi;
    }

    setMagi(value) {
        if(value<0){
            this._magi=0;
        }else{
            this._magi = value;
        }
    }

    getEndurance() {
        return this._endurance;
    }

    setEndurance(value) {
        if(value<0){
            this._endurance=0;
        }else{
            this._endurance = value;
        }
    }


}
