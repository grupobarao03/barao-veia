let jogo;

function iniciarJogo() {
    const jogador1 = document.getElementById('jogador1'). value || 'jogador1';
    const jogador2 = document.getElementById('jogador2').value || 'jogador2';

    joga = new JogaDavelha(jogador1,jogador2);
    document.getElementById('entrada-nomes').classList.add('oculto');
    document.getElementById('jogo-container').classList.remove('oculto');
    jogo.atualizarPlacar();

    document.querySelectorAll('.celula').forEach(celula => {
        celula.addEventListener('click', function(){
         jogo.jogada(this.getAttribute('data-index'));

        });
    });
}
   class JogaDavelha {
    constructor(jogador1,jogador2){
        this.jogador1 = jogador1;
    this.jogador2 = jogador2;
    this.placarJogador1 = 0;
    this.placarJogador2 = 0;
    this.jogadorAtual = 'X';
    this.tabuleiro = Array(9).fill(null);
    this.atualizarVezJogador();  // Atualiza o indicador de vez do jogador 

    }
   
    atualizarVezJogador() {
        const vezJogador = this.jogadorAtual === 'X' ? this.jogador1 : this.jogador2;
        document.getElementById('vez-jogador')
        .textContent = `Vez de:${vezJogador} (${this.jogadorAtual})`;
     }

     
   }

    