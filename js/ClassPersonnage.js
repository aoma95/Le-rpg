class ClassPersonnage {
    constructor(nom,pv,force,resistance){
        this.nom=nom;
        this.pv=pv;
        this.force=force;
        this.resistance=resistance;
    }
    attaque(cible){
        cible.pv=cible.pv-this.force;
    }
    mort(){
        this.pv=0;
    }


}