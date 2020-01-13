class ClassCombat {
    constructor(hero,adversaire2,texte,button,classeUn,button2="",classeDeux=""){
        this.texte=texte;
        this.boutton=button;
        this.boutton2=button2;
        this.classeUn=classeUn;
        this.classeDeux=classeDeux;
        this.adversaire1=hero;
        this.adversaire2=adversaire2;
        this.lancementCombat()
    }
    lancementCombat(){
        this.afficheEnemi();
        this.afficherSort();
    }
    afficheEnemi(){
        $('.enemi').empty();
        $('.enemi').append(`<h3>${this.adversaire2.nom}</h3>
        <ul>
            <li>Point de vie : ${this.adversaire2.getPv()}</li>
            <li>Force : ${this.adversaire2.getForce()}</li>
            <li>Résistance : ${this.adversaire2.getResistance()}</li>
        </ul>`)
    }

    afficherSort(){
        $('.EspaceCombat').empty();
        if(this.adversaire1.getEndurance()>15){
            $('.EspaceCombat').append(`<button class="petit">${this.rechercherkeySpell(this.adversaire1.spell["Attaque légère"])}</button><button class="gros">${this.rechercherkeySpell(this.adversaire1.spell["Attaque lourde"])}</button>`);
        }
        if(this.adversaire1.getEndurance()<15&&this.adversaire1.getEndurance()>2){
            $('.EspaceCombat').append(`<button class="petit">${this.rechercherkeySpell(this.adversaire1.spell["Attaque légère"])}</button>`);
        }
        if(this.adversaire1.getEndurance()<=1){
            $('.EspaceCombat').append(`<p>Pas assez de force pour taper</p><button class="passer">Passer</button>`);
        }
        if(this.adversaire1.getMagi()>0){
            $('.EspaceCombat').append(`<button class="magi">Cannon à Ki</button>`);
        }
        this.clicBoutonSort()

    }
    rechercherkeySpell(value){
        return Object.keys(this.adversaire1.spell).find(key => this.adversaire1.spell[key] === value);
    }
    clicBoutonSort() {
        $("main section.EspaceCombat button").click((event => {
            if (event.target.className === "petit") {
                this.adversaire1.attaque(this.adversaire2, "Attaque légère");
            }
            if (event.target.className === "gros") {
                this.adversaire1.attaque(this.adversaire2, "Attaque Lourde");
            }
            if (event.target.className === "passer") {
            }
            if (event.target.className === "magi") {
                this.adversaire1.attaque(this.adversaire2, "Cannon à Ki");
            }
            this.afficheEnemi();
            this.afficherJoueur();
            if (this.adversaire2.getPv() === 0) {
                $('.EspaceCombat').empty();
                $('.EspaceCombat').append('<p>Vous avez gagné le combat</p><button class="continu">Continuer</button>');
                $('.EspaceCombat button.continu').click(( event => {
                    let histoire= new ClassHistoire();
                    if(this.classeUn==="mort"){
                        this.adversaire1.setPv(0);
                        this.afficherJoueur();
                    }
                    histoire.swap();
                    histoire.hero=this.adversaire1;
                    histoire.embranchement(this.texte,this.classeUn,this.boutton,this.classeDeux,this.boutton2);

                }));
            } else {
                this.adversaire2.attaque(this.adversaire1);
                this.afficherJoueur();
                if(this.adversaire1.getPv()===0){
                    $('.EspaceCombat').empty();
                    this.mortJoueur();
                }else{
                    this.afficherSort();
                }
            }
        }))
    }
    afficherJoueur(){
        $('.hero').empty();
        $('.hero').append(`<h3>${this.adversaire1.nom}</h3>
        <ul>
            <li>Point de vie : ${this.adversaire1.getPv()}</li>
            <li>Force : ${this.adversaire1.getForce()}</li>
            <li>Magie : ${this.adversaire1.getMagi()}</li>
            <li>Résistance : ${this.adversaire1.getResistance()}</li>
            <li>Endurance : ${this.adversaire1.getEndurance()}</li>
        </ul>
        <p>${this.rechercherkeySpell("Donne un Gros coup mais perd 15 d'endurance")} : ${this.adversaire1.spell["Attaque lourde"]}</p>
        <p>${this.rechercherkeySpell("Donne un coup normal perd 2 d'endurance")} : ${this.adversaire1.spell["Attaque légère"]}</p>
        <p>${this.rechercherkeySpell("Fait des dégat perd 20 de magie")} : ${this.adversaire1.spell["Cannon à Ki"]}</p>`)
    }
    mortJoueur(){
        $('.EspaceCombat').empty();
        $('.EspaceCombat').append('<p>Vous êtes mort</p><button class="mort">Retour début</button>');
        $('.EspaceCombat button').click(function() {
            $('main').empty();
            let histoire = new ClassHistoire();
            histoire.lancementHistoire();
        });
    }

}