class Livro {
  codigo: number;
  titulo: string;
  autor: string;
  disponivel: boolean;

  constructor(codigo: number, titulo: string, autor: string, disponivel: boolean) {
    this.codigo = codigo;
    this.titulo = titulo;
    this.autor = autor;
    this.disponivel = disponivel;
  }
}

class Biblioteca {
  private acervo: Livro[] = [];

  adicionarLivro(livro: Livro): void {
    this.acervo.push(livro);
  }

  registrarEmprestimo(codigo: number): void {
    const livro = this.acervo.find(l => l.codigo === codigo);
    if (!livro) {
      console.log("Livro não encontrado.");
      return;
    }
    if (!livro.disponivel) {
      console.log("Livro já está emprestado.");
      return;
    }
    livro.disponivel = false;
    console.log(`Empréstimo do livro "${livro.titulo}" registrado com sucesso.`);
  }

  consultarDisponibilidade(codigo: number): boolean {
    const livro = this.acervo.find(l => l.codigo === codigo);
    if (!livro) {
      console.log("Livro não encontrado.");
      return false;
    }
    return livro.disponivel;
  }
}

function cadastrarLivros(biblioteca: Biblioteca): void {
  const livro1 = new Livro(1, "O Senhor dos Anéis", "J.R.R. Tolkien", true);
  const livro2 = new Livro(2, "1984", "George Orwell", true);
  const livro3 = new Livro(3, "Dom Casmurro", "Machado de Assis", true);

  biblioteca.adicionarLivro(livro1);
  biblioteca.adicionarLivro(livro2);
  biblioteca.adicionarLivro(livro3);

  console.log("Livros cadastrados com sucesso.");
}

function realizarEmprestimo(biblioteca: Biblioteca, codigo: number): void {
  biblioteca.registrarEmprestimo(codigo);
}

function verificarDisponibilidade(biblioteca: Biblioteca, codigo: number): void {
  const disponivel: boolean = biblioteca.consultarDisponibilidade(codigo);
  if (disponivel) {
    console.log(`Livro ${codigo} está disponível.`);
  } else {
    console.log(`Livro ${codigo} não está disponível.`);
  }
}

const minhaBiblioteca = new Biblioteca();

cadastrarLivros(minhaBiblioteca);
realizarEmprestimo(minhaBiblioteca, 1);
verificarDisponibilidade(minhaBiblioteca, 1);
verificarDisponibilidade(minhaBiblioteca, 2);