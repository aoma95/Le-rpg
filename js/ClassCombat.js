class ClassCombat {
    constructor(hero,adversaire2){
        this.adversaire1=hero;
        this.adversaire2=adversaire2;
        this.lancementCombat();
    }
    lancementCombat(){
        this.afficheEnemi();
        $('main section:nth-of-type(1)').toggleClass('cacher');
    }
    afficheEnemi(){
        $('.enemi').append(`<h3>${this.adversaire2.nom}</h3>
        <ul>
            <li>Point de vie : ${this.adversaire2.pv}</li>
            <li>Force : ${this.adversaire2.force}</li>
            <li>Résistance : ${this.adversaire2.resistance}</li>
        </ul>`)
    }
}