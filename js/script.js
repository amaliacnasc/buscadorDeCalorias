document.addEventListener('DOMContentLoaded', function() {
    const botao = document.querySelector('#button'); 
    const exercicio = document.querySelector('#exercise'); 
    const lista = document.querySelector(".lista"); 
    const imagem = document.querySelector(".imagem");

    botao.addEventListener('click', pesquisar); 

    async function pesquisar() {
        // Atualiza a imagem com base no exercício pesquisado
       // let imagemUrl = `https://source.unsplash.com/800x600/?${exercicio.value}`;
       // imagem.src = imagemUrl;

        let exercicios = [];
        const url = `https://api.api-ninjas.com/v1/caloriesburned?activity=${exercicio.value}`;
        await fetch(url, {
            method: 'GET', 
            headers: {
                'X-API-KEY': 'XR7x0Klxm+PBBkIrelOS4A==rgoztSMTvUN3CrKp'
            }
        })
        .then((res) => res.json())
        .then((data) => {
            exercicios = data;
            displayExercicios(exercicios);
        });
    }

    function displayExercicios(exercicios) {
        lista.innerHTML = ''; // Limpa a lista atual
        
        // Verifica se há exercícios antes de iterar
        if (Array.isArray(exercicios) && exercicios.length > 0) {
            exercicios.forEach(element => {
                let tituloLista = document.createElement('dt');
                tituloLista.textContent = element.name;

                let caloriasExercicio = document.createElement('dd');
                caloriasExercicio.textContent = `Calorias por hora: ${element.calories_per_hour}`; 

                lista.appendChild(tituloLista); 
                lista.appendChild(caloriasExercicio);
            });
        } else {
            // Se não houver dados, exibe uma mensagem
            lista.innerHTML = '<p>No exercises found.</p>';
        }
    }
});

// fazer o bloco try catch 
// tentar puxar imagem de uma api 