class ClassHero extends ClassPersonnage {

    constructor(nom,pv,force,resistance,magi,endurance){
        super(nom,pv,force,resistance,magi);
        this.magi=magi;
        this.endurance=endurance;
        this.spell={
          "Attaque Lourde":"Donne un Gros coup mais perd 15 d'endurance",
            "Attaque légère":"Donne un coup normal perd 2 d'endurance",
        };
    }
    attaque(cible,typeAttaque) {
        if (this.endurance>=2) {
            if (typeAttaque === "Attaque Lourde"&&this.endurance>=15) {
                cible.pv = cible.pv - (this.force * Math.floor(Math.random() * 5) + 2);
                this.endurance = this.endurance - 15;
            }
            if (typeAttaque === "Attaque légère") {
                cible.pv = cible.pv - this.force;
                this.endurance = this.endurance - 2;
            }
        }

    }


}
