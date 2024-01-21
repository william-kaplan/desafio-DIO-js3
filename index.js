class heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    switch (this.tipo) {
      case "mago":
        ataque = "magia";
        break;
      case "guerreiro":
        ataque = "espada";
        break;
      case "monge":
        ataque = "artes marciais";
        break;
      case "ninja":
        ataque = "shuriken";
        break;
      default:
        ataque = "você não usou um herói";
    }

    console.log(
      `O ${this.tipo} que se chama ${this.nome} e tem ${this.idade} anos, atacou usando ${ataque}`
    );
  }
}

const heroi1 = new heroi("Ondre", 70, "mago");
const heroi2 = new heroi("Bertron", 32, "guerreiro");
const heroi3 = new heroi("Fundai", 79, "monge");
const heroi4 = new heroi("Senkai", 26, "ninja");

heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();
