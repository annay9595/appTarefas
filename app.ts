const adicionar = document.getElementById('adicionar') as HTMLButtonElement;
const titulo = document.getElementById('titulo') as HTMLInputElement;
const formulario = document.getElementById('form-tarefa') as HTMLFormElement;
const descricao = document.getElementById('descricao') as HTMLTextAreaElement;
const lista = document.getElementById('tarefas_lista') as HTMLUListElement;
class Tarefa{
    titulo: string;
    descricao: string;
    data: Date;

    constructor(tituloRecebido: string, descricaoRecebida: string){
        this.titulo = tituloRecebido;
        this.descricao = descricaoRecebida;
        this.data = new Date();
    }
    renderizar(){
        const li = document.createElement('li');
        const check =  document.createElement('input');
        check.type = "checkbox";
        check.addEventListener("change", () => {
            li.classList.toggle("concluida")
        })
        const titulo_render = document.createElement('h3');
        const descricao_render = document.createElement('p');
        const data = document.createElement('small');

        titulo_render.textContent = this.titulo;
        descricao_render.textContent = this.descricao;
        data.textContent = this.data.toLocaleString();

        li.append(check);
        li.append(titulo_render);
        li.append(descricao_render);
        li.append(data);

        lista.append(li);

        return li;
    }
}


formulario.addEventListener('submit', (formEvent) => {
    formEvent.preventDefault();
    const novaTarefa = new Tarefa(titulo.value, descricao.value);
    novaTarefa.renderizar();

});
