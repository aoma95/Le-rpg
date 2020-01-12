class ClassHero extends ClassPersonnage {
    constructor(nom,pv,force,resistance,magi,endurance){
        super(nom,pv,force,resistance,magi);
        this.spell={
          "Attaque lourde":"Donne un Gros coup mais perd 15 d'endurance",
            "Attaque légère":"Donne un coup normal perd 2 d'endurance",
            "Cannon à Ki":"Fait des dégat perd 20 de magie"
        };
        this._magi = magi;
        this._endurance = endurance;
    }
    attaque(cible,typeAttaque) {
        if (this._endurance>=2) {
            if (typeAttaque === "Attaque Lourde"&&this.getEndurance()>=15) {
                let attaque = this.getForce() * Math.floor(Math.random() * 6) + 3;
                cible.setPv( cible.getPv() - attaque);
                this.setEndurance(this.getEndurance()-15);
            }
            if (typeAttaque === "Attaque légère") {
                cible.setPv(cible.getPv()-this.getForce());
                this.setEndurance(this.getEndurance()-2);
            }
        }
        if(this._magi>=20) {
            if (typeAttaque === "Cannon à Ki") {
                cible.setPv(cible.getPv()-200);
                this.setMagi(this.getMagi()-20)
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
