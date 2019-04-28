/* Exercício 1: juros simples

    Crie um módulo juros.js, 
    e exporte dele uma função jurosSimples que recebe C (capital), 
    i (juros em decimal. ex: 3,5% = 0.035) e t (tempo). 
    E retorne o juros simples do período (C * i * t ). 

*/



const jurosSimples = (C, i, t) => C * i * t

const montanteSimples = ({ jurosSimples }) => (C, i , t) => C + jurosSimples(C, i, t)

const montanteJurosCompostos =(C, i , t) => C * (Math.pow((1+i), t))

const jurosCompostos = ({montanteJurosCompostos})=> (C, i, t) => montanteJurosCompostos(C, i, t) - C


module.exports = {
    jurosSimples,
    montanteSimples:montanteSimples({jurosSimples}),
    montanteJurosCompostos,
    jurosCompostos:jurosCompostos({montanteJurosCompostos}),
    pure: {
        montanteSimples,
        jurosCompostos
        
    }
   
}


