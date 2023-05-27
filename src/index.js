import { Personagem } from "./modules/personagem.js"
import { PersonagemView } from "./components/personagem-view.js"
import { Mago } from "./modules/mago.js"
import { Arqueiro } from "./modules/arqueiro.js"
import { ArqueiroMago } from "./modules/arqueiro-mago.js"
import { Guerreiro } from "./modules/guerreiro.js"

// const personagemPedrinho = new Personagem('Pedrinho', 5, 'Mago')
// const personagemJose = new Personagem('Jose', 3, 'Arqueiro')

const magoAntonio = new Mago('Antonio', 4, 'fogo', 4, 3)
const magaJulia = new Mago('Julia', 8, 'gelo', 7, 10)
const arqueiroRafa = new Arqueiro('Rafa', 10, 10)
const arqueiroMagoChico = new ArqueiroMago('Chico', 7, 10, 'Ar', 4, 8)
const guerreiroCaco = new Guerreiro('Caco', 10)

const personagens = [magoAntonio, magaJulia, arqueiroRafa, arqueiroMagoChico, guerreiroCaco]

new PersonagemView(personagens).render()